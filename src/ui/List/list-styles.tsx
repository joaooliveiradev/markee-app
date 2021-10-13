import styled, { css } from 'styled-components/macro'
import { Status } from 'resources/files/status'
import { StatusIcon } from 'ui/StatusIcon/status-icon'
import { MouseEvent } from 'react'
import * as icon from 'ui/icons'
type ListSVGProps = {
  handleDeleteFile: (clickId: string) => void,
  id: string,
  active: boolean,
  status: Status,
}
type ListProps = {
  className?: string,
}
type ListLinkProps = {
  active: boolean,
  className?: string,
}
type StyledListProps = {
  active: boolean
}
type ListItemProps = {
  handleDeleteFile: (clickId: string) => void,
  handleChangeFile: (clickId: string) => (e: MouseEvent) => void,
  id: string
  active: boolean,
  status: Status,
  name: string,
  className?: string,
}
const StyledListItem = styled.li <StyledListProps>`${({ active, theme }) => css`
  display: flex;
  align-items: center;
  padding: 1rem 1rem 1rem 0rem;
  cursor: pointer;
  height: 5rem;
  margin: 1rem 0rem;
  justify-content: space-between;
  & svg {
    margin-right: 1rem;
  }
  :hover{
    background: ${theme.colors.lightBlack};
    border-radius: 0.6rem;
    ${StyledButtonRemoveItem} {
      display: block;
    }
  }
  ${active && css`
    background-color: ${theme.colors.lightBlack};
    border-radius: 0.6rem;
  `}
`}`
const StyledStatusIcon = styled(StatusIcon)`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledButtonRemoveItem = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
`
const ListLink = styled.a<ListLinkProps>`${({ active }) => css`
  background: url("${active ? icon.FileActiveUrl : icon.FileUrl}") 1rem calc(50% - 0.2rem) no-repeat;
  font-size: 1.8rem;
  color: #B0B4BB;
  text-decoration: none;
  display: block;
  padding: 1.3rem 0px 1.3rem 5rem;
  width: 100%;
`}`
const ListSVG = ({ handleDeleteFile, id, active, status }: ListSVGProps) => {
  return active
    ? <StyledStatusIcon status={status} />
    : (
      <StyledButtonRemoveItem onClick={() => handleDeleteFile(id)}>
        <icon.DeleteIcon />
      </StyledButtonRemoveItem>)
}
export const List = styled.ul<ListProps>`
  list-style: none;
  width: 30.5rem;
  margin: 0 auto;
  padding: 0;
`
export const ListItem = ({ handleDeleteFile, handleChangeFile, id, active, status, name, className }: ListItemProps) => (
  <StyledListItem className={className} active={active}>
    <ListLink className={className} active={active} href={`/file/${id}`} onClick={handleChangeFile(id)}>{name}</ListLink>
    <ListSVG handleDeleteFile={handleDeleteFile} id={id} active={active} status={status} />
  </StyledListItem>
)
