'use client';

const SectionTitle = ({ title, footer }: { title: string; footer?: boolean }) => {
    if (!footer) footer = false;
    return (
        <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h1 className="md:text-8xl text-3xl font-bold text-center text-green-600 relative z-20">{title}</h1>
            <div className={`w-[40rem] relative ${footer ? 'h-10' : 'h-40'}`}>
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-green-600 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-green-600 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-green-200 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-green-200 to-transparent h-px w-1/4" />
            </div>
        </div>
    );
};

export default SectionTitle;
