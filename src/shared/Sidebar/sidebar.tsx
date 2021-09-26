import { Logo } from 'ui/Logo'
import { Button } from 'ui/Button'
import { List } from 'ui/List'
import styled from 'styled-components'
import { Dispatch, SetStateAction, RefObject } from 'react'
import { filesArrProps } from 'resources/types'
type SideBarProps = {
  className?: string,
  state: {
    files: Array<filesArrProps>,
    setFiles: Dispatch<SetStateAction<Array<filesArrProps>>>,
    inputRef: RefObject<HTMLInputElement>,
  }
}
const Sidebar = ({ className, state }: SideBarProps) => {
  const { files, setFiles, inputRef } = state
  return (
    <aside className={className}>
      <Logo />
      <Button state={{ files, setFiles, inputRef }} />
      <List state={{ files, setFiles }} inputRef={inputRef} />
    </aside>
  )
}
const SidebarStyled = styled(Sidebar)`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.black};
`

export { SidebarStyled as Sidebar }
