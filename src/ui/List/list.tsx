import styled from 'styled-components/macro'
import { WhiteFileSVG, BlueFileSVG, EditingIconSVG, SavingIconSVG, SavedIconSVG, DeleteIconSVG } from 'ui/SVGComponent/'
import { filesArrProps } from 'resources/types'
import { MouseEvent } from 'react'
type ListProps = {
  handleDeleteFile: (clickId: string) => void,
  handleChangeFile: (clickId: string) => (e: MouseEvent) => void,
  files: Array<filesArrProps>,
  className?: string,
}
type ListSVGProps = {
  handleDeleteFile: (clickId: string) => void,
  id: string,
  active: boolean,
  status: string,
  className?: string
}
type ListItemProps = {
  handleDeleteFile: (clickId: string) => void,
  handleChangeFile: (clickId: string) => (e: MouseEvent) => void,
  id: string
  active: boolean,
  status: string,
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
        {status === 'saved' && <SavedIconSVG width='14' height='10' />}
        {status === 'editing' && <EditingIconSVG width='8' height='9' />}
        {status === 'saving' && <SavingIconSVG width='13' height='13' />}
      </StyledListSVG>
      )
    : (
      <StyledListSVG className={className}>
        <button onClick={() => handleDeleteFile(id)}>
          <DeleteIconSVG width='14' height='14' />
        </button>
      </StyledListSVG>
      )
}
const ListItem = ({ handleDeleteFile, handleChangeFile, id, active, status, name, className }: ListItemProps) => (
  <StyledListItem className={className} active={active}>
    <div className='linkSVGContainer' onClick={handleChangeFile(id)}>
      {active ? <BlueFileSVG width='36' height='36' className='fileSVG' /> : <WhiteFileSVG width='36' height='36' opacity='0.65' className='fileSVG' />}
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
    font-size: 2.2rem;
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
