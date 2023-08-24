"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { ContactValidation } from "@/lib/contactValidation";
import { Input } from "../ui/input";
import { sendContactForm } from "@/lib/actions/sendContactForm";

export default function ContactForm() {
  const form = useForm<z.infer<typeof ContactValidation>>({
    resolver: zodResolver(ContactValidation),
    defaultValues: {
      name: "",
      emailId: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof ContactValidation>) => {
    await sendContactForm(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-blue-900">Name</FormLabel>
              <FormControl>
                <Input
                  className="focus:outline-none focus:ring-1 bg-blue-100"
                  placeholder="John Doe"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="emailId"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-blue-900">Email Id</FormLabel>
              <FormControl>
                <Input
                  className="bg-blue-100"
                  placeholder="john@doe.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-blue-900">Message</FormLabel>
              <FormControl>
                <Textarea
                  className="bg-blue-100 focus:ring-1 focus:outline-none"
                  rows={10}
                  placeholder="Whatever you wish to write to us!"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="bg-blue-900 text-blue-100 hover:bg-blue-950"
          type="submit"
        >
          Send
        </Button>
      </form>
    </Form>
  );
}
