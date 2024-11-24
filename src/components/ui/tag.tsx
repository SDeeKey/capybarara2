import React from 'react';

const Tag = ({title}: {title: any}) => {
    return (
        <div className='flex items-center justify-center bg-gray200 rounded-xl'>
            <h3 className='font-medium text-sm leading-5 mx-5 my-1 text-gray600'>{title}</h3>
        </div>
    );
};

export default Tag;