import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 3.5rem;
    font-weight: 300;

    @media screen and (max-width: 480px) {
        font-size: 3rem;
    }
`;

export const BlogCardContainer = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
`;
