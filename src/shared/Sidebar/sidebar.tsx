import styled from 'styled-components'
import { Logo } from 'ui/Logo'
import { Button } from 'ui/Button'
type SidebarProps = {
  className?: string,
}

const Sidebar = ({ className }: SidebarProps) => (
  <aside className={className}>
    <Logo />
    <Button />
    <div style={{ height: '150px' }}>4</div>
  </aside>
)

const SidebarStyled = styled(Sidebar)`
  display: flex;
  flex-direction: column;
  background-color: #1E293B;
`

export { SidebarStyled as Sidebar }
