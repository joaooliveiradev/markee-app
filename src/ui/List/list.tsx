import styled from 'styled-components'
import { WhiteFileSVG, BlueFileSVG, EditingIconSVG, SavingIconSVG, SavedIconSVG, DeleteIconSVG } from 'ui/SVGComponent/'
import { LinkListProps } from 'resources/types'

type ListProps = {
  linkList: Array<LinkListProps>
  className?: string
}
type ListSVGProps = {
  active: boolean,
  status: string,
  className?: string
}
type ListItemProps = {
  active: boolean,
  status: string,
  name: string,
  className?: string
}
type StyledListProps = {
  active: boolean
}
const ListSVG = ({ active, status, className }: ListSVGProps) => {
  return active
    ? (
      <StyledListSVG className={className}>
        {status === 'saved' && <SavedIconSVG width='14' height='10' />}
        {status === 'editing' && <EditingIconSVG width='8' height='9' />}
        {status === 'saving' && <SavingIconSVG width='13' height='13' />}
      </StyledListSVG>
      )
    : (
      <StyledListSVG className={className}>
        <button>
          <DeleteIconSVG width='14' height='14' />
        </button>
      </StyledListSVG>
      )
}

const ListItem = ({ active, status, name, className }: ListItemProps) => (
  <StyledListItem className={className} active={active}>
    {active ? <BlueFileSVG width='36' height='36' className='fileSVG' /> : <WhiteFileSVG width='36' height='36' opacity='0.65' className='fileSVG' />}
    <a className='link' href='/'> {name}</a>
    <ListSVG active={active} status={status} />
  </StyledListItem>
)

const List = ({ linkList, className }: ListProps) => (
  <ul className={className}>
    {linkList.map((link) => {
      return link.active
        ? <ListItem key={link.id} active={link.active} status={link.status} name={link.name} />
        : <ListItem key={link.id} active={link.active} status={link.status} name={link.name} />
    })}
  </ul>
)

const StyledListSVG = styled.div`
  margin-left: auto;
  width: 2rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    display: none;
  }
`

const StyledListItem = styled.li <StyledListProps>`
  display: flex;
  align-items: center;
  padding: 1rem;

  .link {
    font-size: 2.2rem;
    color: #B0B4BB;
    text-decoration: none;
    display: block;
  }

  .fileSVG{
    margin-right: 1.5rem;
  }

  :hover{
    background: ${({ theme }) => theme.colors.lightBlack};
    border-radius: 0.6rem;
    ${StyledListSVG} button {
      display: block;
    }
  }

  ${({ active, theme }) => active && `
    background-color: ${theme.colors.lightBlack};
    border-radius: 0.6rem;
  `}
`
const StyledList = styled(List)`
  list-style: none;
  width: 34.5rem;
  margin: 0 auto;
  padding: 0;
`
export { StyledList as List }
