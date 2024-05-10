'use client';

//import components
import Header from '@/components/Header';
import HomepageCarousel from '@/components/homepage-carousel';
import TourCard from '@/components/tourCard';
import Wrapper from '@/components/Wrapper';

// form/shadcn dependencies
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormControl,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

// nextjs dependencies
import Image from 'next/image';

const formSchema = z.object({
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    email: z.string().email(),
    message: z.string().min(10).max(500),
});

export default function Home() {
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
    }

    // TODO: refactor this in a data file and just map over it
    const tourData = [
        {
            title: 'Khiva',
            image: '/jonathan-greenaway-HDK1NstWkcI-unsplash.jpg',
            description:
                'Uzbekistan remains the most-visited country in Central Asia for one key reason.',
            time: 'September 1st - 7th',
            price: 100,
        },
        {
            title: 'BuKhara',
            image: '/jonathan-greenaway-HDK1NstWkcI-unsplash.jpg',
            description:
                'Uzbekistan remains the most-visited country in Central Asia for one key reason.',
            time: 'September 1st - 7th',
            price: 100,
        },
        {
            title: 'Samarkand',
            image: '/jonathan-greenaway-HDK1NstWkcI-unsplash.jpg',
            description:
                'Uzbekistan remains the most-visited country in Central Asia for one key reason.',
            time: 'September 1st - 7th',
            price: 100,
        },
        // {
        // 	title: "Samarkand",
        // 	image: "/jonathan-greenaway-HDK1NstWkcI-unsplash.jpg",
        // 	description:
        // 		"Uzbekistan remains the most-visited country in Central Asia for one key reason",
        // 	time: "September 1st - 7th",
        // 	price: 100,
        // }
    ];

    return (
        <main className="bg-white flex h-[500px] flex-col">
            <HomepageCarousel
                heading="Welcome to Central Asia Tours"
                description="Anim aute id magna aliqua ad ad non deserunt sunt. Qui
						irure qui lorem cupidatat commodo. Elit sunt amet fugiat
						veniam occaecat fugiat aliqua."
            />

            <Wrapper>
                <div
                    id="tours"
                    className="text-black flex flex-col items-center p-8"
                >
                    <h1 className=" text-4xl font-semibold pb-4 ">
                        Central Asia Tours
                    </h1>
                    <div className="flex flex-col overflow-hidden lg:flex-row justify-center">
                        {tourData.map((tour, index) => {
                            return (
                                <TourCard
                                    key={index}
                                    title={tour.title}
                                    image={tour.image}
                                    description={tour.description}
                                    time={tour.time}
                                    price={tour.price}
                                />
                            );
                        })}
                    </div>
                </div>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className=" max-w-md mx-auto my-4 w-full flex flex-col gap-4"
                    >
                        <FormField
                            name="firstName"
                            control={form.control}
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel>First Name</FormLabel>
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
                                <FormItem>
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
                </Form>

                <div className=" h-[800px] bg-red-500"></div>
            </Wrapper>
        </main>
    );
}
