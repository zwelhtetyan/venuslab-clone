import styled from 'styled-components';

export const Container = styled.section`
    background-image: url('https://venuslab.co/images/home-banner.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    clip-path: polygon(0 4.5%, 100% 0, 100% 100%, 0 100%);
    color: var(--white);
    margin-top: -63px;
    padding: 2rem 0 0 0;

    @media screen and (max-width: 768px) {
        clip-path: polygon(0 2.6%, 100% 0, 100% 100%, 0 100%);
    }

    @media screen and (max-width: 480px) {
        margin-top: -66px;
    }
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    color: var(--primary);
    text-transform: uppercase;
    line-height: 1;
    margin-bottom: 0.5rem;
`;

export const Label = styled.p`
    text-align: center;
    font-size: 5rem;
    color: var(--primary);

    @media screen and (max-width: 480px) {
        font-size: 4rem;
    }
`;

export const Desc = styled.p`
    text-align: center;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`;
