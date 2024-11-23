import React from 'react';

const Skills = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full pt-24 pb-24 pl-20 pr-20 ">
            <div className='flex flex-col justify-center items-center w-full gap-y-12'>
                <div className='flex flex-col justify-center items-center w-full '>
                    <h1 className='font-bold text-6xl tracking-tighter text-gray600 mb-4 '>Skills</h1>
                    <h3 className='font-normal '>The skills, tools and technologies Capybarara really good
                        at:</h3>
                </div>
                <div className='flex flex-row justify-center items-center w-full gap-x-14'>
                    <div className='flex flex-col justify-center items-center w-[102px] h-[100px] gap-y-2 '>
                        <img src="jsIcon.svg" alt="jsIcon"/>
                        <h3>Javascript</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[102px] h-[100px] gap-y-2 '>
                        <img src="tsIcon.svg" alt="tsIcon"/>
                        <h3>Typescript</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[102px] h-[100px] gap-y-2 '>
                        <img src="reactIcon.svg" alt="reactIcon"/>
                        <h3>React</h3>
                    </div>

                    <div className='flex flex-col justify-center items-center w-[102px] h-[100px] gap-y-2 '>
                        <img src="nextIcon.svg" alt="nextIcon"/>
                        <h3>Next</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[102px] h-[100px] gap-y-2 '>
                        <img src="nodeIcon.svg" alt="nodeIcon"/>
                        <h3>Node</h3>
                    </div>
                </div>
            </div>
            <img className='flex absolute right-0 bottom-0' src="orange.svg" alt="orange"/>
        </div>
    );
};

export default Skills;