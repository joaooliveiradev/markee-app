import styled from 'styled-components/macro'
import { FileName } from 'ui/FileName'
import { TextArea } from 'ui/TextArea/text-area'

type MainProps = {
  className?: string
}

const Main = ({ className }: MainProps) => (
  <main className={className}>
    <FileName />
    <TextArea />
  </main>
)

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
    height: 75rem;
    background-color: #DFE1E7;
    margin: auto;
  }
`
export { StyledMain as Main }
