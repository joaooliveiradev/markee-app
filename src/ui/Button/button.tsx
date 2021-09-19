import styled, { css } from 'styled-components'
import plusSymbolSvg from 'ui/icons/plus-symbol.svg'

type ButtonProps = {
  className?: string,
}

const Button = ({ className }: ButtonProps) => (
  <button className={className}>
    <img src={plusSymbolSvg} alt='icone de soma svg' /> Adicionar arquivo
  </button>
)

const ButtonStyled = styled(Button)`${({ theme }) => css`
  background-color:  ${theme.colors.primary};
  width: 345px;
  height: 45px;
  border-radius: 6px;
  border-style: none;
  font-size: 20px;
  margin: 30px auto;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: ${theme.colors.lightBlack};

  & img {
    height: 14px;
  }

`}`
export { ButtonStyled as Button }
