"use client";
import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import SectionTitle from "./SectionTitle";
import { TermsOfService } from "@/constants";

const Footer = () => {
  const social_media = [
    {
      id: "social-media-1",
      icon: "discord",
      name: "Discord",
      link: "https://discord.gg/",
      target: "_blank",
    },
    {
      id: "social-media-2",
      icon: "facebook",
      name: "Facebook",
      link: "https://www.facebook.com/",
      target: "_blank",
    },
    {
      id: "social-media-3",
      icon: "twitter",
      name: "Twitter",
      link: "https://twitter.com/",
      target: "_blank",
    },
  ];

  return (
    <section>
      <div className="flex w-full flex-col items-center justify-between border-t-[1px] border-t-[#3f3e45] pt-6 md:flex-row">
        <p className="text-center font-poppins text-[18px] font-normal leading-[27px] text-white">
          © 2024 Team Hydra. All Rights Reserved.
        </p>
        <div>
          <p className="">
            <Drawer>
              <DrawerTrigger>
                <span className="text-green-600">Terms of Service</span>
              </DrawerTrigger>
              <DrawerContent className="">
                <DrawerHeader>
                  <SectionTitle title="Terms of Service" footer={true} />
                </DrawerHeader>
                <div className="text-center max-h-80 overflow-auto">
                  {TermsOfService.map((term, i) => (
                    <div key={term.title}>
                      <h1 className="text-zinc-400 text-4xl pb-4">
                        {term.title}
                      </h1>
                      <p className="text-white text-lg pb-4">
                        {term.description}
                      </p>
                    </div>
                  ))}
                </div>
                <DrawerFooter>
                  <DrawerClose></DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
            {"  "}|{"  "}
            <Drawer>
              <DrawerTrigger>
                <span className="text-green-600">Privacy Policy</span>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <SectionTitle title="Privacy Policy" />
                  <DrawerDescription className="text-white text-center">
                    S&apos;more legal bullshit, but privacy. i don&apos;t
                    fucking know what else to put here yet, but for now
                    let&apos;s add this.
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose></DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </p>
        </div>
        <div className="mt-6 flex flex-row md:mt-0">
          {social_media.map((social, i) => (
            <a key={social.id} href={social.link} target={social.target}>
              <Image
                key={social.id}
                src={`/socialMedia/${social.icon}.svg`}
                alt={social.id}
                width={21}
                height={21}
                className={`h-[21px] w-[21px] cursor-pointer object-contain ${
                  i != social_media.length ? "mr-6" : "mr-0"
                }`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
