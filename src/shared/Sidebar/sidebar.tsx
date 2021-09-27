import { Logo } from 'ui/Logo'
import { Button } from 'ui/Button'
import { List } from 'ui/List'
import styled from 'styled-components'
import { filesArrProps } from 'resources/types'
type SideBarProps = {
  className?: string,
  handleLinkDelete: (clickId: string) => void,
  handleListChangeItem: (clickId: string) => void,
  handleListAddItem: () => void,
  files: Array<filesArrProps>,
}
const Sidebar = ({ handleLinkDelete, handleListChangeItem, handleListAddItem, className, files }: SideBarProps) => {
  return (
    <aside className={className}>
      <Logo />
      <Button handleListAddItem={handleListAddItem} />
      <List handleLinkDelete={handleLinkDelete} handleListChangeItem={handleListChangeItem} state={{ files }} />
    </aside>
  )
}
const SidebarStyled = styled(Sidebar)`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.black};
`

export { SidebarStyled as Sidebar }
