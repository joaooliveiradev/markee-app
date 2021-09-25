import styled from 'styled-components/macro'

import { FileName } from 'ui/FileName'
import { TextArea } from 'ui/TextArea/text-area'
import { Content } from 'ui/Content'

import { useState, ChangeEvent } from 'react'
type MainProps = {
  className?: string
}

const Main = ({ className }: MainProps) => {
  const [content, setContent] = useState('')

  const handleContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  return (
    <main className={className}>
      <FileName />
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
