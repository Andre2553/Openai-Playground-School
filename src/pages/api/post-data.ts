import { NextApiRequest, NextApiResponse } from "next";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      res.status(405).end('Method not allowed');
   }

   const { prompt, category, response, userName } = req.body;

   try{

      const post = await prisma.openAIPosts.create({
         data: {
            prompt,
            category,
            response,
            userName,
         }
      });
      
      res.status(201).json(post);

   } catch (error: any) {
      res.status(500).json({ error: error.message })
   }
}
