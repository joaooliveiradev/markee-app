import { Sidebar } from 'shared/Sidebar'
import { Main } from 'shared/Main'
import { useRef, useState } from 'react'
import { filesArrProps } from 'resources/types'
import { v4 as uuidv4 } from 'uuid'
// TODO: Começar com um array ja predefindo enquanto ainda não faço a verificação se existe algum dado para bloquear o Main Content
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
  return (
    <>
      <Sidebar state={{ files, setFiles, inputRef }} />
      <Main state={{ files, setFiles, inputRef }} />
    </>
  )
}
export { App }
