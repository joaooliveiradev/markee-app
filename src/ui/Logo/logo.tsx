import styled from 'styled-components/macro'
import { Divider } from 'ui/Divider'
import { LogoSVG } from 'ui/SVGComponent/'
type LogoContainerProps = {
  className?: string,
}
type LogoProps = {
  className?: string,
}
const Logo = ({ className }: LogoProps) => (
  <div className={className}>
    <LogoSVG width='164' height='44' />
  </div>
)
const LogoStyled = styled(Logo)`
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LogoContainer = ({ className }: LogoContainerProps) => (
  <div className={className}>
    <LogoStyled />
    <Divider />
  </div>
)
const LogoContainerStyled = styled(LogoContainer)`
  height: 17rem;
  display: flex;
  flex-direction: column;
`
export { LogoContainerStyled as Logo }
