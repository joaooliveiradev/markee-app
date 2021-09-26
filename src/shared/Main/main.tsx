import styled from 'styled-components/macro'

import { FileName } from 'ui/FileName'
import { TextArea } from 'ui/TextArea/text-area'
import { Content } from 'ui/Content'
import { useState, ChangeEvent, Dispatch, SetStateAction, RefObject } from 'react'
import { filesArrProps } from 'resources/types'
type MainProps = {
  className?: string,
  state: {
    files: Array<filesArrProps>,
    setFiles: Dispatch<SetStateAction<Array<filesArrProps>>>,
    inputRef: RefObject<HTMLInputElement>
  }
}

const Main = ({ className, state }: MainProps) => {
  const [content, setContent] = useState('')
  const handleContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  return (
    <main className={className}>
      <FileName state={state} />
      <TextArea handleChange={handleContent} />
      <Content content={content} />
    </main>
  )
}

const StyledMain = styled(Main)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: 'filename filename'
                        'textarea result';
  background-color: #F9FBFF;

  ::before {
    content: '';
    position: absolute;
    width: 0.2rem;
    height: 94%;
    background-color: ${({ theme }) => theme.colors.gray};
    margin: auto;
  }
`
export { StyledMain as Main }
