"use client";

//import shadcn/regular components
import Header from "@/components/Header";
import HomepageCarousel from "@/components/homepage-carousel";
import TourCard from "@/components/tourCard";
import MovingBanner from "@/components/moving-banner";
import Wrapper from "@/components/Wrapper";
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
import ImageWithText from "@/components/ImageWithText";
import CentralAsia from "@/components/CentralAsia";
import Brands from "@/components/Brands";

// form dependencies
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

// react/nextjs dependencies
import { useState } from "react";
import Image from "next/image";
import AboutUs from "@/components/AboutUs";
import { useTranslations } from "next-intl";

const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

emailjs.init("RpIH6mlkgSGMUpMPK");

export default function Home() {
  const tk = useTranslations("Tashkent");
  const k = useTranslations("Khiva");
  const b = useTranslations("Bukhara");
  const s = useTranslations("Samarkand");
  const t = useTranslations("ContactForm");
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const tourData = [
    {
      title: tk("title"),
      image: "/tashkent.jpg",
      description: tk("description"),
    },
    {
      title: s("title"),
      image: "/samarkand.jpg",
      description: s("description"),
    },
    {
      title: b("title"),
      image: "/bukhara.jpg",
      description: b("description"),
    },
    {
      title: k("title"),
      image: "/khiva.jpg",
      description: k("description"),
    },
  ];

  return (
    <main className="bg-white flex flex-col">
      <HomepageCarousel
        heading="Book a Tour"
        description="Come explore the best that Uzbekistan has to offer with our expert guides. We offer tours to Khiva, Bukhara, and Samarkand. Book now to secure your spot!"
        cta="Get in touch"
      />
      <CentralAsia />
      <Wrapper className="p-8">
        <div id="tours" className="text-black flex flex-col items-center">
          <div className="flex flex-col gap-30 w-full">
            {tourData.map((tour, index) => {
              return (
                <ImageWithText
                  key={index}
                  image={tour.image}
                  title={tour.title}
                  description={tour.description}
                  swap={index % 2 === 0}
                />
              );
            })}
          </div>
        </div>
      </Wrapper>
      <MovingBanner />

      <AboutUs />
      <Form {...form}>
        <div className="bg-gradient-to-r from-yellow-300 to-orange-500">
          <Wrapper className="p-10">
            {!isSubmitted ? (
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="max-w-2xl mx-auto w-full flex flex-col gap-4 my-12"
                id="contact-form"
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
                            <Input
                              {...field}
                              placeholder={t("firstName")}
                              type="text"
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
                        <FormLabel>{t("lastName")}</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder={t("lastName")}
                            type="text"
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
                      <FormLabel>{t("email")}</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder={t("email")}
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
    </main>
  );
}
