import styled from 'styled-components'

type TextAreaProps = { className?: string }

const TextArea = ({ className }: TextAreaProps) => (
  <textarea className={className} spellCheck='false' />
)

const TextAreaStyled = styled(TextArea)`
  grid-area: textarea;
  height: 100%;
  border: none;
  font-size: 2.6rem;
  background-color: transparent;
  color:#3D4657;
  padding-left: 3rem;
  overflow-y: hidden;
  :focus{
    outline: none;
  }
`
export { TextAreaStyled as TextArea }
