import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SectionTitle from '@/components/SectionTitle';
import { PrivacyPolicy } from '@/constants';
import React from 'react';

export default function Home() {
    return (
        <main className="bg-zinc-900 text-white min-h-screen">
            <div className="md:px-16 px-6 flex justify-center items-center">
                <div className="xl:max-w-[1280px] w-full z-[100]">
                    <Navbar />
                </div>
            </div>
            <div className="mt-40">
                <SectionTitle title="Privacy Policy" />
                <div className="">
                    {PrivacyPolicy.map((term, i) => (
                        <div key={term.title}>
                            <div className="flex flex-col justify-center items-center pb-16 px-8">
                                <h1 className="text-zinc-400 text-2xl md:text-4xl pb-8">{term.title}</h1>
                                <p className="text-white text-lg pb-4 xl:max-w-[1280px] w-full">{term.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="sm:p-16 p-6 flex justify-center items-start mt-10">
                <div className="xl:max-w-[1280px] w-full">
                    <Footer />
                </div>
            </div>
        </main>
    );
}
