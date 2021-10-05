import styled from 'styled-components/macro'
import { StatusIcon } from 'ui/StatusIcon/status-icon'
import { filesArrProps } from 'resources/types'
import { MouseEvent } from 'react'
import { Status } from 'resources/files/status'
import * as icon from 'ui/icons'
type ListProps = {
  handleDeleteFile: (clickId: string) => void,
  handleChangeFile: (clickId: string) => (e: MouseEvent) => void,
  files: Array < filesArrProps >,
  className?: string,
}
type ListSVGProps = {
  handleDeleteFile: (clickId: string) => void,
  id: string,
  active: boolean,
  status: Status,
  className?: string
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
type StyledListProps = {
  active: boolean
}
const ListSVG = ({ handleDeleteFile, id, active, status, className }: ListSVGProps) => {
  return active
    ? (
      <StyledListSVG className={className}>
        <StatusIcon status={status} />
      </StyledListSVG>
      )
    : (
      <StyledListSVG className={className}>
        <button onClick={() => handleDeleteFile(id)}>
          <icon.DeleteIcon />
        </button>
      </StyledListSVG>
      )
}
const ListItem = ({ handleDeleteFile, handleChangeFile, id, active, status, name, className }: ListItemProps) => (
  <StyledListItem className={className} active={active}>
    <div className='linkSVGContainer' onClick={handleChangeFile(id)}>
      {active ? <icon.FileActive /> : <icon.File />}
      <a className='link' href={`/file/${id}`}> {name}</a>
    </div>
    <ListSVG handleDeleteFile={handleDeleteFile} id={id} active={active} status={status} />
  </StyledListItem>
)
const List = ({ handleDeleteFile, handleChangeFile, files, className }: ListProps) => {
  return (
    <ul className={className}>
      {files.map((file) => {
        return file.active
          ? <ListItem handleDeleteFile={handleDeleteFile} handleChangeFile={handleChangeFile} key={file.id} id={file.id} active={file.active} status={file.status} name={file.name} />
          : <ListItem handleDeleteFile={handleDeleteFile} handleChangeFile={handleChangeFile} key={file.id} id={file.id} active={file.active} status={file.status} name={file.name} />
      })}
    </ul>
  )
}
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
    font-size: 2rem;
    color: #B0B4BB;
    text-decoration: none;
    display: block;
  }
  .linkSVGContainer{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  svg {
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
