'use client';

//import shadcn components
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

// form dependencies
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

// react/nextjs dependencies
import { useState } from 'react';
import Image from 'next/image';

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
            image: '/jonathan-greenaway-HDK1NstWkcI-unsplash.jpg',
            description:
                'Uzbekistan remains the most-visited country in Central Asia for one key reason.'
        },
        {
            title: 'BuKhara',
            image: '/jonathan-greenaway-HDK1NstWkcI-unsplash.jpg',
            description:
                'Uzbekistan remains the most-visited country in Central Asia for one key reason.'
        },
        {
            title: 'Samarkand',
            image: '/jonathan-greenaway-HDK1NstWkcI-unsplash.jpg',
            description:
                'Uzbekistan remains the most-visited country in Central Asia for one key reason.'
        },
    ];

    return (
        <main className="bg-white flex flex-col">
            <HomepageCarousel
                heading="Book a Tour"
                description="Come explore the best that Uzbekistan has to offer with our expert guides. We offer tours to Khiva, Bukhara, and Samarkand. Book now to secure your spot!"
                cta="Get in touch"
            />

            <Wrapper>

                <div id="central-asia" className='flex flex-col justify-center items-center bg-yellow-300 text-black h-[500px]'>
                    <h3 className='text-3xl'>Journey through Central Asia</h3>
                    <h1 className='text-5xl py-4'>Uzbekistan</h1>
                    <p className="text-base max-w-3xl text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque ipsa quaerat aperiam repellendus commodi impedit eveniet, iste officia laboriosam provident, facilis esse! Dolores odit cum facere perspiciatis maxime deserunt eveniet?</p>
                </div>

                <div
                    id="tours"
                    className="text-black flex flex-col items-center p-8"
                >
                    <h1 className="text-4xl font-semibold pb-4 ">
                        Central Asia Tours
                    </h1>
                    <div className="flex flex-col gap-4 w-full">
                        {tourData.map((tour, index) => {
                            return (
                                <ImageWithText
                                    key={index}
                                    image={tour.image}
                                    title={tour.title}
                                    description={tour.description}
                                    swap={index % 2 === 0}
                                />
                            )
                        })}
                    </div>

                </div>

                <Form {...form}>
                    {!isSubmitted ? (
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="max-w-2xl mx-auto my-4 w-full flex flex-col gap-4"
                            id="contact-form"
                        >
                            <h1 className="text-3xl text-center">Contact Us to Book a Tour</h1>
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
                </Form>

                <div className="mt-5 h-[800px] bg-red-500"></div>
            </Wrapper>
        </main>
    );
}
