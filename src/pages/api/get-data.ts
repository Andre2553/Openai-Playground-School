import { NextApiRequest, NextApiResponse } from "next";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method !== 'GET') {
      res.setHeader('Allow', 'GET');
      res.status(405).end('Method not allowed');
   }

   try{

      const post = await prisma.openAIPosts.findMany({ 
         
         orderBy: {
            createdAt: 'desc'
         }
      })
      
      res.status(201).json(post);

   } catch (error: any) {
      res.status(500).json({ error: error.message })
   }
}
