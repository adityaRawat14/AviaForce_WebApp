import * as z from "zod";

export const ContactValidation = z.object({
  name: z
    .string()
    .nonempty({ message: "Name is required" })
    .min(3, { message: "Minimum 3 characters required for the name!" }),
  emailId: z
    .string()
    .email({ message: "Please enter a valid email!" })
    .nonempty({ message: "EmailId is required" }),
  message: z
    .string()
    .nonempty("Message is required")
    .min(5, { message: "Minimum 5 characters!" }),
});
