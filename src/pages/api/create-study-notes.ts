// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { openai } from '../../libs/openai'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method not allowed');
  }

  const { prompt } = req.body;

  const response = await openai.createImage({
      model: "text-davinci-003",
      prompt,
      temperature: 0.3,
      max_tokens: 150,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });


  res.status(response.status).json(response.data)
}
