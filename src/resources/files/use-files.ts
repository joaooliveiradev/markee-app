import { useRef, useState, useEffect, MouseEvent, ChangeEvent } from 'react'
import { filesArrProps } from 'resources/types'
import { v4 as uuidv4 } from 'uuid'
export const useFiles = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<Array<filesArrProps>>([])
  useEffect(() => {
    const fileActive = files.find(file => file.active === true)
    if (!fileActive || fileActive?.status !== 'editing') return
    const savingTimer: ReturnType<typeof setTimeout> = setTimeout(() => {
      handleStatusFile('saving')
      setTimeout(() => {
        handleStatusFile('saved')
      }, 300)
    }, 300)
    return () => clearTimeout(savingTimer)
  }, [files])

  const handleChangeFileName = (id: string) => (e: ChangeEvent<HTMLInputElement>) => {
    setFiles((files) => files.map(file => {
      if (file.id === id) {
        return {
          ...file,
          name: e.target.value,
          status: 'editing',
        }
      }
      return file
    }))
  }
  const handleChangeContent = (id: string) => (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFiles((files) => files.map(file => {
      if (file.id === id) {
        return {
          ...file,
          content: e.target.value,
          status: 'editing',
        }
      }
      return file
    }))
  }
  const handleStatusFile = (status: 'editing' | 'saved' | 'saving') => {
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
  const handleDeleteFile = (clickId: string) => setFiles(files.filter(file => file.id !== clickId))
  const handleChangeFile = (clickId: string) => (e: MouseEvent) => {
    inputRef.current?.focus()
    e.preventDefault()
    setFiles((files) => files.map(file => {
      return {
        ...file,
        active: file.id === clickId,
      }
    }))
  }
  const handleCreateNewFile = () => {
    inputRef.current?.focus()
    const newObjValues: filesArrProps = {
      id: uuidv4(),
      name: 'Sem título',
      content: '',
      active: true,
      status: 'saved',
    }
    setFiles((files) => [...files.map(file => ({ ...file, active: false })), newObjValues])
  }
  return {
    inputRef,
    files,
    handleChangeFileName,
    handleChangeContent,
    handleDeleteFile,
    handleChangeFile,
    handleCreateNewFile,
  }
}
