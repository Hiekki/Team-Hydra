'use client';
import React from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { TextGenerateEffect } from './text-generate-effect';
import { Button } from './button';
import { useMediaQuery } from 'react-responsive';

export const HeroParallax = ({
    products,
}: {
    products: {
        title: string;
        link: string;
        thumbnail: string;
    }[];
}) => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const firstRow = products.slice(0, 3);
    const secondRow = products.slice(3, 6);
    const thirdRow = products.slice(6, 9);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 900]), springConfig);
    const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -900]), springConfig);
    const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
    const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
    const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
    const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [isMobile ? -600 : -850, 25]), springConfig);

    return (
        <div
            ref={ref}
            className="h-[175vh] items-center overflow-hidden antialiased relative flex flex-col self-auto [perspective:750px] [transform-style:preserve-3d]"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className=""
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((product) => (
                        <ProductCard product={product} translate={translateX} key={product.title} />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row mb-20 space-x-20">
                    {secondRow.map((product) => (
                        <ProductCard product={product} translate={translateXReverse} key={product.title} />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((product) => (
                        <ProductCard product={product} translate={translateX} key={product.title} />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = () => {
    return (
        <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
            <div className="relative z-50">
                <TextGenerateEffect words="Team Hydra" className="md:text-8xl text-3xl font-bold text-green-600" />
                <TextGenerateEffect
                    words="We make some of the largest projects on Discord, and are one of few who still takes projects while being one of the largest
                Discord development teams in the world. We pride ourselves on everything we create, our vow to user privacy, and our
                commitment to the Discord community. We are Team Hydra."
                    className="max-w-2xl text-base md:text-xl mt-8 text-neutral-200"
                />
            </div>
            <div className="flex mt-8">
                <Button
                    className="bg-green-600 z-10 hover:bg-zinc-200 hover:text-green-600 text-black font-bold"
                    variant="default"
                    size="lg"
                    asChild
                >
                    <Link href="/#contact">Contact Us</Link>
                </Button>
                <div className="w-8" />
                <Button
                    className="bg-green-600 z-10 hover:bg-zinc-200 hover:text-green-600 text-black font-bold"
                    variant="default"
                    size="lg"
                    asChild
                >
                    <Link href="/#projects">Our Projects</Link>
                </Button>
            </div>
        </div>
    );
};

export const ProductCard = ({
    product,
    translate,
}: {
    product: {
        title: string;
        link: string;
        thumbnail: string;
    };
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="group/product h-52 md:h-80 w-[8rem] md:w-[30rem] relative flex-shrink-0"
        >
            <Link href={product.link} className="block group-hover/product:shadow-2xl ">
                <Image
                    src={product.thumbnail}
                    height="600"
                    width="600"
                    className="object-contain absolute h-full w-full inset-0"
                    alt={product.title}
                />
            </Link>
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
            <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">{product.title}</h2>
        </motion.div>
    );
};
