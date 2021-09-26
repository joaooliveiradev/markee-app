import styled from 'styled-components'
import { filesArrProps } from 'resources/types'
import { Dispatch, SetStateAction, ChangeEvent } from 'react'
type TextAreaProps = {
  className?: string,
  state: {
    files: Array<filesArrProps>,
    setFiles: Dispatch<SetStateAction<Array<filesArrProps>>>,
  },
}

const TextArea = ({ className, state }: TextAreaProps) => {
  const { files, setFiles } = state
  const handleContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFiles(files.map(file => file.active === true ? ({ ...file, content: e.currentTarget.value }) : ({ ...file })))
  }
  return (
    <textarea className={className} spellCheck='false' onChange={handleContent} />
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
