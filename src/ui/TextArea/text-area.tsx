import styled from 'styled-components'
import { ChangeEventHandler } from 'react'
type TextAreaProps = {
  handleChange: ChangeEventHandler<HTMLTextAreaElement>,
  className?: string
}

const TextArea = ({ handleChange, className }: TextAreaProps) => {
  return (
    <textarea className={className} spellCheck='false' onChange={handleChange} />
  )
}

const TextAreaStyled = styled(TextArea)`
  grid-area: textarea;
  height: 100%;
  border: none;
  font-size: 2.6rem;
  background-color: transparent;
  color:#3D4657;
  padding-left: 3rem;
  overflow-y: hidden;
  :focus{
    outline: none;
  }
`
export { TextAreaStyled as TextArea }
