import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: ${({ w }) => `calc(${w} - 2rem)`};
    padding: 1rem;
    margin: 1rem;

    @media screen and (max-width: 480px) {
        padding: 0.2rem;
    }
`;

export const Img = styled.img``;

export const Addr = styled.p`
    @media screen and (max-width: 480px) {
        font-size: 15px;
    }
`;
