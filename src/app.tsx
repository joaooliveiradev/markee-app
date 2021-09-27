import { Sidebar } from 'shared/Sidebar'
import { Main } from 'shared/Main'
import { useRef, useState, useEffect } from 'react'
import { filesArrProps } from 'resources/types'
const App = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<Array<filesArrProps>>([])
  const fileActive = files.find(file => file.active === true)
  console.log(files)
  useEffect(() => {
    if (fileActive?.status !== 'editing') {
      return
    }
    const savingTimer: ReturnType<typeof setTimeout> = setTimeout(() => {
      handleStatus('saving')
      setTimeout(() => {
        handleStatus('saved')
      }, 301)
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
  return (
    <>
      <Sidebar state={{ files, setFiles, inputRef }} />
      <Main handleChangeFileName={handleChangeFileName} handleChangeContent={handleChangeContent} fileActive={fileActive} inputRef={inputRef} />
    </>
  )
}
export { App }
