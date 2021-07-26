export interface PostData extends PostContent {
  id: string
  contentHtml: string
}

export interface PostContent {
  date: string
  title: string
}
