import { NextRequest, NextResponse as res } from "next/server";
import { prisma } from "@/lib/prisma";
import { BlogSchema } from "@/app/zod/blogSchema";

export const POST = async function handler(req: NextRequest) {
  const reqData = await req.json();
  const validateedData = BlogSchema.safeParse(reqData);
  if (!validateedData.success) {
    return res.json(
      {
        error: "Please fill the data properly.",
      },
      { status: 400 }
    );
  }

  const { author, title, subtitle, description, tags, image, data } = validateedData.data;

  // Ensure that the author exists in the database
  const authorRecord = await prisma.user.findUnique({
    where: { id: author },
  });
  if (!authorRecord) {
    return res.json(
      {
        error: "The user does not exist in the database.",
      },
      { status: 400 }
    );
  }

  const tagRecords = await Promise.all(
    tags.map(async (tag) => {
      const existingTag = await prisma.tag.findUnique({ where: { tag } });
      if (existingTag) {
        return existingTag;
      } else {
        return await prisma.tag.create({ data: { tag } });
      }
    })
  );

  // Create the new blog post
  const newPost = await prisma.blog.create({
    data: {
      authorId: author,
      title,
      subtitle,
      description,
      image,
      data,
      tags: {
        connect: tagRecords.map((tag) => ({ id: tag.id })),
      },
    },
  });

  if(!newPost){
    return res.json({error:"Failed to publish article , please try again ."},{status:500})
  }
  return res.json({sucess:true,message:"Article published sucessfully.."})
};