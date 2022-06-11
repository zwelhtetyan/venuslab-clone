import React from 'react';
import { Desc, Title, Img, Popup } from './style';

const PortfolioCard = ({ img, title, desc }) => {
    return (
        <>
            <Img img={img} />
            <Popup>
                <Title>{title}</Title>
                <Desc>{desc}</Desc>
            </Popup>
        </>
    );
};

export default PortfolioCard;
