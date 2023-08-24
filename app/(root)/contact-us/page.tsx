import { useState } from "react";
import { Email } from "@/lib/smtp";
import ContactForm from "@/components/forms/ContactForm";

export default function ContactUs() {
  return (
    <section className="bg-blue-50 p-12">
      <ContactForm />
    </section>
  );
}
