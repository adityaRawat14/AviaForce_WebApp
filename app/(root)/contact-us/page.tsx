"use client";

import { useState } from "react";
import { Email } from "@/lib/smtp";
import ContactForm from "@/components/forms/ContactForm";

export default function ContactUs() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  function handleContact(e: any) {
    e.preventDefault();
    Email.send({
      Host: process.env.NEXT_PUBLIC_SMTP_SERVER,
      Username: process.env.NEXT_PUBLIC_SMTP_USERNAME,
      Password: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
      To: "sumanojha64035@gmail.com",
      From: e.target.email.value,
      Subject: "Aviaforce Lead!!",
      Body: e.target.message.value,
    }).then((message) => alert(message));
  }
  return (
    <section className="bg-blue-50 p-12">
      <ContactForm />
    </section>
  );
}
