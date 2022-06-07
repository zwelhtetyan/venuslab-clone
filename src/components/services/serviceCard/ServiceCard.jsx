import React from 'react';
import { Container, Img, Para, Title } from './ServiceCard.style';

const ServiceCard = ({ img, title, para }) => {
    return (
        <Container>
            <Img img={img} />
            <Title>{title}</Title>
            <Para>{para}</Para>
        </Container>
    );
};

export default ServiceCard;
