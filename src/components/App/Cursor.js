import React, { useEffect, useRef, useState } from 'react';
import './Cursor.scss';
import CursorAnimation from './CursorAnimation';

const Cursor = () => {

    const cursor = useRef(null);

    useEffect(() => {
        new CursorAnimation(cursor.current);
    }, []);


    return (
        <div className="cursor" ref={cursor}>
        </div>
    )
};

export default Cursor;