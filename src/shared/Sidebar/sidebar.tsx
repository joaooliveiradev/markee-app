import { Logo } from 'ui/Logo'
import { Button } from 'ui/Button'
import { List } from 'ui/List'
import styled from 'styled-components/macro'
import { filesArrProps } from 'resources/types'
import { MouseEvent } from 'react'
type SideBarProps = {
  className?: string,
  handleDeleteFile: (clickId: string) => void,
  handleChangeFile: (clickId: string) => (e: MouseEvent) => void,
  handleCreateNewFile: () => void,
  files: Array<filesArrProps>,
}
const Sidebar = ({ handleDeleteFile, handleChangeFile, handleCreateNewFile, className, files }: SideBarProps) => {
  return (
    <aside className={className}>
      <Logo />
      <Button handleCreateNewFile={handleCreateNewFile} />
      <List handleDeleteFile={handleDeleteFile} handleChangeFile={handleChangeFile} files={files} />
    </aside>
  )
}
const SidebarStyled = styled(Sidebar)`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.black};
  min-width: 35rem;
  align-items: center;
  @media(max-width: 1024px){
    min-width: 100%;
  }
`

export { SidebarStyled as Sidebar }
