import React from 'react'
import Link from 'next/link'

const FirstPost = (): JSX.Element => {
  return (
    <>
      <h1>Frist Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}

export default FirstPost
