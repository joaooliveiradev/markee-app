import styled, { css } from 'styled-components'
import { PlusSymbolSVG } from 'ui/SVGComponent'

type ButtonProps = {
  className?: string,
}

const Button = ({ className }: ButtonProps) => (
  <button className={className}>
    <PlusSymbolSVG width='14' height='14' className='plusSymbolSVG' />
    Adicionar arquivo
  </button>
)

const ButtonStyled = styled(Button)`${({ theme }) => css`
  background-color:  ${theme.colors.primary};
  width: 34.5rem;
  height: 4.5rem;
  border-radius: 0.6rem;
  border-style: none;
  font-size: 2.2rem;
  margin: 3rem auto;
  line-height: 1.8rem;
  letter-spacing: -0.02em;
  color: ${theme.colors.lightBlack};
  display: flex;
  align-items: center;
  justify-content: center;
  .plusSymbolSVG {
    margin-right: 1rem;
    height: 2rem;
    width: auto;
  }
`}`
export { ButtonStyled as Button }
