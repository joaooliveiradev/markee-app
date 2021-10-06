import styled, { css } from 'styled-components'
import { RefObject, ChangeEvent } from 'react'
import { filesArrProps } from 'resources/types'
import * as icon from 'ui/icons'
type FileNameProps = {
  handleChangeFileName: (id: string) => (e: ChangeEvent<HTMLInputElement>) => void,
  className?: string,
  file: filesArrProps,
  inputRef: RefObject<HTMLInputElement>
}
const Input = ({ handleChangeFileName, className, file, inputRef }: FileNameProps) => {
  return (
    <input type='text' className={className} spellCheck='false' ref={inputRef} onChange={handleChangeFileName(file.id)} value={file.name} autoFocus />
  )
}
const InputStyled = styled(Input)`${({ theme }) => css`
  width: 100%;
  background-color: #F9FBFF;
  border: none;
  font-weight: 600;
  color: ${theme.colors.black};
  font-size: 2.2rem;
  font-family: 'DM Sans',sans-serif;
  margin-left: 1rem;
  caret-color: #AAAFB8;
  :focus  {
    outline: none;
  }
`}`
const FileName = ({ handleChangeFileName, className, file, inputRef }: FileNameProps) => {
  return (
    <label className={className}>
      <icon.FileActive />
      <InputStyled handleChangeFileName={handleChangeFileName} file={file} inputRef={inputRef} />
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
