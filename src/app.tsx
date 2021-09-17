import styled, { css } from 'styled-components/macro'

const App = () => (
  <Title arroz='a'>App</Title>
)

type TypeProps = {
  arroz: string,
}

const Title = styled.h1<TypeProps>`${({ theme }) => css`
  background-color: ${theme.colors.black};
  color: ${theme.colors.lightBlack};
`}`

export { App }
