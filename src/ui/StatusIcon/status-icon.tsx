import * as icon from 'ui/icons'
import { Status } from 'resources/files/status'
import styled, { keyframes } from 'styled-components'
type StatusIconProps = {
  status: Status,
  className?: string,
}
export const StatusIcon = ({ status = 'saved', className }: StatusIconProps) => {
  const Comp = {
    saving: Loading,
    saved: Saved,
    editing: icon.EditingIcon,
  }[status]

  return <Comp className={className} />
}

const animation = keyframes`
 from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
`
const dash = keyframes`
  100% {
    stroke-dashoffset: 0;
  }
  0% {
    stroke-dashoffset: 100;
  }
`
const Saved = styled(icon.SavedIcon)`
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    animation: ${dash} 3s ease-out forwards;
`
const Loading = styled(icon.SavingIcon)`
  animation: ${animation} 1s infinite linear
`
