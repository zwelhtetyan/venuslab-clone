import React from 'react';
import { Addr, Container, Img } from './AddressCard.style';

const AddressCard = ({ src, addr, w }) => {
    return (
        <Container w={w}>
            <Img src={src} />
            <Addr>{addr}</Addr>
        </Container>
    );
};

export default AddressCard;
