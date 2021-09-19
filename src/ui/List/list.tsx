import styled, { css } from 'styled-components'

type ListProps = {
  className: string
}

const List = ({ className }: ListProps) => (
  <ul className={className}>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
  </ul>
)

const StyledList = styled(List)`${({ theme }) => css`


`}`
