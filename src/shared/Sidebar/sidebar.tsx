import { Logo } from 'ui/Logo'
import { Button } from 'ui/Button'
import { List } from 'ui/List'

import styled from 'styled-components'
import { LinkListProps } from 'resources/types'

const linkListArr: Array<LinkListProps> = [
  {
    id: 1,
    name: 'README.md',
    content: '',
    active: false,
    status: 'saved',
  },
  {
    id: 2,
    name: 'CONTRIBUTING.md',
    content: '',
    active: false,
    status: 'saved',
  },
  {
    id: 3,
    name: 'LICENSE.md',
    content: '',
    active: false,
    status: 'saved',
  },
  {
    id: 4,
    name: 'Links.md',
    content: '',
    active: false,
    status: 'saved',
  },
  {
    id: 5,
    name: 'roadmap.md',
    content: '',
    active: false,
    status: 'saved',
  },
]

type SideBarProps = {
  className?: string
}

const Sidebar = ({ className }: SideBarProps) => (
  <aside className={className}>
    <Logo />
    <Button />
    <List linkList={linkListArr} />
  </aside>
)

const SidebarStyled = styled(Sidebar)`
  display: flex;
  flex-direction: column;
  background-color: #1E293B;
`

export { SidebarStyled as Sidebar }
