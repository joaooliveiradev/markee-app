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
    active: true,
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
    active: true,
    status: 'saving',
  },
  {
    id: 4,
    name: 'Links.md',
    content: '',
    active: false,
    status: 'saving',
  },
  {
    id: 5,
    name: 'roadmap.md',
    content: '',
    active: false,
    status: 'editing',
  },
]

type SideBarProps = {
  className?: string
}

const Sidebar = ({ className }: SideBarProps) => {
  return (
    <aside className={className}>
      <Logo />
      <Button />
      <List linkList={linkListArr} />
    </aside>
  )
}

const SidebarStyled = styled(Sidebar)`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.black};
`

export { SidebarStyled as Sidebar }
