import React from 'react';
import { Container } from './Services.style';
import ServiceCard from './serviceCard/ServiceCard';

const Services = ({ servicesData }) => {
    return (
        <Container>
            {servicesData &&
                servicesData.map((data) => (
                    <ServiceCard key={data.img} {...data} />
                ))}
        </Container>
    );
};

export default Services;
