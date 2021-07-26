import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

const FirstPost = (): JSX.Element => {
  return (
    <Layout home={false}>
      <Head>
        <title>Frist Post</title>
      </Head>
      <h1>Frist Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}

export default FirstPost
