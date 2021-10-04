import styled from 'styled-components/macro'
import { FileName } from 'ui/FileName'
import { TextArea } from 'ui/TextArea/text-area'
import { Content } from 'ui/Content'
import { ChangeEvent, RefObject } from 'react'
import { filesArrProps } from 'resources/types'
type MainProps = {
  handleChangeFileName: (id: string) => (e: ChangeEvent<HTMLInputElement>) => void,
  handleChangeContent: (id: string) => (e: ChangeEvent<HTMLTextAreaElement>) => void,
  className?: string,
  fileActive?: filesArrProps | undefined,
  inputRef: RefObject<HTMLInputElement>
}
const Main = ({ handleChangeFileName, handleChangeContent, fileActive, className, inputRef }: MainProps) => {
  if (!fileActive) return null
  return (
    <main className={className}>
      <FileName handleChangeFileName={handleChangeFileName} file={fileActive} inputRef={inputRef} />
      <TextArea handleChangeContent={handleChangeContent} file={fileActive} />
      <Content content={fileActive.content} />
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
