import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SectionTitle from '@/components/SectionTitle';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { HeroParallax } from '@/components/ui/hero-parallax';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { Tabs } from '@/components/ui/tabs';
import { Products, Tabs as _Tabs, Team, Testimonials } from '@/constants';
import React from 'react';

export default function Home() {
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
            </section>
            <div className="sm:p-16 p-6 flex justify-center items-start mt-10">
                <div className="xl:max-w-[1280px] w-full">
                    <Footer />
                </div>
            </div>
        </main>
    );
}
