"use client";
// form dependencies
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Wrapper from "./Wrapper";
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

emailjs.init("RpIH6mlkgSGMUpMPK");

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

    emailjs
      .send("service_1i1zkm9", "template_3qvaw8b", values, "RpIH6mlkgSGMUpMPK")
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
      <div
        className="bg-gradient-to-r from-yellow-300 to-orange-500"
        id="contact-form"
      >
        <Wrapper className="p-10">
          {!isSubmitted ? (
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="max-w-2xl mx-auto w-full flex flex-col gap-4 my-12"
            >
              <h2 className="text-4xl text-center">{t("title")}</h2>
              <div className="flex flex-col md:flex-row gap-4">
                <FormField
                  name="firstName"
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <FormItem className="flex-1">
                        <FormLabel>{t("firstName")}</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="John" type="text" />
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
                      <FormLabel>{t("lastName")}</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Doe" type="text" />
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
                    <FormLabel>{t("email")}</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="john.doe@gmail.com"
                        type="email"
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
                    <FormLabel>{t("message")}</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={5}
                        {...field}
                        placeholder={t("message")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                {t("submit")}
              </Button>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-3xl">{t("confirmation")}</h1>
              <Button
                onClick={() => {
                  setIsSubmitted(false);
                  form.reset();
                }}
              >
                {t("submitAnother")}
              </Button>
            </div>
          )}
        </Wrapper>
      </div>
    </Form>
  );
};
