import styled from 'styled-components';

export const OurCaseStudiesContainer = styled.div``;

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: 300;
    letter-spacing: 1px;
    word-spacing: 2px;
    margin: -10px 0 2rem 0;
`;

export const CaseStudiesWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const CaseStudy = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 50%;
    padding: 1rem;
    height: 300px;

    @media screen and (max-width: 1000px) {
        width: 100%;
        height: auto;
        margin-bottom: 2rem;
    }
`;

export const CaseStudyLeft = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    .circle {
        transition: var(--transition3s);
    }
    .img {
        transition: var(--transition3s);
    }

    @media screen and (max-width: 1000px) {
        width: unset;
    }

    &:hover {
        .circle {
            transform: scale(0.95);
        }
        .img {
            transform: scale(1.05);
        }
    }
`;

export const Circle = styled.div`
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background-image: ${({ circleBg }) => circleBg};

    @media screen and (max-width: 768px) {
        width: 150px;
        height: 150px;
    }

    @media screen and (max-width: 480px) {
        width: 90px;
        height: 90px;
    }
`;

export const Img = styled.img`
    width: 230px;
    height: 230px;
    position: absolute;

    @media screen and (max-width: 768px) {
        width: 200px;
        height: 200px;
    }

    @media screen and (max-width: 480px) {
        width: 120px;
        height: 120px;
    }
`;

export const CaseStudyRight = styled.div`
    width: 50%;
    margin-left: 2rem;

    @media screen and (max-width: 1000px) {
        width: unset;
    }
`;

export const Logo = styled.img`
    width: ${({ logoWidth }) => logoWidth};
`;

export const CaseStudyTitle = styled.h1`
    font-size: 2.5rem;
    word-spacing: 2px;

    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.7rem;
    }
`;

export const CaseStudySubTitle = styled.p`
    letter-spacing: 2px;
    color: #333;
    margin-bottom: 1rem;
`;
