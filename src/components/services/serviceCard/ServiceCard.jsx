import React from 'react';
import { Container, Img, Para, Title } from './ServiceCard.style';

const ServiceCard = ({ img, title, para, paraColor }) => {
    return (
        <Container>
            <Img img={img} />
            <Title>{title}</Title>
            <Para paraColor={paraColor}>{para}</Para>
        </Container>
    );
};

export default ServiceCard;
