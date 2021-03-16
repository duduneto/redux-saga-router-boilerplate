import React from 'react';

// import { Container } from './styles';

function Input({ label, className }) {
    return (
        <div className={`center-content ${className}`}>
            <div className="label-float">
                <input type="text" placeholder=" " />
                {
                    label &&
                    <label>{label}</label>
                }
            </div>
        </div>
    );
}

export default Input;