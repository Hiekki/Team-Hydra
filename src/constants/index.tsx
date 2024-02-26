import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export const products = [
    { title: 'HepBoat', link: 'https://teamhydra.dev/projects/hepboat', thumbnail: '/projects/hepboat.png' },
    { title: 'FeedBot', link: 'https://teamhydra.dev/projects/feedbot', thumbnail: '/projects/feedbot.png' },
    { title: 'AppBot', link: 'https://teamhydra.dev/projects/appbot', thumbnail: '/projects/appbot.png' },
    { title: 'Hydra ModMail', link: 'https://teamhydra.dev/projects/hydra-modmail', thumbnail: '/projects/hydramodmail.png' },
    { title: 'Team Hydra', link: '/', thumbnail: '/teamhydra.png' },
    { title: 'Hep.gg', link: 'https://teamhydra.dev/projects/hep.gg', thumbnail: '/projects/hepgg.png' },
    { title: 'Zira Music', link: 'https://teamhydra.dev/projects/zira-music', thumbnail: '/projects/ziramusic.png' },
    { title: 'Zira', link: 'https://teamhydra.dev/projects/zira', thumbnail: '/projects/zira.png' },
    { title: 'KeyBot', link: 'https://teamhydra.dev/projects/keybot', thumbnail: '/projects/keybot.png' },
];

export const team = [
    { title: 'Jake (JakeyPrime)', description: 'Founder & CEO', link: '/team/jake.png' },
    { title: 'Freddy (Profit)', description: 'Chief Technical Officer', link: '/team/profit.png' },
    { title: 'Panther', description: 'Chief Community Coordinator', link: '/team/panther2.png' },
    { title: 'Ghoul', description: 'Head of Staff', link: '/team/ghoul.png' },
    { title: 'Manu', description: 'Head of Support', link: '/team/manu.png' },
    { title: 'Tanner (Sticks)', description: 'Bent Developer', link: '/team/sticks.png' },
    { title: 'Virt', description: 'Documentation Specialist', link: '/team/virt.png' },
    { title: 'Jamisen (Untuned)', description: 'lil bitch', link: '/team/untuned.png' },
];

