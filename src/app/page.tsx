import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SectionTitle from '@/components/SectionTitle';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { HeroParallax } from '@/components/ui/hero-parallax';
import { Tabs } from '@/components/ui/tabs';
import { products, tabs, team } from '@/constants';
import React from 'react';

export default function Home() {
    return (
        <main className="bg-zinc-900 text-white min-h-screen">
            <div className="sm:px-16 px-6 flex justify-center items-center">
                <div className="xl:max-w-[1280px] w-full z-[100]">
                    <Navbar />
                </div>
            </div>
            <section id="home">
                <HeroParallax products={products} />
            </section>
            <section id="team">
                <SectionTitle title="Our Team" />
                <div className="flex justify-center items-center w-full pb-40">
                    <HoverEffect items={team} />
                </div>
            </section>
            <section id="projects" className="mb-40">
                <SectionTitle title="Our Projects" />
                <div className="h-[20rem] md:h-[40rem] [perspective:750px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
                    <Tabs tabs={tabs} />
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
