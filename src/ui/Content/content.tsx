import styled from 'styled-components/macro'
import marked from 'marked'
import 'highlight.js/styles/github.css'
import('highlight.js')
  .then(hglt => {
    const h = hglt.default
    marked.options({
      highlight: (code, language) => {
        if (language && h.getLanguage(language)) {
          return h.highlight(code, { language }).value
        }
        return h.highlightAuto(code).value
      },
    })
  })
type ContentProps = {
  content: string,
  className?: string,
}

const Content = ({ content, className }: ContentProps) => {
  return (
    <article className={className} dangerouslySetInnerHTML={{ __html: marked(content) }} />
  )
}
const ContentStyled = styled(Content)`
  grid-area: result;
  width: 50%;
  height: 100%;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.lightBlack};
  word-break: break-all;
  overflow-y: scroll;
  padding-left: 3rem;
  h1{
    font-size: 2.8rem;
  }
  h2 {
    font-size: 2.6rem;
  }
  h3 {
    font-size: 2.4rem;
  }
  h4 {
    font-size: 2.2rem;
  }
  h5 {
    font-size: 2rem;
  }
  h6 {
    font-size: 1.8rem;
  }
  p{
    margin: 0;
    font-size: 1.6rem;
  }
  ul {
    list-style-position: inside;
    padding: 0;
  }
  ::-webkit-scrollbar {
      display: none;
  }
`
export { ContentStyled as Content }
