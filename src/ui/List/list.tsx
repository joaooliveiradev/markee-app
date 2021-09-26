import styled from 'styled-components/macro'
import { WhiteFileSVG, BlueFileSVG, EditingIconSVG, SavingIconSVG, SavedIconSVG, DeleteIconSVG } from 'ui/SVGComponent/'
import { filesArrProps } from 'resources/types'
import { Dispatch, RefObject, SetStateAction } from 'react'

type ListProps = {
  state: {
    files: Array<filesArrProps>,
    setFiles: Dispatch<SetStateAction<Array<filesArrProps>>>
  }
  className?: string,
  inputRef: RefObject<HTMLInputElement>
}
type ListSVGProps = {
  active: boolean,
  status: string,
  className?: string
}
type ListItemProps = {
  state: {
    files: Array<filesArrProps>,
    setFiles: Dispatch<SetStateAction<Array<filesArrProps>>>
  }
  id: string
  active: boolean,
  status: string,
  name: string,
  className?: string,
  inputRef: RefObject<HTMLInputElement>
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

const ListItem = ({ state, id, active, status, name, className, inputRef }: ListItemProps) => {
  const handleList = (clickId: string) => {
    const { files, setFiles } = state
    const newArr = files.map(file => {
      if (file.id === clickId) {
        return ({ ...file, active: true })
      } else if (file.active) {
        return ({ ...file, active: false })
      } else {
        return ({ ...file })
      }
    })
    setFiles(newArr)
    inputRef.current?.focus()
  }
  return (
    <StyledListItem className={className} active={active} onClick={() => handleList(id)}>
      {active ? <BlueFileSVG width='36' height='36' className='fileSVG' /> : <WhiteFileSVG width='36' height='36' opacity='0.65' className='fileSVG' />}
      <a className='link' href='/'> {name}</a>
      <ListSVG active={active} status={status} />
    </StyledListItem>
  )
}

const List = ({ state, className, inputRef }: ListProps) => {
  const { files } = state
  return (
    <ul className={className}>
      {files.map((file) => {
        return file.active
          ? <ListItem key={file.id} state={state} id={file.id} active={file.active} status={file.status} name={file.name} inputRef={inputRef} />
          : <ListItem key={file.id} state={state} id={file.id} active={file.active} status={file.status} name={file.name} inputRef={inputRef} />
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
  cursor: pointer;

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
