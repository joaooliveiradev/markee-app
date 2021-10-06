import styled from 'styled-components/macro'
import { ChangeEvent } from 'react'
import { filesArrProps } from 'resources/types'
type TextAreaProps = {
  className?: string,
  file: filesArrProps,
  handleChangeContent: (id: string) => (e: ChangeEvent<HTMLTextAreaElement>) => void,
}
const TextArea = ({ handleChangeContent, file, className }: TextAreaProps) => {
  return (
    <textarea className={className} spellCheck='false' onChange={handleChangeContent(file.id)} value={file.content} />
  )
}
const TextAreaStyled = styled(TextArea)`
  grid-area: textarea;
  height: 100%;
  border: none;
  font-size: 2.6rem;
  background-color: transparent;
  color:#3D4657;
  padding: 2rem 2rem;
  overflow-y: hidden;
  :focus{
    outline: none;
  }
`
export { TextAreaStyled as TextArea }
