import styled from 'styled-components'

import { LinkListProps } from 'resources/types'
import { DeleteIconSVG, WhiteFileSVG } from 'ui/SVGComponent/'

type ListProps = {
  linkList: Array<LinkListProps>
  className?: string
}

const List = ({ linkList, className }: ListProps) => {
  return (
    <ul className={className}>
      {linkList.map((link) => (
        <li key={link.id} className='listContainer'>
          <WhiteFileSVG width='42' height='42' opacity='0.65' className='whiteFileSVG' />
          <a href='/'>{link.name}</a>
          <button>
            <DeleteIconSVG width='14' height='14' className='deleteSVG' />
          </button>
        </li>
      ))}
    </ul>
  )
}

const StyledList = styled(List)`
  list-style: none;
  width: 34.5rem;
  margin: 0 auto;
  padding: 0;

  .listContainer {
    display: flex;
    align-items: center;
    padding: 1rem;
  }

  .whiteFileSVG{
    margin-right: 1.5rem;
    color: #B0B4BB;
  }

  .listContainer a {
    font-size: 2.2rem;
    color: #B0B4BB;
    text-decoration: none;
    display: block;
  }

  .listContainer button {
    background: transparent;
    border: none;
    cursor: pointer;
    margin-left: auto;
  }

`

export { StyledList as List }
