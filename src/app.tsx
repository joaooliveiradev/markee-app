import { Sidebar } from 'shared/Sidebar'
import { Main } from 'shared/Main'
import { useFiles } from 'resources/files/use-files'
const App = () => {
  const { inputRef, files, handleChangeFileName, handleChangeContent, handleDeleteFile, handleChangeFile, handleCreateNewFile } = useFiles()
  return (
    <>
      <Sidebar handleDeleteFile={handleDeleteFile} handleChangeFile={handleChangeFile} handleCreateNewFile={handleCreateNewFile} files={files} />
      <Main handleChangeFileName={handleChangeFileName} handleChangeContent={handleChangeContent} fileActive={files.find(file => file.active === true)} inputRef={inputRef} />
    </>
  )
}
export { App }
