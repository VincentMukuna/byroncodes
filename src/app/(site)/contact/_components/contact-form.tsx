"use client";

import Script from "next/script";
import { useRef, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { ContactFormData, submitContactForm } from "@/actions/contact";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { env } from "@/env/client";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z
    .string()
    .min(1, { message: "Message must be at least 10 characters." }),
  token: z.string(),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      token: "",
    },
  });

  const contactFormRef = useRef<HTMLFormElement>(null);

  async function onSubmit(data: ContactFormData) {
    const formData = new FormData(contactFormRef.current!);
    setIsSubmitting(true);
    if (!formData.has("cf-turnstile-response")) {
      setIsSubmitting(false);
      toast.error("Error!", { description: "Please complete the reCAPTCHA." });
      return;
    }
    const result = await submitContactForm({
      ...data,
      token: formData.get("cf-turnstile-response") as string,
    });

    setIsSubmitting(false);
    if (result.success) {
      toast.success("Success!", { description: result.message });
      form.reset();
    } else {
      toast.error("Error!", { description: result.message });
      // Handle errors
      Object.entries(result.errors || {}).forEach(([key, value]) => {
        form.setError(key as keyof ContactFormData, {
          type: "manual",
          message: value[0],
        });
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
        ref={contactFormRef}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Your message" rows={4} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
        ></Script>
        <div
          className="cf-turnstile"
          data-sitekey={env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY}
          data-callback="javascriptCallback"
        ></div>
        <FormField
          control={form.control}
          name="token"
          render={({}) => (
            <FormItem>
              <FormControl>
                {/* <Turnstile
                  siteKey={env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY}
                  theme="dark"
                  // eslint-disable-next-line n/no-process-env
                  sandbox={process.env.NODE_ENV === "development"}
                  onVerify={(token) => {
                    form.setValue("token", token);
                  }}
                /> */}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
