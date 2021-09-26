import { Logo } from 'ui/Logo'
import { Button } from 'ui/Button'
import { List } from 'ui/List'
import styled from 'styled-components'
import { useState, RefObject } from 'react'
import { filesArrProps } from 'resources/types'
type SideBarProps = {
  className?: string,
  inputRef: RefObject<HTMLInputElement>
}
const Sidebar = ({ className, inputRef }: SideBarProps) => {
  const [files, setFiles] = useState<Array<filesArrProps>>([])

  return (
    <aside className={className}>
      <Logo />
      <Button state={{ files, setFiles, inputRef }} />
      <List filesArr={files} />
    </aside>
  )
}
const SidebarStyled = styled(Sidebar)`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.black};
`

export { SidebarStyled as Sidebar }
