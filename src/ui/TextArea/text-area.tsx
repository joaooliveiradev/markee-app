import styled from 'styled-components/macro'
import { ChangeEvent } from 'react'
type TextAreaProps = {
  className?: string,
  content: string,
  onChange: (content: string) => void,
}
const TextArea = ({ onChange, content, className }: TextAreaProps) => {
  const handleContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.currentTarget.value)
  }
  return (
    <textarea className={className} spellCheck='false' onChange={handleContent} value={content} />
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
