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
      <div className='ResultContainer'>
        <TextArea handleChangeContent={handleChangeContent} file={fileActive} />
        <Content content={fileActive.content} />
      </div>
    </main>
  )
}
const StyledMain = styled(Main)`
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  background-color: #F9FBFF;
  .ResultContainer {
    width: 100%;
    height: 100%;
    display: flex;
    overflow-y: hidden;
  }
  @media(max-width: 1024px){
    overflow-y: unset;
    .ResultContainer{
      flex-direction: column;
    }
    ${FileName}{
      margin-bottom: 2rem;
    }
    ${TextArea} {
      min-height: 40rem;
      padding-right: 0;
      width: 100%;
    }
    ${Content}{
      padding: 0;
      width: 100%;
      overflow-y: unset;
    }
  }
  padding: 2rem 2rem;
`
export { StyledMain as Main }
