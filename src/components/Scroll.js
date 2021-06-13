import React from 'react';

export const Scroll = (props) => {
    return (
        <div style={{overflow:'scroll', border: '1px solid pink', height: '500px'}}>
            {props.children}
        </div>
    );
}