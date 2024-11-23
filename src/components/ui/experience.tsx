import React from 'react';

const Experience = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-gray pt-24 pb-24 pl-20 pr-20 relative">
            <div>
                <div className='flex flex-col items-center justify-center mb-12'>
                    <h1 className='font-bold text-6xl text-primary mb-4'>Experience</h1>
                    <h3 className='font-normal text-xl leading-7'>Here is a quick summary of Capibarara most recent
                        experiences:</h3>
                </div>
                <div className='grid grid-template-areas'>
                    <div className='grid col-start-1 row-start-3 row-end-1 bg-white rounded-xl'>
                        <h3 className='font-normal text-base leading-6 text-gray950 pt-4 pb-4 pl-8 pr-8'>May 2020 -
                            Present</h3>
                        <h3 className='font-normal text-base leading-6 text-gray500 pt-4 pb-4 pl-8 pr-8'>Dec 2019 - May
                            2020</h3>
                        <h3 className='font-normal text-base leading-6 text-gray500 pt-4 pb-4 pl-8 pr-8'>May 2019 - Dec
                            2019</h3>
                    </div>
                    <div className=' p-8 bg-white rounded-xl'>
                        <div className='flex flex-row items-start gap-x-12'>
                            <img src="WsLogo.svg" alt="WsLogo"/>
                            <div className='grid grid-cols-1 row-start-1 row-end-1'>
                                <h2 className='font-semibold text-xl leading-7 mb-4'>Middle Frontend Developer</h2>
                                <ol className='font-normal text-base leading-6 text-gray600 list-disc text-wrap'>
                                    <li className='mb-4'>Collaborating with senior developers to enhance skills and
                                        learn new technologies
                                    </li>
                                    <li className='mb-4'>Mentoring and providing guidance to junior frontend
                                        developers
                                    </li>
                                    <li className='mb-4'>Optimizing the performance of web applications</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <img className='absolute bottom-0 left-0' src="leftOrange.png" alt="leftOrange"/>
            <img className='absolute bottom-0 right-[280px]' src="middleOrange.png" alt="middleOrange"/>
            <img className='absolute bottom-0 right-0' src="rightOrange.png" alt="rightOrange"/>
        </div>
    );
};

export default Experience;