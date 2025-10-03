"use client";
// form dependencies
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { useTranslations } from "next-intl";

const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

// Initialize EmailJS with your public key from environment variables
if (typeof window !== "undefined") {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  if (publicKey) {
    emailjs.init(publicKey);
  }
}

export const HomeForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const t = useTranslations("ContactForm");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSubmitted(true);

    const templateParams = {
      from_name: `${values.firstName} ${values.lastName}`, // Sender's name
      from_email: values.email, // Sender's email (this is the inputted email)
      message: values.message, // Message content
    };

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are not configured");
      return;
    }

    emailjs
      .send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  }

  return (
    <Form {...form}>
      <section
        className="bg-gradient-to-r from-yellow-300 to-orange-500 py-16 md:py-20"
        id="contact-form"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {!isSubmitted ? (
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="max-w-3xl mx-auto w-full flex flex-col gap-6"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-4">
                {t("title")}
              </h2>
              <div className="flex flex-col md:flex-row gap-4">
                <FormField
                  name="firstName"
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <FormItem className="flex-1">
                        <FormLabel className="text-base md:text-lg font-medium">
                          {t("firstName")}
                        </FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="John" 
                            type="text"
                            className="text-base md:text-lg h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                <FormField
                  name="lastName"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="text-base md:text-lg font-medium">
                        {t("lastName")}
                      </FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder="Doe" 
                          type="text"
                          className="text-base md:text-lg h-12"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base md:text-lg font-medium">
                      {t("email")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="john.doe@gmail.com"
                        type="email"
                        className="text-base md:text-lg h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="message"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base md:text-lg font-medium">
                      {t("message")}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        rows={6}
                        {...field}
                        placeholder={t("message")}
                        className="text-base md:text-lg resize-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                className="w-full mt-4 h-12 text-base md:text-lg font-semibold"
              >
                {t("submit")}
              </Button>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center gap-6 py-12 max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900">
                {t("confirmation")}
              </h1>
              <Button
                onClick={() => {
                  setIsSubmitted(false);
                  form.reset();
                }}
                className="h-12 text-base md:text-lg px-8 font-semibold"
              >
                {t("submitAnother")}
              </Button>
            </div>
          )}
        </div>
      </section>
    </Form>
  );
};
