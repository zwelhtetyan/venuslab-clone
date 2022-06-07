import styled from 'styled-components';

export const Container = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem 3rem;

    @media screen and (max-width: 1000px) {
        padding: 1rem;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }

    @media screen and (max-width: 480px) {
        padding: 0 0 1.5rem 0;
    }
`;

export const Img = styled.div`
    width: 240px;
    height: 200px;
    background-image: url(${({ img }) => img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
`;

export const Title = styled.h1`
    font-size: 1.8rem;
    margin: 0.8rem 0;
`;

export const Para = styled.p`
    font-size: 17px;
    line-height: 1.4em;
    color: #eee;
    font-weight: 300;

    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`;
