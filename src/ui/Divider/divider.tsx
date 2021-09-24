import styled, { css } from 'styled-components'

type DividerProps = {
  className?: string,
}
const Divider = ({ className }: DividerProps) => (
  <h1 className={className}>Arquivos</h1>
)
const StyledDividerText = styled(Divider)`${({ theme }) => css`
      margin: 0;
      font-size: 2rem;
      font-weight: 500;
      color: #FFF;
      padding-left: 7rem;
      position: relative;
    ::before {
      content: '';
      display: block;
      width: 2.8rem;
      height: 0.4rem;
      border-radius: 1rem;
      position: absolute;
      top: 47%;
      left: 3.6rem;
      background-color: ${theme.colors.primary};
    }
    ::after {
      content: '';
      display: block;
      width: 22.7rem;
      height: 0.4rem;
      border-radius: 1rem;
      position: absolute;
      top: 47%;
      left: 15.6rem;
      background-color: ${theme.colors.primary};
    }
`}`
export { StyledDividerText as Divider }
