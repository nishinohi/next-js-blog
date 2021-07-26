import type { NextApiRequest, NextApiResponse } from 'next'

const Hello = (_req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json({ text: 'Hello' })
}

export default Hello
