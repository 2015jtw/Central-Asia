'use client';

//import shadcn/regular components
import Header from '@/components/Header';
import HomepageCarousel from '@/components/homepage-carousel';
import TourCard from '@/components/tourCard';
import Wrapper from '@/components/Wrapper';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormControl,
} from '@/components/ui/form';
import ImageWithText from '@/components/ImageWithText';
import CentralAsia from '@/components/CentralAsia';

// form dependencies
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

// react/nextjs dependencies
import { useState } from 'react';
import Image from 'next/image';
import AboutUs from '@/components/AboutUs';

const formSchema = z.object({
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    email: z.string().email(),
    message: z.string().min(10).max(500),
});

emailjs.init('RpIH6mlkgSGMUpMPK');

export default function Home() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        setIsSubmitted(true);

        emailjs
            .send(
                'service_1i1zkm9',
                'template_3qvaw8b',
                values,
                'RpIH6mlkgSGMUpMPK'
            )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                },
                (err) => {
                    console.log('FAILED...', err);
                }
            );
    }

    // TODO: refactor this in a data file and just map over it
    const tourData = [
        {
            title: 'Khiva',
            image: '/khiva.jpg',
            description:
                'Khiva is a city of approximately 50,000 people located in Xorazm Province, Uzbekistan. It is the former capital of Khwarezmia and the Khanate of Khiva. Itchan Kala in Khiva was the first site in Uzbekistan to be inscribed in the World Heritage List (1991).',
        },
        {
            title: 'BuKhara',
            image: '/bukhara.jpg',
            description:
                'Bukhara is a city in Uzbekistan, Central Asia. It was a prominent stop on the Silk Road trade route between the East and the West, and a major medieval center for Islamic theology and culture. It is the capital of the Bukhara Region of Uzbekistan. The region of Bukhara was a part of the Persian Empire for a long time. The origin of many of its current inhabitants goes back to the period of Aryan',
        },
        {
            title: 'Samarkand',
            image: '/samarkand.jpg',
            description:
                'Samarkand is a city in southeastern Uzbekistan and one of the oldest inhabited cities in Central Asia. There are many historical and architectural sites in the city. The most famous of these is the Registan, a public square in the heart of the city, where three madrasahs of distinctive Islamic architecture are arranged around a plaza. The three madrasahs are: the Ulugh Beg Madrasah (15th century), the Tilya-Kori Madrasah (17th century), and the Sher-Dor Madrasah (17th century).',
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

            <Wrapper>
                <div
                    id="tours"
                    className="text-black flex flex-col items-center py-8"
                >
                    <h1 className="text-4xl">Our Tours</h1>
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
            <AboutUs />
            <Form {...form}>
                <div className="bg-gradient-to-r from-yellow-300 to-orange-500">
                    {!isSubmitted ? (
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="max-w-2xl mx-auto my-4 w-full flex flex-col gap-4 my-12"
                            id="contact-form"
                        >
                            <h1 className="text-3xl text-center">
                                Contact Us to Book a Tour
                            </h1>
                            <div className="flex flex-col md:flex-row gap-4">
                                <FormField
                                    name="firstName"
                                    control={form.control}
                                    render={({ field }) => {
                                        return (
                                            <FormItem className="flex-1">
                                                <FormLabel>
                                                    First Name
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="First Name"
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
                                            <FormLabel>Last Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="Last Name"
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
                                        <FormLabel>Email Address</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Email Address"
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
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                rows={5}
                                                {...field}
                                                placeholder="Message"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full">
                                Submit
                            </Button>
                        </form>
                    ) : (
                        <div className="flex flex-col items-center justify-center gap-4">
                            <h1 className="text-3xl">
                                Thank you for your submission!
                            </h1>
                            <Button
                                onClick={() => {
                                    setIsSubmitted(false);
                                    form.reset();
                                }}
                            >
                                Submit another form
                            </Button>
                        </div>
                    )}
                </div>
            </Form>
        </main>
    );
}
