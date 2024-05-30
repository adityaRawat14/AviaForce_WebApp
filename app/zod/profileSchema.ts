import { z } from "zod";

const editProfileFormSchema = z.object({
    firstName: z.string().nonempty("first name can't be empty"),
    lastName: z.string().optional(),
    email: z.string().optional(),
    bio: z.string(),
    github: z.string().url().regex(
        /^https:\/\/github\.com\/[a-zA-Z0-9_-]+$/,
        "Invalid GitHub URL"
      ).optional(),
      linkedin: z.string().url().regex(
        /^https:\/\/(www\.|)linkedin\.com\/in\/[a-zA-Z0-9_-]+$/,
        "Invalid LinkedIn URL"
      ).optional(),
      instagram: z.string().url().regex(
        /^https:\/\/(www\.|)instagram\.com\/[a-zA-Z0-9_-]+$/,
        "Invalid Instagram URL"
      ).optional(),
      x: z.string().url().regex(
        /^https:\/\/x\.com\/[a-zA-Z0-9_-]+$/,
        "Invalid Twitter URL"
      ).optional(),
  });

  export  {editProfileFormSchema};