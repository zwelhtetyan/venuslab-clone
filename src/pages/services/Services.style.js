import styled from 'styled-components';

export const TextWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 3rem;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: 300;
    letter-spacing: 1px;
    word-spacing: 2px;
    margin: -10px 0 1.5rem 0;
`;

export const Desc = styled.p`
    font-size: 17px;
    letter-spacing: 1px;
    line-height: 1.4em;
    color: #333;
`;
