import React from 'react';
import BrandCard from './brandCard/BrandCard';
import { Container } from './BrandCardContainer.style';
import brandCardData from './brandCardData.json';

const BrandCardContainer = () => {
    return (
        <Container>
            {brandCardData &&
                brandCardData.map((data) => (
                    <BrandCard {...data} key={data.brand} />
                ))}
        </Container>
    );
};

export default BrandCardContainer;
