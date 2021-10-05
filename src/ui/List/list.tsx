import { MouseEvent } from 'react'
import { filesArrProps } from 'resources/types'
import * as S from './list-styles'
type ListProps = {
  handleDeleteFile: (clickId: string) => void,
  handleChangeFile: (clickId: string) => (e: MouseEvent) => void,
  files: Array<filesArrProps>,
  className?: string,
}
export const List = ({ handleDeleteFile, handleChangeFile, files, className }: ListProps) => {
  return (
    <S.List className={className}>
      {files.map((file) => (
        <S.ListItem handleDeleteFile={handleDeleteFile} handleChangeFile={handleChangeFile} key={file.id} id={file.id} active={file.active} status={file.status} name={file.name} />
      ))}
    </S.List>
  )
}
