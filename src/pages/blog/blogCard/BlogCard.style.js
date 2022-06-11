import styled from 'styled-components';

export const Container = styled.div`
    width: calc(100% / 3 - 1rem);
    margin: 2rem 0.5rem;

    &:hover {
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    }

    @media screen and (max-width: 1000px) {
        width: calc(100% / 2 - 1rem);
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 1rem 0;
    }
`;

export const CardHeader = styled.div`
    width: 100%;
    height: 230px;
    position: relative;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
`;

export const Date = styled.div`
    width: 80px;
    height: 80px;
    background-color: var(--primary);
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const CardBody = styled.div``;

export const Author = styled.div`
    padding: 0.5rem;
    display: flex;
    align-items: center;
`;

export const Line = styled.div`
    width: 40%;
    height: 1px;
    background-color: var(--primary);
`;

export const AuthorName = styled.p`
    margin-left: 10px;
    color: #333;
`;

export const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    line-height: 1.4em;
    margin-top: 0.5rem;
    padding: 0 0.5rem;
`;
