import { BlueFileSVG } from 'ui/SVGComponent'
import styled, { css } from 'styled-components'
import { RefObject, ChangeEvent } from 'react'
type FileNameProps = {
  onChange: (title: string) => void,
  className?: string,
  value: string,
  inputRef: RefObject<HTMLInputElement>
}
const Input = ({ onChange, className, value, inputRef }: FileNameProps) => {
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value)
  }
  return (
    <input type='text' className={className} spellCheck='false' ref={inputRef} onChange={handleInput} value={value} />
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

const FileName = ({ onChange, className, value, inputRef }: FileNameProps) => {
  return (
    <label className={className}>
      <BlueFileSVG width='32' height='32' />
      <InputStyled onChange={onChange} value={value} inputRef={inputRef} />
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
