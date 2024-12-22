"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile } from "next-turnstile";
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

  async function onSubmit(data: ContactFormData) {
    setIsSubmitting(true);
    const result = await submitContactForm(data);

    setIsSubmitting(false);
    if (result.success) {
      toast.success("Success!", { description: result.message });
      form.reset();
    } else {
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
        <FormField
          control={form.control}
          name="token"
          render={({}) => (
            <FormItem>
              <FormControl>
                <Turnstile
                  siteKey={env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY}
                  retry="auto"
                  refreshExpired="auto"
                  onLoad={() => {
                    // eslint-disable-next-line n/no-process-env
                    console.log("Turnstile loaded", process.env.NODE_ENV);
                  }}
                  appearance="always"
                  // eslint-disable-next-line n/no-process-env
                  sandbox={process.env.NODE_ENV === "development"}
                  theme="dark"
                  onVerify={(token) => {
                    console.log("Token verified", token);
                    form.setValue("token", token);
                  }}
                  onError={() => {
                    console.log("Error verifying");
                    form.setValue("token", "");
                    form.setError("token", {
                      type: "manual",
                      message:
                        "Error verifying. Please reload the page and try again.",
                    });
                  }}
                  onExpire={() => {
                    //ask user to reload the page
                    form.setValue("token", "");
                    form.setError("token", {
                      type: "manual",
                      message:
                        "Token expired. Please reload the page and try again.",
                    });
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
