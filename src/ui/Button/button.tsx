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
  width: 345px;
  height: 45px;
  border-radius: 6px;
  border-style: none;
  font-size: 22px;
  margin: 30px auto;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: ${theme.colors.lightBlack};
  display: flex;
  align-items: center;
  justify-content: center;
  .plusSymbolSVG {
    margin-right: 10px;
    height: 20px;
    width: auto;
  }
`}`
export { ButtonStyled as Button }