export const tabs = [
    {
        title: 'AppBot',
        value: 'appbot',
        content: (
            <div className="flex flex-col flex-wrap justify-between items-start w-full overflow-hidden relative rounded-2xl p-10 font-bold bg-gradient-to-br from-[#38EF7D] to-[#11998E]">
                <div className="flex flex-row w-full justify-between text-xl md:text-4xl pb-4">
                    <h1>AppBot</h1>
                    <Image src={'/projects/appbot.png'} height="70" width="70" className="" alt={'AppBot'} />
                </div>
                <p className="flex text-lg mb-20">
                    AppBot is the latest and greatest publicly available Discord bot created fully by Team Hydra. It is a bot that helps you
                    manage all sorts of applications, forms, or anything else you can think of within your community, and keeping both
                    responses and users inside your community instead of sent to an external website. <br />
                    <br /> AppBot lets you collect pretty much any type of data you can think of from your users, obviously user provided,
                    and recall it and manipulate it with some of the latest Discord features, like buttons and ephemeral messages. <br />
                    <br /> AppBot has a premium program that is currently not available to the public but is planned for some of the finer
                    controls of the bot. A website will come soon for AppBot once we release our Dashboard update, but as of now the bot can
                    be fully managed inside of Discord.
                </p>
                <Button className="bg-zinc-200 text-green-600 hover:bg-zinc-800 mt-8" variant="default" size="lg" asChild>
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
                <p className="flex text-lg mb-10">
                    HepBoat is one of the most powerful moderation bots in the Discord community. It is a multipurpose bot that can be used
                    for many things. It can be configured extremely granularly to provide the finest control of filtering, punishing,
                    censoring, and more. It is also capable of providing a large amount of moderation tools for guilds with advanced
                    moderation needs, on top of utilities and fun commands that can be completely enabled and disabled both easily and
                    quickly, as well as disabled and enabled at a fine level if you don't need everything the bot offers. <br /> <br />{' '}
                    HepBoat is currently whitelist only, for servers that truly need it, or are large enough to warrant it, or lastly, it
                    can be purchased on the HepBoat Store. <br /> <br />
                    If you want to find out if HepBoat is for you, be it regular HepBoat, HepBoat Prime, or even beta, you can check out the
                    docs by clicking the button below.
                </p>
                <div className="flex">
                    <Button className="bg-zinc-200 text-green-600 hover:bg-zinc-800 mt-8" variant="default" size="lg" asChild>
                        <Link href="https://hepbo.at/">Check Out HepBoat</Link>
                    </Button>
                    <div className="w-8" />
                    <Button className="bg-zinc-200 text-green-600 hover:bg-zinc-800 mt-8" variant="default" size="lg" asChild>
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
                    domain, but don't want to host their own file server, or for people that want a file host with larger file sizes limits,
                    cool custom domains that we provide, faster servers, awesome features, and of course, an awesome community. On top of
                    that, both then and now, we also have actual idea of what privacy is, unlike some current file hosts and cloud
                    providers! If you would like more information, you're welcome to join our Discord Server in the top right, or just by
                    signing in (it will auto invite you!) and by asking us questions there! <br /> <br /> Nowadays, Hep.gg has become a
                    privacy oriented cloud for quick things like screenshots, memes, a CDN for those who need it and can't afford one,
                    pastebin, community, and password manager with no premium gimmicks like other password managers and more, expanding
                    every day! Hep.gg as an image host has evolved from an invite only service with only 2 people able to generate invites
                    to allowing many many, more users to invite their friends. <br /> <br />
                    Hep.gg also hosts a lot of projects for Team Hydra in this namespace, as Hep.gg is essentially the namespace for all
                    cloud services for and by Team Hydra.
                </p>
                <Button className="bg-zinc-200 text-green-600 hover:bg-zinc-800 mt-8" variant="default" size="lg" asChild>
                    <Link href="https://hep.gg/">Check Out Hep.gg</Link>
                </Button>
            </div>
        ),
    },
    {
        title: 'Hydra ModMail',
        value: 'hydramodmail',
        content: (
            <div className="flex flex-col flex-wrap justify-between items-start w-full overflow-hidden relative rounded-2xl p-10 font-bold text-white bg-gradient-to-br from-[#00A164] to-[#005432]">
                <div className="flex flex-row w-full justify-between text-xl md:text-4xl pb-4">
                    <h1>Hydra Modmail</h1>
                    <Image src={'/teamhydra.png'} height="70" width="70" className="" alt={'HydraModmail'} />
                </div>
                <p className="flex text-lg mb-40">
                    Hydra Modmail instances are bots that users can message to contact moderators of a Discord server, without having to
                    create tickets on an external platform.
                    <br /> <br />
                    Every modmail is logged to a channel selected by the instance owner, allowing for quick viewing of previous messages
                    sent by staff and users.
                    <br /> <br />
                    With options including setting your own profile picture, prefix, and messages, Hydra Modmail is one of the most
                    customizable contact solutions on the market for Discord.
                </p>
                <Button className="bg-zinc-200 text-green-600 hover:bg-zinc-800 mt-8" variant="default" size="lg" asChild>
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
                <p className="flex text-lg">
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
                <Button className="bg-zinc-200 text-green-600 hover:bg-zinc-800 mt-8" variant="default" size="lg" asChild>
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
                    Zira was Team Hydra's original project. We started out creating a team around Zira. It was our bread and butter and when
                    we received an abundance of support from our community, we decided to make more bots that solve problems and make people
                    happy.
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
                <p className="flex text-lg mb-10">
                    Zira music is a very simply modern take on a music bot. With no bells and whistles, we are aiming to provide a free and
                    easy to use music bot for everyone.
                    <br /> <br />
                    Supporting pretty much all the music services out there, no matter where your media is, as long as it's freely
                    available, we can play it for you.
                    <br /> <br />
                    Zira music is planned to be maintained as long as we are able, and don't intend to add a premium plan, etc. Zira music
                    is obviously made by the same people who brought you Zira. This means we have no chance on taking the service down, and
                    quality and simplicity is a goal for us.
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

export const termsOfService = [
    {
        title: 'Terms',
        description:
            'By accessing this Website, accessible from teamhydra.dev, our service URLs and use of our Discord bots, you are agreeing to be bound by these service Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you should stop using our services, and using our bots as using them is considered agreement to these terms.',
    },
    {
        title: 'Use License',
        description:
            'Permission is granted to use our services or bots for personal, or commercial use. This is the grant of a license, not a transfer of title, and under this license you may not:\n\n• modify or copy the materials, outside of service configuration;\n• use the materials for any commercial purpose or for any public display;\n• attempt to reverse engineer any software contained on Team Hydra\'s network or services;\n• remove any copyright or other proprietary notations from the materials; or\n• transferring the materials to another person or "mirror" the materials on any other server or service.\n\nThis will let Team Hydra terminate this license upon violations of any of these restrictions. Upon termination, your viewing right and usage will also be terminated will be blocked from any services and / or materials in your possession whether it is printed or electronic format.',
    },
    {
        title: 'Disclaimer',
        description:
            'All the materials on Team Hydra\'s Website\'s, bots, and services are provided "as is". Team Hydra makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Team Hydra does not make any representations concerning the accuracy or reliability of the use of the materials across our websites, services, and bots, or otherwise relating to such materials or any sites linked to our websites.',
    },
    {
        title: 'Limitations',
        description:
            'Team Hydra or its suppliers will not be held accountable for any damages that will arise with the use or inability to use the materials across our network, even if Team Hydra or an authorize representative of our services have been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.',
    },
    {
        title: 'Revisions and Errata',
        description:
            "The materials appearing on Team Hydra's services, bots, and websites may include technical, typographical, or photographic errors. Team Hydra will not promise that any of the materials across our network are accurate, complete, or current. Team Hydra may change the materials contained within at any time without notice. Team Hydra does not make any commitment to update the materials or services.",
    },
    {
        title: 'Links',
        description:
            "Team Hydra has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by Team Hydra of the site. The use of any linked website is at the user's own risk.",
    },
    {
        title: 'Site Terms of Use Modifications',
        description:
            "Team Hydra may revise these Terms of Use for it's bots, services, and websites, at any time without prior notice. By using any of our services, etc., you are agreeing to be bound by the current version of these Terms and Conditions of Use.",
    },
    {
        title: 'Your Privacy',
        description: 'Please read our Privacy Policy.',
    },
    {
        title: 'Governing Law',
        description:
            "Any claim related to Team Hydra's Website shall be governed by the laws of Canada without regards to its conflict of law provisions.",
    },
];
export const privacyPolicy = '';
