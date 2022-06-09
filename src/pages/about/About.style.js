import styled from 'styled-components';

export const AboutWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Left = styled.div`
    width: 45%;
    background-image: url('https://venuslab.co/images/arrow-down.png');
    background-repeat: no-repeat;
    background-size: 60%;
    background-position: center;

    @media screen and (max-width: 1000px) {
        width: 100%;
        background-image: url('');
    }
`;

export const Right = styled.div`
    width: 55%;

    @media screen and (max-width: 1000px) {
        width: 100%;
        background-image: url('https://venuslab.co/images/arrow-down.png');
        background-repeat: no-repeat;
        background-position: bottom right;
        background-size: 30%;
    }
    @media screen and (max-width: 768px) {
        background-size: 40%;
    }
`;

export const LargeTitle = styled.h1`
    font-size: 3.4rem;
    font-weight: 200;
    line-height: 1;
    margin: -3px 0 1.5rem 0;

    @media screen and (max-width: 480px) {
        font-size: 3rem;
    }
`;

export const Title = styled.h2`
    font-size: 23px;
    text-transform: uppercase;
    font-weight: 400;
`;

export const Strong = styled.strong`
    margin: 1rem 0;
    display: block;
    font-size: 17px;
    letter-spacing: 1px;
`;

export const Para = styled.p`
    font-weight: 300;
    font-size: 16px;
    margin: 1rem 0 2rem 0;
`;

export const WhatWeCan = styled.ul`
    margin-left: 20px;
`;

export const Tech = styled.li`
    margin-bottom: 1.3rem;
    font-size: 17px;
    display: flex;
    align-items: center;

    &::before {
        content: '';
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 10px;
        background-image: url('https://venuslab.co/icons/star.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
`;

export const WorkFlowContainer = styled.div`
    display: flex;

    & > div:nth-child(2) {
        padding-top: 7rem;
    }

    @media screen and (max-width: 1000px) {
        flex-direction: column;

        & > div:nth-child(2) {
            padding: 0;
            align-self: flex-end;
        }
    }
`;

export const WorkFlowCard = styled.div`
    width: 33.33%;
    padding: 3rem;
    position: relative;

    @media screen and (max-width: 1000px) {
        width: 50%;
        padding: 0;
    }

    @media screen and (max-width: 480px) {
        width: 80%;
        margin: 1rem 0;
    }
`;

export const WorkFlowCardLogo = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-image: url(${({ logo }) => logo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 70%;
    background-color: #eee;
    margin-bottom: 0.5rem;

    @media screen and (max-width: 480px) {
        width: 70px;
        height: 70px;
    }
`;

export const WorkFlowCardArrow = styled.div`
    width: 80%;
    height: 100px;
    position: absolute;
    background-image: url(${({ arrow }) => arrow});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 80%;
    top: 5rem;
    right: -62px;
    transform: rotate(5deg);

    @media screen and (max-width: 1000px) {
        display: none;
    }
`;

export const WorkFlowCardArrowSmall = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    top: -3rem;
    left: -1rem;
    background: url(${({ arrow }) => arrow}) no-repeat center;
    background-size: cover;
    display: none;

    @media screen and (max-width: 1000px) {
        display: block;
    }

    ${({ isLast }) => isLast && `transform: rotateY(180deg);left: 1rem;`}
`;
