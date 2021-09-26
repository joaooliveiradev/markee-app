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

const Content = ({ content, className }: ContentProps) => (
  <article className={className} dangerouslySetInnerHTML={{ __html: marked(content) }} />
)
const ContentStyled = styled(Content)`
  grid-area: result;
  height: 100%;
  font-size: 2.6rem;
  padding-left: 20px;
  color: ${({ theme }) => theme.colors.lightBlack};


  h1,h2,h3,h4,h5,h5{
      margin: 0;
  }

`
export { ContentStyled as Content }