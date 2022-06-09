import styled from 'styled-components';

export const BrandCardWrapper = styled.div`
    width: calc(100% / 5 - 1rem);
    height: 110px;
    margin: 0.5rem;
    background-color: transparent;
    perspective: 1000px;
    position: relative;

    &:hover div {
        transform: rotateY(180deg);
        box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);
    }

    @media screen and (max-width: 1000px) {
        width: calc(100% / 3 - 1rem);
    }

    @media screen and (max-width: 768px) {
        width: calc(100% / 2 - 1rem);
    }
`;

export const BrandCardInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 1.5s;
    transform-style: preserve-3d;
`;

export const BrandCardFront = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background-image: url(${({ brand }) => brand});
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #f9f9f9;
    filter: grayscale(100%);
`;

export const BrandCardBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    border-left: 10px solid ${({ borderColor }) => borderColor};
    background: url(${({ brand }) => brand}) no-repeat #f9f9f9;
    background-size: 70px;
    background-position: top left;
`;

export const Title = styled.h1`
    position: absolute;
    right: 5px;
    bottom: 5px;
    font-size: 17px;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: end;
`;
