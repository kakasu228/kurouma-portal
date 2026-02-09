interface ArticleBodyProps {
  html: string
}

export function ArticleBody({ html }: ArticleBodyProps) {
  return (
    <div
      className="lesson-body px-4"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
