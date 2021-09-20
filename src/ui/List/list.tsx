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
          <WhiteFileSVG width='42' height='42' color='#B0B4BB' className='whiteFileSVG' />
          <a href='/'>{link.name}</a>
          <button>
            <DeleteIconSVG width='14px' height='14px' color='#FFF' className='deleteSVG' />
          </button>
        </li>
      ))}
    </ul>
  )
}

const StyledList = styled(List)`
  list-style: none;
  width: 345px;
  margin: 0 auto;
  padding: 0;

  .listContainer {
    display: flex;
    align-items: center;
    padding: 10px;
  }

  .whiteFileSVG{
    margin-right: 15px;
    color: #B0B4BB;
  }

  .listContainer a {
    font-size: 22px;
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
