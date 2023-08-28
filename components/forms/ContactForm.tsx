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
import { useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);

  const form = useForm<z.infer<typeof ContactValidation>>({
    resolver: zodResolver(ContactValidation),
    defaultValues: {
      name: "",
      emailId: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof ContactValidation>) => {
    setSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (response.ok) setFormSubmitted(true);
      else setIsError(true);
    } catch (err) {
      throw new Error("Failed to send email");
    } finally {
      setFormSubmitted(true);
      setSubmitting(false);
    }
  };

  if (!formSubmitted)
    return (
      <Form {...form}>
        <form
          className={`${submitting ? "ld-over" : ""} space-y-8 md:w-2/3`}
          onSubmit={form.handleSubmit(onSubmit)}
        >
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
            disabled={submitting}
          >
            Send
          </Button>
        </form>
      </Form>
    );
  else {
    if (isError) {
      return (
        <>
          <div className="text-center h-screen">
            <h1 className="font-bold text-6xl text-blue-900 my-10">Oops!</h1>
            <h3 className="font-light text-xl text-blue-800 mb-10">
              Something went very wrong! Please try againlater.
            </h3>
          </div>
        </>
      );
    } else {
      return (
        <div className="text-center h-screen">
          <h1 className="font-bold text-6xl text-blue-900 my-10">
            Message Received!
          </h1>
          <h3 className="font-light text-xl text-blue-800 mb-10">
            We will reach out to you, very very soon!
          </h3>
        </div>
      );
    }
  }
}
