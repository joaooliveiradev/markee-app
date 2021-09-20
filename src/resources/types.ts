export type LinkListProps = {
  id: number,
  name: string,
  content: string,
  active: boolean
  status: 'editing' | 'saving' | 'saved'
}
