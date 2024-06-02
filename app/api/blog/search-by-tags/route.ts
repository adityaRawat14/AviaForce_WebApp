import { NextRequest, NextResponse as res } from "next/server";
import { prisma } from "@/lib/prisma";


export const GET = async function handler(req: NextRequest) {
  const url = new URL(req.url)

  const tags = url.searchParams.getAll('tags')   // tags will be passed as array query


  try {
    const blogs = await prisma.blog.findMany({
      where: {
        tags: {
          some: {
            tag: {
              tag:{
                in: tags,
              },
            },
          },
        },
      },
      include: {
        author: true,
        tags: true,
      },
      orderBy: {
        tags: {
          _count: 'desc',
        }
      },
    });

   if(!blogs){
    return res.json({error:"No Articles found for these tags !"},{status:404})
   }
  } catch (error) {
    console.error(error);
    return res.json({ error: 'Internal Server Error' },{status:400});
  }
}