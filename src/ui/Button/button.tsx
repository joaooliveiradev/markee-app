import styled, { css } from 'styled-components'
import { PlusSymbolSVG } from 'ui/SVGComponent'
import { filesArrProps } from 'resources/types'
import { v4 as uuidv4 } from 'uuid'
import { Dispatch, SetStateAction } from 'react'

type ButtonProps = {
  className?: string,
  state: {
    files: Array<filesArrProps>,
    setFiles: Dispatch<SetStateAction<Array<filesArrProps>>>
  }
}

const Button = ({ className, state }: ButtonProps) => {
  const { files, setFiles } = state
  const HandleFile = () => {
    const filterFile = (arr: Array<filesArrProps>) => arr.map(file => ({ ...file, active: false }))
    const newObjValues: filesArrProps = {
      id: uuidv4(),
      name: 'Sem título',
      content: '',
      active: true,
      status: 'saved',
    }
    const filteredFiles = filterFile(files)
    setFiles([...filteredFiles, newObjValues])
  }
  return (
    <button className={className} onClick={HandleFile}>
      <PlusSymbolSVG width='14' height='14' className='plusSymbolSVG' />
      Adicionar arquivo
    </button>
  )
}

const ButtonStyled = styled(Button)`${({ theme }) => css`
  background-color:  ${theme.colors.primary};
  width: 34.5rem;
  height: 4.5rem;
  border-radius: 0.6rem;
  border-style: none;
  font-size: 2.2rem;
  margin: 3rem auto;
  line-height: 1.8rem;
  letter-spacing: -0.02em;
  color: ${theme.colors.lightBlack};
  display: flex;
  align-items: center;
  justify-content: center;
  .plusSymbolSVG {
    margin-right: 1rem;
    height: 2rem;
    width: auto;
  }
`}`
export { ButtonStyled as Button }
