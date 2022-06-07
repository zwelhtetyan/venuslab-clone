import React from 'react';
import {
    Br,
    Container,
    Dot,
    SocialIcon,
    SocialMedia,
    Text,
} from './Footer.style';

const Footer = () => {
    return (
        <Container>
            <SocialMedia>
                <SocialIcon src='https://venuslab.co/icons/social/facebook.svg' />
                <SocialIcon src='https://venuslab.co/icons/social/linkedin.svg' />
            </SocialMedia>
            <Text>
                +959 972 709 001 <Dot /> nwaung@venuslab.co
            </Text>
            <Text>
                No.204, 8th Floor, Tower A, The Leaf Residence, <Br /> Dama
                Thukha Kyaung Lane, Hlaing Township, Yangon.
            </Text>
            <Text>© 2019 VenusLab.</Text>
        </Container>
    );
};

export default Footer;
