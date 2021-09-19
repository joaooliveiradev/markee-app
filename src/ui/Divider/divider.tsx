import styled, { css } from 'styled-components'

type DividerProps = {
  className?: string,
}
const Divider = ({ className }: DividerProps) => (
  <h1 className={className}>Arquivos</h1>
)
const StyledDividerText = styled(Divider)`${({ theme }) => css`
      margin: 0;
      font-size: 20px;
      font-weight: 500;
      color: #FFF;
      padding-left: 69px;
      position: relative;
    ::before {
      content: '';
      display: block;
      width: 28px;
      height: 4px;
      border-radius: 10px;
      position: absolute;
      top: 47%;
      left: 36px;
      background-color: ${theme.colors.primary};
    }
    ::after {
      content: '';
      display: block;
      width: 227px;
      height: 4px;
      border-radius: 10px;
      position: absolute;
      top: 47%;
      left: 156px;
      background-color: ${theme.colors.primary};
    }
`}`
export { StyledDividerText as Divider }
