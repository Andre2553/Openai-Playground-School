import { NextApiRequest, NextApiResponse } from "next";
import { openai } from "../../libs/openai";

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      res.status(405).end('Method not allowed');
   }

   const { prompt } = req.body;

   const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0.7,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
   });


   res.status(response.status).json(response.data)
}
