"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type FormValues = z.infer<typeof formSchema>;

export function NewsletterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    // Simulate API call with artificial delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form submitted:", values);
    setIsSubmitting(false);
    //Show a success message ask the user to complete by verifying their email
    toast.success(
      "Thank you for subscribing! Please check your email to confirm your subscription."
    );

    form.reset();
  };

  return (
    <>
      <p className="text-base font-normal leading-normal text-white">
        Subscribe to my newsletter for the latest industry trends and insights.
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-3"
        >
          <div className="flex flex-col gap-4 sm:flex-row">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Your email here"
                      className="w-full border border-primary bg-transparent text-base font-normal leading-normal text-[#82cbe4] placeholder-[#82cbe4] focus:outline-none"
                      aria-label="Email for newsletter"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-500" />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-background-secondary"
              variant={"outline"}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </div>
          <p className="text-xs font-normal leading-[18px] text-muted-foreground">
            By subscribing, you consent to our Privacy Policy and agree to
            receive updates.
          </p>
        </form>
      </Form>
    </>
  );
}
