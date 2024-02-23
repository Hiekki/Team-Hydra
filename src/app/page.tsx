import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { HeroParallax } from '@/components/ui/hero-parallax';
import { Tabs } from '@/components/ui/tabs';

export default function Home() {
    const products = [
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

    const content = [
        { title: 'Jake (JakeyPrime)', description: 'Founder & CEO' },
        { title: 'Freddy (Profit)', description: 'Chief Technical Officer' },
        { title: 'Panther', description: 'Chief Community Coordinator' },
        { title: 'Ghoul', description: 'Head of Staff' },
        { title: 'Manu', description: 'Head of Support' },
        { title: 'Tanner (Sticks)', description: 'Bent Developer' },
        { title: 'Virt', description: 'Documentation Specialist' },
        { title: 'Jamisen (Untuned)', description: 'lil bitch' },
    ];

    const tabs = [
        {
            title: 'AppBot',
            value: 'appbot',
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 font-bold text-white bg-gradient-to-br from-green-500 to-green-700">
                    <h1 className="flex text-xl md:text-4xl pb-10">AppBot</h1>
                    <p className="flex">
                        AppBot is the latest and greatest publicly available Discord bot created fully by Team Hydra. It is a bot that helps
                        you manage all sorts of applications, forms, or anything else you can think of within your community, and keeping
                        both responses and users inside your community instead of sent to an external website. <br />
                        <br /> AppBot lets you collect pretty much any type of data you can think of from your users, obviously user
                        provided, and recall it and manipulate it with some of the latest Discord features, like buttons and ephemeral
                        messages. <br />
                        <br /> AppBot has a premium program that is currently not available to the public but is planned for some of the
                        finer controls of the bot. A website will come soon for AppBot once we release our Dashboard update, but as of now
                        the bot can be fully managed inside of Discord.
                    </p>
                </div>
            ),
        },
    ];

    return (
        <main className="bg-zinc-900 text-white min-h-screen">
            <div className="sm:px-16 px-6 flex justify-center items-center">
                <div className="xl:max-w-[1280px] w-full z-[100]">
                    <Navbar />
                </div>
            </div>
            <HeroParallax products={products} />
            <div className="h-[20rem] md:h-[40rem] [perspective:750px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
                <Tabs tabs={tabs} />
            </div>
            <div className="sm:p-16 p-6 flex justify-center items-start">
                <div className="xl:max-w-[1280px] w-full">
                    <Footer />
                </div>
            </div>
        </main>
    );
}
