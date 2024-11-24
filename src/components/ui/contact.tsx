import React from 'react';
import Button from "@/components/ui/button";

const Contact = () => {
    return (
        <div className='flex flex-col px-20 py-24 justify-center items-center'>
            <div className='flex flex-col justify-center items-center gap-12'>
                <div className='flex flex-col justify-center items-center '>
                    <h1 className='font-bold text-6xl text-gray600 mb-4'>Contact Capibarara</h1>
                    <h3 className='text-xl text-gray600'>Do you wanna chat with Capibarara? Then send the request!</h3>
                </div>
                <form className='flex flex-col bg-gray200 rounded-xl shabow-lg ' action="">
                    <div className='flex flex-col justify-center items-center gap-y-6 mx-12 mt-12'>
                        <div className='flex flex-col gap-y-0.5'>
                            <label htmlFor="Subject">Subject*</label>
                            <input className='border rounded-xl w-[450px] h-12' type="text"/>
                        </div>

                        <div className='flex flex-col gap-y-0.5'>
                            <label htmlFor="Name">Name*</label>
                            <input className='border rounded-xl w-[450px] h-12' type="text"/>
                        </div>

                        <div className='flex flex-col gap-y-0.5'>
                            <label htmlFor="Phone">Phone*</label>
                            <input className='border rounded-xl w-[450px] h-12' type="tel"/>
                        </div>
                    </div>
                    <div className='flex flex-col justify-start items-start gap-y-0.5 my-6 mx-12'>
                        <label htmlFor="Description">Description*</label>
                        <textarea className='border rounded-xl w-[450px] min-h-40' name="" id="" ></textarea>
                    </div>
                    <Button title='Send it!' state='disable'/>

                </form>
            </div>
        </div>
    );
};

export default Contact;