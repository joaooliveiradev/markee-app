import { Sidebar } from 'shared/Sidebar'
import { Main } from 'shared/Main'
import { useRef, useState, useEffect } from 'react'
import { filesArrProps } from 'resources/types'
import { v4 as uuidv4 } from 'uuid'
const App = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<Array<filesArrProps>>([])
  const fileActive = files.find(file => file.active === true)
  useEffect(() => {
    if (fileActive?.status !== 'editing') return
    const savingTimer: ReturnType<typeof setTimeout> = setTimeout(() => {
      handleStatus('saving')
      setTimeout(() => {
        handleStatus('saved')
      }, 600)
    }, 300)
    // TODO: Ajustar o estado após salvar, pois ele fica salvando direto.
    return () => {
      clearTimeout(savingTimer)
    }
  }, [files, fileActive])

  const handleChangeFileName = (title: string) => {
    setFiles((files) => files.map(file => {
      if (!file.active) {
        return file
      }
      return {
        ...file,
        name: title,
        status: 'editing',
      }
    }))
  }
  const handleChangeContent = (content: string) => {
    setFiles((files) => files.map(file => {
      if (!file.active) {
        return file
      }
      return {
        ...file,
        content: content,
        status: 'editing',
      }
    }))
  }
  const handleStatus = (status: 'editing' | 'saved' | 'saving') => {
    setFiles((files) => files.map(file => {
      if (!file.active) {
        return file
      }
      return {
        ...file,
        status: status,
      }
    }))
  }
  const handleLinkDelete = (clickId: string) => setFiles(files.filter(file => file.id !== clickId))
  const handleListChangeItem = (clickId: string) => {
    setFiles((files) => files.map(file => {
      if (file.active) return { ...file, active: false }
      if (file.id === clickId) return { ...file, active: true }
      return { ...file }
    }))
    inputRef.current?.focus()
  }
  const handleListAddItem = () => {
    const newObjValues: filesArrProps = {
      id: uuidv4(),
      name: 'Sem título',
      content: '',
      active: true,
      status: 'saved',
    }
    setFiles((files) => [...files.map(file => ({ ...file, active: false })), newObjValues])
    inputRef.current?.focus()
  }
  return (
    <>
      <Sidebar handleLinkDelete={handleLinkDelete} handleListChangeItem={handleListChangeItem} handleListAddItem={handleListAddItem} files={files} />
      <Main handleChangeFileName={handleChangeFileName} handleChangeContent={handleChangeContent} fileActive={fileActive} inputRef={inputRef} />
    </>
  )
}
export { App }
