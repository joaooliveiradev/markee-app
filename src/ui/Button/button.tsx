import styled, { css } from 'styled-components'
import * as icon from 'ui/icons'
type ButtonProps = {
  className?: string,
  handleCreateNewFile: () => void,
}
const Button = ({ handleCreateNewFile, className }: ButtonProps) => {
  return (
    <button className={className} onClick={handleCreateNewFile}>
      <icon.PlusSymbol />
      Adicionar arquivo
    </button>
  )
}
const ButtonStyled = styled(Button)`${({ theme }) => css`
  background-color:  ${theme.colors.primary};
  width: 30.5rem;
  height: 4.5rem;
  border-radius: 0.6rem;
  border-style: none;
  font-size: 1.8rem;
  margin: 3rem 0rem;
  line-height: 1.8rem;
  letter-spacing: -0.02em;
  color: ${theme.colors.lightBlack};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    margin-right: 1rem;
    height: 1.7rem;
    width: auto;
  }
  @media(max-width: 1024px){
    width: auto;
    padding: 0 3rem;
  }
`}`
export { ButtonStyled as Button }
