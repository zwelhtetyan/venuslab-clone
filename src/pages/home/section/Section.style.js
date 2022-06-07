import styled from 'styled-components';
import { MainWrapper } from '../../../UI/MainWrapper';

export const HomeSectionContainer = styled.section`
    height: 100vh;
    overflow: hidden;
    background-color: ${({ bgColor }) => bgColor};
    display: flex;
    align-items: center;
    clip-path: ${({ clipPath }) => clipPath.XL};
    margin-top: -62px;

    @media screen and (max-width: 1000px) {
        height: auto;
        padding: 5rem 0;

        clip-path: ${({ clipPath }) => clipPath.MD};
        margin-top: -50px;
    }

    @media screen and (max-width: 768px) {
        margin-top: -60px;
    }

    @media screen and (max-width: 480px) {
        padding: 3rem 0 2rem 0;
    }
`;

export const SectionWrapper = styled(MainWrapper)`
    display: flex;
    flex-direction: ${({ imgFirst }) => (imgFirst ? 'row-reverse' : 'row')};

    @media screen and (max-width: 1000px) {
        flex-direction: column-reverse;
    }
`;

export const ContentWrapper = styled.div`
    color: ${({ color }) => color};
    font-size: 16px;
    flex: 1;
`;

export const Logo = styled.img``;

export const Title = styled.h1`
    font-size: 3.5rem;

    @media screen and (max-width: 480px) {
        font-size: 3rem;
        line-height: 1;
    }
`;

export const SubTitle = styled.small`
    letter-spacing: 2px;
    color: ${({ subtitleColor }) => subtitleColor};
`;

export const Para = styled.p`
    margin: 1rem 0 1.7rem 0;
    line-height: 1.4em;
    word-spacing: 2px;
`;

export const AnimateItemWrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media screen and (max-width: 1000px) {
        margin-bottom: 5rem;
    }
`;

export const AnimateCircle = styled.div`
    width: 330px;
    height: 330px;
    border-radius: 100%;
    background-image: ${({ circleBg }) => circleBg};
    transform: scale(0);

    @media screen and (max-width: 480px) {
        width: 200px;
        height: 200px;
    }
`;

export const AnimateImg = styled.div`
    width: 500px;
    height: 500px;
    background-image: url(${({ animatedImg }) => animatedImg});
    background-position: center;
    background-size: 90%;
    background-repeat: no-repeat;
    position: absolute;

    ${({ imgFirst }) =>
        !imgFirst
            ? `
            top: 100%;
            left: 100%;
        `
            : `
            right: 100%;
            top: 100%;
        `}

    @media screen and (max-width: 480px) {
        width: 300px;
        height: 300px;
    }
`;
