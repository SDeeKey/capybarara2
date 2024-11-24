import React from 'react';
import LinkIcon from "@/components/ui/linkIcon";
import Tag from "@/components/ui/tag";

const Work = () => {
    return (
        <div className='flex flex-col items-center justify-center px-20 py-24 gap-12 border'>
            <div className='flex flex-col items-center justify-center mb-12'>
                <h1 className='font-bold text-6xl tracking-tighter text-gray600 leading-72 mb-4'>Work</h1>
                <h3 className='font-normal text-xl leading-7'>Some of the noteworthy projects Capibarara have
                    built:</h3>
            </div>


            <div className='flex flex-row items-start justify-center gap-y-12 shadow-md rounded-xl mx-16'>
                <div
                    className='flex flex-col items-center justify-center p-12 border border-gray100 bg-gray50 rounded-bl-xl rounded-tl-xl'>
                    <img className='shadow-lg' src="capybaraFacts.png" alt="capybaraFacts"/>
                </div>
                <div className='flex flex-col items-start justify-center p-12 gap-y-6 '>
                    <h1 className='font-semibold text-xl leading-7 text-gray900'>Capybara Facts</h1>
                    <h3 className='leading-6 text-gray600 text-wrap max-w-[480px]'>This site provides detailed and
                        accurate information about capybaras. It covers various topics
                        such as their habitat, physical characteristics, behavior, diet, and lifecycle. It may also
                        include interesting facts and trivia about capybaras. The site aims to educate visitors who are
                        interested in learning more about these unique creatures.</h3>
                    <div className='flex flex-row gap-x-2 gap-y-2 max-w-[480px] flex-wrap '>
                        <Tag title="Next.js"/>
                        <Tag title="Typescript"/>
                        <Tag title="PostgreSQL"/>
                        <Tag title="Tailwindcss"/>
                        <Tag title="Figma"/>
                        <Tag title="Storybook"/>
                        <Tag title="Git"/>
                    </div>
                    <LinkIcon link='https://capybarafacts.com'/>

                </div>
            </div>


            <div className='flex flex-row items-start justify-center gap-y-12 shadow-md rounded-xl mx-16'>

                <div className='flex flex-col items-start justify-center p-12 gap-y-6 '>
                    <h1 className='font-semibold text-xl leading-7 text-gray900'>CapybaraTips</h1>
                    <h3 className='leading-6 text-gray600 text-wrap max-w-[480px]'>This website is dedicated to
                        providing practical tips and guides on how to care for capybaras as pets. It covers essential
                        topics such as feeding and nutrition, housing and environment setup, health and hygiene,
                        socialization, and training. The site may also include testimonials or experiences shared by
                        capybara owners or experts. It aims to assist individuals who are considering or already own
                        capybaras as pets.</h3>
                    <div className='flex flex-row gap-x-2 gap-y-2 max-w-[480px] flex-wrap '>
                        <Tag title="Next.js"/>
                        <Tag title="Typescript"/>
                        <Tag title="PostgreSQL"/>
                        <Tag title="Tailwindcss"/>
                        <Tag title="Figma"/>
                        <Tag title="Storybook"/>
                        <Tag title="Git"/>
                    </div>
                    <LinkIcon link='https://capybaratips.com'/>
                </div>
                <div
                    className='flex flex-col items-center justify-center p-12 border border-gray100 bg-gray50 rounded-br-xl rounded-tr-xl'>
                    <img className='shadow-lg' src="capybaraTips.png" alt="capybaraTips"/>
                </div>
            </div>


            <div className='flex flex-row items-start justify-center gap-y-12 shadow-md rounded-xl mx-16'>
                <div
                    className='flex flex-col items-center justify-center p-12 border border-gray100 bg-gray50 rounded-bl-xl rounded-tl-xl'>
                    <img className='shadow-lg' src="capybaraFacts.png" alt="capybaraFacts"/>
                </div>
                <div className='flex flex-col items-start justify-center p-12 gap-y-6 '>
                    <h1 className='font-semibold text-xl leading-7 text-gray900'>What Is Capybara</h1>
                    <h3 className='leading-6 text-gray600 text-wrap max-w-[480px]'>This site serves as a comprehensive
                        introduction to capybaras for those who are unfamiliar with the species. It covers basic
                        information, such as the capybara's classification, origin, and distinct features. It may
                        include images or illustrations to help readers visualize the animal. The site's main objective
                        is to provide a general overview for individuals seeking introductory knowledge about
                        capybaras.</h3>
                    <div className='flex flex-row gap-x-2 gap-y-2 max-w-[480px] flex-wrap '>
                        <Tag title="React"/>
                        <Tag title="Typescript"/>
                        <Tag title="PostgreSQL"/>
                        <Tag title="Tailwindcss"/>
                        <Tag title="Figma"/>
                        <Tag title="Storybook"/>
                        <Tag title="Git"/>
                    </div>
                    <LinkIcon link='https://whatiscapybara.com'/>

                </div>
            </div>
        </div>
    );
};

export default Work;