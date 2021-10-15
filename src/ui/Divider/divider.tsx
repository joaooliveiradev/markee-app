import styled, { css } from 'styled-components'
type DividerProps = {
  className?: string,
}
const Divider = ({ className }: DividerProps) => (
  <h1 className={className}>Arquivos</h1>
)
const StyledDividerText = styled(Divider)`${({ theme }) => css`
      margin: 0;
      font-size: 1.8rem;
      font-weight: 500;
      color: #FFF;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    ::before {
      content: '';
      display: block;
      width: 2.8rem;
      height: 0.4rem;
      border-radius: 1rem;
      background-color: ${theme.colors.primary};
    }
    ::after {
      content: '';
      display: block;
      width: 18rem;
      height: 0.4rem;
      border-radius: 1rem;
      background-color: ${theme.colors.primary};
    }
     @media(max-width: 1024px){
      ::after {
        width: 7rem;
      }
     }
`}`
export { StyledDividerText as Divider }
