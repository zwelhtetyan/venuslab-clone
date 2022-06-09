import React from 'react';
import { Container } from './Services.style';
import ServiceCard from './serviceCard/ServiceCard';

const Services = ({ servicesData, paraColor }) => {
    return (
        <Container>
            {servicesData &&
                servicesData.map((data) => (
                    <ServiceCard
                        key={data.img}
                        {...data}
                        paraColor={paraColor}
                    />
                ))}
        </Container>
    );
};

export default Services;
