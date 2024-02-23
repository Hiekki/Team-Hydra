'use client';
import Image from 'next/image';

const Footer = () => {
    const social_media = [
        {
            id: 'social-media-1',
            icon: 'discord',
            name: 'Discord',
            link: 'https://discord.gg/',
            target: '_blank',
        },
        {
            id: 'social-media-2',
            icon: 'facebook',
            name: 'Facebook',
            link: 'https://www.facebook.com/',
            target: '_blank',
        },
        {
            id: 'social-media-3',
            icon: 'twitter',
            name: 'Twitter',
            link: 'https://twitter.com/',
            target: '_blank',
        },
    ];

    return (
        <section>
            <div className="flex w-full flex-col items-center justify-between border-t-[1px] border-t-[#3f3e45] pt-6 md:flex-row">
                <p className="text-center font-poppins text-[18px] font-normal leading-[27px] text-white">
                    Copyright © 2024. All Rights Reserved.
                </p>
                <div className="mt-6 flex flex-row md:mt-0">
                    {social_media.map((social, i) => (
                        <a key={social.id} href={social.link} target={social.target}>
                            <Image
                                key={social.id}
                                src={`/socialMedia/${social.icon}.svg`}
                                alt={social.id}
                                width={21}
                                height={21}
                                className={`h-[21px] w-[21px] cursor-pointer object-contain ${i != social_media.length ? 'mr-6' : 'mr-0'} `}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Footer;
