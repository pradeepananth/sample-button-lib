import React from 'react';

interface IButtonProps {
	text: string;
}

export const Button: React.FC<IButtonProps>  = ({ text }) => {
    return (
        <button type="button">
            {text}
        </button>
    )
};