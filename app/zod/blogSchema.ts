import { ZodType, z } from "zod";

type BlogDataType = {
  author: string;
  data: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string | null; // updated to allow null or undefined values
};

export const BlogSchema: ZodType<BlogDataType> = z.object({
  author: z.string(),
  title: z.string().min(6, "min 3 letters required"),
  subtitle: z.string().min(10, "min 10 characters required"),
  description: z.string(),
  tags: z.array(z.string()),
  image: z.string().nullable(),
  data: z.string(),
});