import { useHandleMenu } from '../../../context/ContextWrapper';

import {
    Container,
    HeroWrapper,
    NormalText,
    SmallText,
    StrongText,
} from './Hero.style';

const Hero = () => {
    const { isLoading } = useHandleMenu();

    return (
        <Container>
            <HeroWrapper isLoading={isLoading}>
                <SmallText>Idea to</SmallText>
                <StrongText>Impact</StrongText>
                <NormalText>Risk-free mobile and web development</NormalText>
            </HeroWrapper>
        </Container>
    );
};

export default Hero;
