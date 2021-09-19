import styled from 'styled-components/macro'

type MainProps = {
  className?: string
}

const Main = ({ className }: MainProps) => (
  <main className={className}>Mainn</main>
)

const StyledMain = styled(Main)`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
export { StyledMain as Main }
