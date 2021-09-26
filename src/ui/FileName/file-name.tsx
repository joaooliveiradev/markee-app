import { BlueFileSVG } from 'ui/SVGComponent'
import styled, { css } from 'styled-components'
import { Dispatch, SetStateAction, RefObject, ChangeEvent } from 'react'
import { filesArrProps } from 'resources/types'

type FileNameProps = {
  className?: string,
  filesObj: filesArrProps
  state: {
    files: Array<filesArrProps>,
    setFiles: Dispatch<SetStateAction<Array<filesArrProps>>>,
    inputRef: RefObject<HTMLInputElement>
  },
}
const Input = ({ className, filesObj, state }: FileNameProps) => {
  const { files, setFiles, inputRef } = state
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFiles(files.map(file => file.active === true ? ({ ...file, name: e.currentTarget.value }) : ({ ...file })))
  }
  return (
    <input type='text' className={className} spellCheck='false' ref={inputRef} onChange={handleInput} value={filesObj.name} />
  )
}
const InputStyled = styled(Input)`${({ theme }) => css`
  width: 100%;
  background-color: #F9FBFF;
  border: none;
  font-weight: 600;
  color: ${theme.colors.black};
  font-size: 2.3rem;
  font-family: 'DM Sans',sans-serif;
  margin-left: 1rem;
  caret-color: #AAAFB8;
  :focus  {
    outline: none;
  }
`}`

const FileName = ({ className, filesObj, state }: FileNameProps) => {
  return (
    <label className={className}>
      <BlueFileSVG width='32' height='32' />
      <InputStyled filesObj={filesObj} state={state} />
    </label>
  )
}

const FileNameStyled = styled(FileName)`
  grid-area: filename;
  height: 4rem;
  display: flex;
  align-items: center;
  margin: 2rem 3rem 3rem 3rem;
`

export { FileNameStyled as FileName }
