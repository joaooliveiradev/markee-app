import styled from 'styled-components/macro'

import { FileName } from 'ui/FileName'
import { TextArea } from 'ui/TextArea/text-area'
import { Content } from 'ui/Content'
import { Dispatch, SetStateAction, RefObject } from 'react'
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
  const { files, setFiles } = state
  console.log(files)
  const getFileObj = (arr: Array<filesArrProps>): filesArrProps => arr.map(file => file.active === true ? file : file)[arr.length - 1]
  const filesObj = getFileObj(files)
  return (
    <main className={className}>
      <FileName filesObj={filesObj} state={state} />
      <TextArea state={{ files, setFiles }} />
      <Content filesObj={filesObj} />
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
