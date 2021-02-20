import React, { useEffect, useRef } from 'react';

const PortfolioItem = ({img, index, selected}) => {

    const item = useRef(null);

    useEffect(() => {
        window.addEventListener('mousewheel', () => {
            const { height, top } = item.current.getBoundingClientRect();
            // console.log(height / 2 + top - (selected * (height - 100)));
            if(height / 2 + top - (selected * (height - 100)) <= window.innerHeight / 2){
                console.log(index);
            }
        })
    }, [])

    return (
        <article tabIndex="0" ref={item} style={{backgroundImage: `url(${img})`}}></article>
    )
};

export default PortfolioItem;