import styled from 'styled-components'
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
  height: 150px;
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
  height: 170px;
  display: flex;
  flex-direction: column;
`
export { LogoContainerStyled as Logo }
