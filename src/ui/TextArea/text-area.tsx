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
  width: 50%;
  grid-area: textarea;
  height: 100%;
  border: none;
  font-size: 1.6rem;
  background-color: transparent;
  color:#3D4657;
  padding-right: 3rem;
  border-right: 1px solid ${({ theme }) => theme.colors.gray};
  :focus{
    outline: none;
  }
  overflow-y: scroll;
  ::-webkit-scrollbar {
      display: none;
  }
`
export { TextAreaStyled as TextArea }
