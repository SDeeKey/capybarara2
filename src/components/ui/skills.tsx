import React from 'react';

const Skills = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full pt-24 pb-24 pl-20 pr-20 relative">
            <div className='flex flex-col justify-center items-center w-full gap-y-12 '>
                <div className='flex flex-col justify-center items-center w-full '>
                    <h1 className='font-bold text-6xl tracking-tighter text-gray600 mb-4 '>Skills</h1>
                    <h3 className='font-normal text-xl leading-7'>The skills, tools and technologies Capybarara really good
                        at:</h3>
                </div>
                <div className='flex flex-row justify-center items-center w-full gap-x-14'>
                    <div className='flex flex-col justify-center items-center w-[102px] h-[100px] gap-y-2 '>
                        <img src="jsIcon.svg" alt="jsIcon"/>
                        <h3 className='text-lg'>Javascript</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[102px] h-[100px] gap-y-2 '>
                        <img src="tsIcon.svg" alt="tsIcon"/>
                        <h3 className='text-lg'>Typescript</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[102px] h-[100px] gap-y-2 '>
                        <img src="reactIcon.svg" alt="reactIcon"/>
                        <h3 className='text-lg'>React</h3>
                    </div>

                    <div className='flex flex-col justify-center items-center w-[102px] h-[100px] gap-y-2 '>
                        <img src="nextIcon.svg" alt="nextIcon"/>
                        <h3 className='text-lg'>Next</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[102px] h-[100px] gap-y-2 '>
                        <img src="nodeIcon.svg" alt="nodeIcon"/>
                        <h3 className='text-lg'>Node</h3>
                    </div>
                </div>
            </div>
            <img className='flex absolute right-0 bottom-0' src="orange.svg" alt="orange"/>
        </div>
    );
};

export default Skills;