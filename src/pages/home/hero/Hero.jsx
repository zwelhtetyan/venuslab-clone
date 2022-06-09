import AnimateWrapper from '../../../UI/AnimateWrapper';
import { MainWrapper } from '../../../UI/MainWrapper';

import { Container, NormalText, SmallText, StrongText } from './Hero.style';

const Hero = () => {
    return (
        <Container>
            <AnimateWrapper delay='0s'>
                <MainWrapper>
                    <SmallText>Idea to</SmallText>
                    <StrongText>Impact</StrongText>
                    <NormalText>
                        Risk-free mobile and web development
                    </NormalText>
                </MainWrapper>
            </AnimateWrapper>
        </Container>
    );
};

export default Hero;
