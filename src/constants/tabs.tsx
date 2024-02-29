import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export const Tabs = [
    {
        title: 'AppBot',
        value: 'appbot',
        content: (
            <div className="flex flex-col flex-wrap justify-between items-start w-full overflow-hidden relative rounded-2xl p-10 font-bold bg-gradient-to-br from-[#38EF7D] to-[#11998E]">
                <div className="flex flex-row w-full justify-between text-xl md:text-4xl pb-4">
                    <h1>AppBot</h1>
                    <Image src={'/projects/appbot.png'} height="70" width="70" className="" alt={'AppBot'} />
                </div>
                <p className="flex text-lg mb-48 md:mb-20">
                    AppBot is the latest and greatest publicly available Discord bot created fully by Team Hydra. It is a bot that helps you
                    manage all sorts of applications, forms, or anything else you can think of within your community, and keeping both
                    responses and users inside your community instead of sent to an external website. <br />
                    <br /> AppBot lets you collect pretty much any type of data you can think of from your users, obviously user provided,
                    and recall it and manipulate it with some of the latest Discord features, like buttons and ephemeral messages. <br />
                    <br /> AppBot has a premium program that is currently not available to the public but is planned for some of the finer
                    controls of the bot. A website will come soon for AppBot once we release our Dashboard update, but as of now the bot can
                    be fully managed inside of Discord.
                </p>
                <Button className="bg-zinc-200 text-black hover:bg-zinc-800 hover:text-white mt-8" variant="default" size="lg" asChild>
                    <Link href="https://zira.bot/invite?id=714718407039385660">Check Out AppBot</Link>
                </Button>
            </div>
        ),
    },
    {
        title: 'HepBoat',
        value: 'hepboat',
        content: (
            <div className="flex flex-col flex-wrap justify-between items-start w-full overflow-hidden relative rounded-2xl p-10 font-bold text-white bg-gradient-to-br from-[#7289DA] to-[#2A2A43]">
                <div className="flex flex-row w-full justify-between text-xl md:text-4xl pb-4">
                    <h1>HepBoat</h1>
                    <Image src={'/projects/hepboat.png'} height="70" width="70" className="" alt={'HepBoat'} />
                </div>
                <p className="flex text-lg mb-24 md:mb-16">
                    HepBoat is one of the most powerful moderation bots in the Discord community. It is a multipurpose bot that can be used
                    for many things. It can be configured extremely granularly to provide the finest control of filtering, punishing,
                    censoring, and more. It is also capable of providing a large amount of moderation tools for guilds with advanced
                    moderation needs, on top of utilities and fun commands that can be completely enabled and disabled both easily and
                    quickly, as well as disabled and enabled at a fine level if you don&apos;t need everything the bot offers. <br /> <br />{' '}
                    HepBoat is currently whitelist only, for servers that truly need it, or are large enough to warrant it, or lastly, it
                    can be purchased on the HepBoat Store. <br /> <br />
                    If you want to find out if HepBoat is for you, be it regular HepBoat, HepBoat Prime, or even beta, you can check out the
                    docs by clicking the button below.
                </p>
                <div className="flex">
                    <Button className="bg-zinc-200 text-black hover:bg-zinc-800 hover:text-white mt-8" variant="default" size="lg" asChild>
                        <Link href="https://hepbo.at/">Check Out HepBoat</Link>
                    </Button>
                    <div className="w-8" />
                    <Button className="bg-zinc-200 text-black hover:bg-zinc-800 hover:text-white mt-8" variant="default" size="lg" asChild>
                        <Link href="https://clients.hep.gg/store/hepboat-monthly">HepBoat Store</Link>
                    </Button>
                </div>
            </div>
        ),
    },
    {
        title: 'Hep.gg',
        value: 'hepgg',
        content: (
            <div className="flex flex-col flex-wrap justify-between items-start w-full overflow-hidden relative rounded-2xl p-10 font-bold text-white bg-gradient-to-br from-[#33353C] to-[#A8A8AA]">
                <div className="flex flex-row w-full justify-between text-xl md:text-4xl pb-4">
                    <h1>Hep.gg</h1>
                    <Image src={'/projects/hepgg.png'} height="70" width="70" className="" alt={'Hepgg'} />
                </div>
                <p className="flex text-lg">
                    Hep.gg started as a semi-public image (and very rarely, a file) host for people that want to either use their own
                    domain, but don&apos;t want to host their own file server, or for people that want a file host with larger file sizes
                    limits, cool custom domains that we provide, faster servers, awesome features, and of course, an awesome community. On
                    top of that, both then and now, we also have actual idea of what privacy is, unlike some current file hosts and cloud
                    providers! If you would like more information, you&apos;re welcome to join our Discord Server in the top right, or just
                    by signing in (it will auto invite you!) and by asking us questions there! <br /> <br /> Nowadays, Hep.gg has become a
                    privacy oriented cloud for quick things like screenshots, memes, a CDN for those who need it and can&apos;t afford one,
                    pastebin, community, and password manager with no premium gimmicks like other password managers and more, expanding
                    every day! Hep.gg as an image host has evolved from an invite only service with only 2 people able to generate invites
                    to allowing many many, more users to invite their friends. <br /> <br />
                    Hep.gg also hosts a lot of projects for Team Hydra in this namespace, as Hep.gg is essentially the namespace for all
                    cloud services for and by Team Hydra.
                </p>
                <Button className="bg-zinc-200 text-black hover:bg-zinc-800 hover:text-white mt-8" variant="default" size="lg" asChild>
                    <Link href="https://hep.gg/">Check Out Hep.gg</Link>
                </Button>
            </div>
        ),
    },
    {
        title: 'Hydra ModMail',
        value: 'hydramodmail',
        content: (
            <div className="flex flex-col flex-wrap justify-between items-start w-full overflow-hidden relative rounded-2xl p-10 font-bold text-white bg-gradient-to-br from-[#22B73D] to-[#35373E]">
                <div className="flex flex-row w-full justify-between text-xl md:text-4xl pb-4">
                    <h1>Hydra Modmail</h1>
                    <Image src={'/projects/hydramodmail.png'} height="70" width="70" className="" alt={'HydraModmail'} />
                </div>
                <p className="flex text-lg mb-[25rem] md:mb-40">
                    Hydra Modmail instances are bots that users can message to contact moderators of a Discord server, without having to
                    create tickets on an external platform.
                    <br /> <br />
                    Every modmail is logged to a channel selected by the instance owner, allowing for quick viewing of previous messages
                    sent by staff and users.
                    <br /> <br />
                    With options including setting your own profile picture, prefix, and messages, Hydra Modmail is one of the most
                    customizable contact solutions on the market for Discord.
                </p>
                <Button className="bg-zinc-200 text-black hover:bg-zinc-800 hover:text-white mt-8" variant="default" size="lg" asChild>
                    <Link href="https://discord.gg/zira">Check Out Hydra Modmail</Link>
                </Button>
            </div>
        ),
    },
    {
        title: 'KeyBot',
        value: 'keybot',
        content: (
            <div className="flex flex-col flex-wrap justify-between items-start w-full overflow-hidden relative rounded-2xl p-10 font-bold text-white bg-gradient-to-br from-[#FFCC01] to-[#664824]">
                <div className="flex flex-row w-full justify-between text-xl md:text-4xl pb-4">
                    <h1>KeyBot</h1>
                    <Image src={'/projects/keybot.png'} height="70" width="70" className="" alt={'KeyBot'} />
                </div>
                <p className="flex text-lg mb-16">
                    KeyBot is a simple project made for a friend of a friends server, but made so that other servers could utilize the same
                    features that might need it.
                    <br /> <br />
                    KeyBot allows you to create pools and fill them with keys to be distributed to users.
                    <br /> <br />
                    Other features include being able to require a Discord role before being able to claim, limiting staff access to grant
                    keys, limiting the amount of keys users can claim, allowing for easy claiming and loading of keys, and much much more.
                    <br /> <br />
                    KeyBot was originally meant to be used by large servers that were verified or partnered, however this has been updated
                    to allow anyone to use the bot.
                    <br /> <br />
                    If you need KeyBot for a large project, or for use with a large game publisher, feel free to contact us directly on the
                    main page so we can work with you.
                </p>
                <Button className="bg-zinc-200 text-black hover:bg-zinc-800 hover:text-white mt-8" variant="default" size="lg" asChild>
                    <Link href="https://zira.bot/invite?keybot">Check Out KeyBot</Link>
                </Button>
            </div>
        ),
    },
    {
        title: 'Zira',
        value: 'zira',
        content: (
            <div className="flex flex-col flex-wrap justify-between items-start w-full overflow-hidden relative rounded-2xl p-10 font-bold text-white bg-gradient-to-br from-[#FFCF11] to-[#FA47BD]">
                <div className="flex flex-row w-full justify-between text-xl md:text-4xl pb-4">
                    <h1>Zira</h1>
                    <Image src={'/projects/zira.png'} height="70" width="70" className="" alt={'Zira'} />
                </div>
                <p className="flex text-lg">
                    Zira lets users add and remove roles from themselves by simply reacting to a message.
                    <br /> <br />
                    Zira was Team Hydra&apos;s original project. We started out creating a team around Zira. It was our bread and butter and
                    when we received an abundance of support from our community, we decided to make more bots that solve problems and make
                    people happy.
                    <br /> <br />
                    Being a part of communities is something that is so important to us personally, so we really thought that building more
                    tools just like Zira would be a great way to help people.
                    <br /> <br />
                    Zira has been around for a while now, and we have been able to grow so large that we can support our other projects with
                    the help of our community.
                    <br /> <br />
                    Zira is an incredible tool to any Discord server, and we hope to continue building Zira and our other services to the
                    quality we have maintained over the years, and we appreciate everyone who has supported us in that time.
                </p>
                <Button className="bg-zinc-200 text-green-600 hover:bg-zinc-800 mt-8" variant="default" size="lg" asChild>
                    <Link href="https://zira.bot">Check Out Zira</Link>
                </Button>
            </div>
        ),
    },
    {
        title: 'Zira Music',
        value: 'ziramusic',
        content: (
            <div className="flex flex-col flex-wrap justify-between items-start w-full overflow-hidden relative rounded-2xl p-10 font-bold text-white bg-gradient-to-br from-[#00EED0] to-[#EE009A]">
                <div className="flex flex-row w-full justify-between text-xl md:text-4xl pb-4">
                    <h1>Zira Music</h1>
                    <Image src={'/projects/ziramusic.png'} height="70" width="70" className="" alt={'ZiraMusic'} />
                </div>
                <p className="flex text-lg mb-24">
                    Zira music is a very simply modern take on a music bot. With no bells and whistles, we are aiming to provide a free and
                    easy to use music bot for everyone.
                    <br /> <br />
                    Supporting pretty much all the music services out there, no matter where your media is, as long as it&apos;s freely
                    available, we can play it for you.
                    <br /> <br />
                    Zira music is planned to be maintained as long as we are able, and don&apos;t intend to add a premium plan, etc. Zira
                    music is obviously made by the same people who brought you Zira. This means we have no chance on taking the service
                    down, and quality and simplicity is a goal for us.
                    <br /> <br />
                    Also, we now host multiple instances of Zira music, and plan on supporting more in the future. This means multiple bots
                    can be in the same server, work the same, but support multiple voice channels.
                </p>
                <Button className="bg-zinc-200 text-green-600 hover:bg-zinc-800 mt-8" variant="default" size="lg" asChild>
                    <Link href="https://zira.bot/invite?music">Check Out Zira Music</Link>
                </Button>
            </div>
        ),
    },
];
