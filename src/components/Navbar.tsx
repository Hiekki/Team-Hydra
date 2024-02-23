'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Button } from './ui/button';

const Navbar = () => {
    const navigation_links: Record<string, string>[] = [
        { id: 'projects', name: 'Projects', href: '/#projects' },
        { id: 'contact', name: 'Contact', href: '/#contact' },
        { id: 'status', name: 'Status', href: 'https://status.teamhydra.dev/' },
        { id: 'support', name: 'Support', href: 'https://hep.gg/request' },
    ];

    const [toggle, setToggle] = useState(false);
    return (
        <nav className="flex w-full items-center justify-between object-contain py-6">
            <Image src={`/teamhydra.png`} alt="team hydra" width={145} height={25} className="w-[100px]" />
            <ul className="hidden flex-1 list-none items-center justify-end sm:flex">
                {navigation_links.map((nav, i) => (
                    <li key={nav.id} className={`cursor-pointer font-poppins text-[16px] font-normal text-white mr-10`}>
                        <a href={nav.href} className="">
                            {nav.name}
                        </a>
                    </li>
                ))}
                <li>
                    <Button className="bg-green-600 z-10 hover:bg-zinc-200 hover:text-green-600 mr-4" variant="default" size="sm" asChild>
                        <a href="https://accounts.hep.gg/">Staff Login</a>
                    </Button>
                </li>
                <li>
                    <Button className="bg-green-600 z-10 hover:bg-zinc-200 hover:text-green-600" variant="default" size="sm" asChild>
                        <a href="https://hep.gg/discord">Join Our Discord</a>
                    </Button>
                </li>
            </ul>

            <div className="flex flex-1 items-center justify-end sm:hidden">
                <div
                    className={`${
                        toggle ? 'flex' : 'hidden'
                    } bg-black-gradient sidebar absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
                >
                    <ul className="flex flex-1 list-none flex-col items-center justify-end">
                        {navigation_links.map((nav, i) => (
                            <li
                                key={nav.id}
                                className={`cursor-pointer font-poppins text-[16px] font-normal text-white ${
                                    i == navigation_links.length - 1 ? 'mb-0' : 'mb-4'
                                }`}
                            >
                                <a href={`/#${nav.id}`}>{nav.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
