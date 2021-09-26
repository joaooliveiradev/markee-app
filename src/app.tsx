import { Sidebar } from 'shared/Sidebar'
import { Main } from 'shared/Main'
import { useRef, useState } from 'react'
import { filesArrProps } from 'resources/types'
import { v4 as uuidv4 } from 'uuid'
// TODO: Começar com um array ja predefindo enquanto ainda não faço a verificação se existe algum dado para bloquear o Main Content

// TODO:
const fileArr: filesArrProps = {
  id: uuidv4(),
  name: 'Sem título',
  content: '',
  active: true,
  status: 'saved',
}
const App = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<Array<filesArrProps>>([fileArr])
  const fileActive = files.find(file => file.active === true)
  const handleChangeFileName = (title: string) => {
    setFiles((files) => files.map(file => {
      if (!file.active) {
        return file
      }
      return {
        ...file,
        name: title,
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
