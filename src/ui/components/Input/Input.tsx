import React from 'react';

const Input = (props:any) => {
    return (
        <input onChange={(event)=> props.setValue(event.target.value)}
               value={props.value}
               type={props.type}
               placeholder={props.placeholder}
               {...props}
        />
    );
};

export default Input;