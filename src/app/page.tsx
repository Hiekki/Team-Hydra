'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SectionTitle from '@/components/SectionTitle';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { HeroParallax } from '@/components/ui/hero-parallax';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { Tabs } from '@/components/ui/tabs';
import { Products, Tabs as _Tabs, Team, Testimonials } from '@/constants';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormControl, FormField, FormItem, FormLabel, FormDescription, FormMessage, Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Home() {
    const formSchema = z.object({
        name: z.string().min(2, {
            message: 'Name must be at least 2 characters.',
        }),
        email: z.string().email({ message: 'Email must be valid.' }),
        content: z.string().min(2, { message: 'Content must be at least 2 characters.' }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            content: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <main className="bg-zinc-900 text-white min-h-screen">
            <div className="md:px-16 px-6 flex justify-center items-center">
                <div className="xl:max-w-[1280px] w-full z-[100]">
                    <Navbar />
                </div>
            </div>
            <section id="home">
                <HeroParallax products={Products} />
            </section>
            <section id="team">
                <SectionTitle title="Our Team" />
                <div className="flex justify-center items-center w-full pb-40">
                    <HoverEffect items={Team} />
                </div>
            </section>
            <section id="projects" className="mb-[44rem] sm:mb-[50rem] md:mb-60">
                <SectionTitle title="Our Projects" />
                <div className="h-screen md:h-[40rem] [perspective:750px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
                    <Tabs tabs={_Tabs} />
                </div>
            </section>
            <section id="testimonials" className="">
                <div className="flex justify-center items-center w-full">
                    <InfiniteMovingCards items={Testimonials} direction="left" speed="slow" />
                </div>
            </section>
            <section id="contact" className="pt-20">
                <SectionTitle title="Contact Us" />
                <span className="flex justify-center items-center w-full">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[20rem] md:w-[40rem]">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-green-600 text-2xl font-bold">Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="bg-zinc-700 border-zinc-800 text-white focus:border-green-600"
                                                placeholder="First Name / Username"
                                                {...field}
                                            />
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
                                        <FormLabel className="text-green-600 text-2xl font-bold">Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="bg-zinc-700 border-zinc-800 text-white focus:border-green-600"
                                                placeholder="Email"
                                                type="email"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="content"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-green-600 text-2xl font-bold">Message</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                className="bg-zinc-700 border-zinc-800 text-white resize-none focus:border-green-600 h-80"
                                                placeholder="Message"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="bg-green-600 z-10 hover:bg-zinc-200 hover:text-green-600 text-black font-bold">
                                Send Message
                            </Button>
                        </form>
                    </Form>
                </span>
            </section>
            <div className="sm:p-16 p-6 flex justify-center items-start mt-10">
                <div className="xl:max-w-[1280px] w-full">
                    <Footer />
                </div>
            </div>
        </main>
    );
}
