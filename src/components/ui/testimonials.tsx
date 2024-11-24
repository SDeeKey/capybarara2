import React from 'react';

const Testimonials = () => {
    return (
        <div className='flex px-20 py-24 justify-center items-center bg-gray50 '>
            <div className='flex flex-col justify-center items-center gap-y-12 px-8 '>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='font-bold text-6xl leading-72 tracking-tighter text-primary mb-4'>Testimonials</h1>
                    <h3 className='text-xl leading-7 text-gray600'>Nice things people have said about me:</h3>
                </div>
                <div className='grid grid-cols-7 grid-rows-* gap-8'>

                    <div className='row-span-4 col-span-3 rounded-xl p-8 bg-white shadow-md'>
                        <div className='flex flex-row gap-x-8 justify-start items-center mb-6 '>
                            <div className='flex rounded-full '>
                                <img src="sarah.png" alt="sarah"/>
                            </div>
                            <div className='flex flex-col'>
                                <h3 className='font-semibold text-gray900 text-2xl'>Sarah</h3>
                                <h3 className='text-xl text-gray600'>Frontend Developer</h3>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-gray600'>“I had the opportunity to see a Capibarara at the zoo, and it
                                was
                                such an incredible
                                experience! They are such gentle creatures and so fascinating to watch. Their size and
                                calm
                                nature definitely make them unique among other animal species.”</h1>
                        </div>
                    </div>

                    <div className='col-span-4 rounded-xl p-8  bg-white shadow-md'>
                        <div className='flex flex-row justify-start items-center mb-4'>
                            <h1 className='font-semibold text-xl text-gray900'>Jason&nbsp;</h1>
                            <h1 className='text-sm text-gray600'>&nbsp;/ Manage</h1>
                        </div>
                        <div className='max-h-[156px] '>
                            <h3 className='text-gray600 line-clamp-2'>“I recently read about Capybarara and I must say,
                                they are
                                truly fascinating animals.
                                Their social behavior and close-knit family structures are so interesting, and I love
                                how they live in such harmony with other animals in their habitats. Definitely one of
                                the most underrated animals out there!”</h3>
                        </div>
                    </div>
                    <div className='col-span-2 row-span-3 rounded-xl p-8 bg-white shadow-md'>
                        <div className='flex flex-row justify-start items-center mb-4'>
                            <h1 className='font-semibold text-xl text-gray900'>Emma&nbsp;</h1>
                            <h1 className='text-sm text-gray600'>&nbsp;/ Backend developer</h1>
                        </div>
                        <div className='max-h-[156px] '>
                            <h3 className='text-gray600 line-clamp-2'>“I had the chance to interact with a Capybarara at
                                a wildlife sanctuary, and it was such a memorable experience. They are extremely
                                friendly and affectionate. I was surprised by how intelligent they are, and their level
                                of comfort with humans. I would highly recommend anyone to see them up close!:”</h3>
                        </div>
                    </div>
                    <div className='col-span-2 row-span-3 rounded-xl p-8 bg-white shadow-md'>
                        <div className='flex flex-row justify-start items-center mb-4'>
                            <h1 className='font-semibold text-xl text-gray900'>Megan&nbsp;</h1>
                            <h1 className='text-sm text-gray600'>&nbsp;/ DevOps</h1>
                        </div>
                        <div className='max-h-[156px] '>
                            <h3 className='text-gray600 line-clamp-2'>“As an animal lover, I've always been fascinated
                                by Capybarara. They are super social creatures and thrive in groups. It's amazing how
                                they have adaptations that allow them to live both on land and in water. Their unique
                                appearance and laid-back personality make them the perfect animal to admire!”</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Testimonials;