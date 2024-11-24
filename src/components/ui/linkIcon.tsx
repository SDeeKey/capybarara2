import React from 'react';

const LinkIcon = ({link}: {link: any}) => {
    return (
        <div>
            <a href={link} target='_blank' rel='noopener noreferrer'>
                <div className='flex justify-center items-center w-9 h-9 bg-primary rounded-lg'>
                    <img src="linkIcon.svg" alt="linkIcon"/>
                </div>
            </a>
        </div>

    );
};

export default LinkIcon;