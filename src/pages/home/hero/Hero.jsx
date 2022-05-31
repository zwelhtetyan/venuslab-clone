import React from 'react';
import { MainWrapper } from '../../../UI/MainWrapper';

import { Container, NormalText, SmallText, StrongText } from './Hero.style';

const Hero = () => {
    return (
        <Container>
            <MainWrapper>
                <SmallText>Idea to</SmallText>
                <StrongText>Impact</StrongText>
                <NormalText>Risk-free mobile and web development</NormalText>
            </MainWrapper>
        </Container>
    );
};

export default Hero;
