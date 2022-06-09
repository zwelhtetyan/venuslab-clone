import React from 'react';
import {
    BrandCardBack,
    BrandCardFront,
    BrandCardInner,
    BrandCardWrapper,
    Title,
} from './BarndCard.style';

const BrandCard = ({ brand, borderColor, title }) => {
    return (
        <BrandCardWrapper>
            <BrandCardInner>
                <BrandCardFront brand={brand} />
                <BrandCardBack brand={brand} borderColor={borderColor}>
                    <Title>{title}</Title>
                </BrandCardBack>
            </BrandCardInner>
        </BrandCardWrapper>
    );
};

export default BrandCard;
