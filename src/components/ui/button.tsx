'use client'

import React, {useState} from 'react';

const Button = ({title, state} : {title: any, state: any}) => {
    const [buttonState, setButtonState] = useState(state)

    const handleMouseEnter = () => {
        if (buttonState === 'enable') {
            setButtonState('hover');
        }
    };

    const handleMouseLeave = () => {
        if (buttonState === 'hover') {
            setButtonState('enable');
        }
    };

    const handleMouseDown = () => {
        if (buttonState === 'enable') {
            setButtonState('active');
        }
    };

    const handleMouseUp = () => {
        if (buttonState === 'active') {
            setButtonState('enable');
        }
    };

    const handleDisable = () => {
        setButtonState('disable');
    };

    return (
        <div>
           {/* <button className="flex bg-primary rounded-2xl text-gray pt-2 pb-2 pl-12 pr-12">
                {title}
            </button>*/}


            <button
                className={`flex rounded-2xl text-gray pt-2 pb-2 pl-12 pr-12
                 ${buttonState === 'enable' ? 'bg-orange-400' :
                    buttonState === 'disable' ? 'bg-orange-400 opacity-40' :
                        buttonState === 'hover' ? 'bg-orange-400' :
                            buttonState === 'active' ? 'bg-orange-500' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onClick={handleDisable} // Клик на отключение кнопки
            >
                {buttonState === 'enable' ? title :
                    buttonState === 'disable' ? 'Кнопка отключена' :
                        buttonState === 'hover' ? 'Наведение' :
                            buttonState === 'active' ? 'Кнопка нажата' : ''}
            </button>

        </div>


    );
};

export default Button;