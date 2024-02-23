import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { HeroParallax } from '@/components/ui/hero-parallax';
import { Tabs } from '@/components/ui/tabs';
import { products, tabs } from '@/constants';
import React from 'react';

export default function Home() {
    return (
        <main className="bg-zinc-900 text-white min-h-screen">
            <div className="sm:px-16 px-6 flex justify-center items-center">
                <div className="xl:max-w-[1280px] w-full z-[100]">
                    <Navbar />
                </div>
            </div>
            <HeroParallax products={products} />
            <section id="projects">
                <div className="h-[20rem] md:h-[40rem] [perspective:750px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
                    <Tabs tabs={tabs} />
                </div>
            </section>
            <section id="contact"></section>
            <div className="sm:p-16 p-6 flex justify-center items-start">
                <div className="xl:max-w-[1280px] w-full">
                    <Footer />
                </div>
            </div>
        </main>
    );
}
