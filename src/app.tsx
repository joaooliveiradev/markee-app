import { Sidebar } from 'shared/Sidebar'
import { Main } from 'shared/Main'
import { useRef } from 'react'

const App = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <>
      <Sidebar inputRef={inputRef} />
      <Main inputRef={inputRef} />
    </>
  )
}
export { App }
