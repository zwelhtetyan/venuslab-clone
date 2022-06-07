import styled from 'styled-components';

export const Container = styled.footer`
    padding: 3rem;
    text-align: center;
    color: #333;
    font-size: 15px;
    line-height: 1.4em;

    & > p:last-child {
        margin-top: 1rem;
    }

    @media screen and (max-width: 480px) {
        padding: 2rem 1rem;
        font-size: 14px;
    }
`;

export const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
`;

export const SocialIcon = styled.img`
    width: 30px;
    height: 30px;
    opacity: 0.6;
    margin: 0 1rem;
    cursor: pointer;
`;

export const Dot = styled.span`
    width: 4px;
    height: 4px;
    background: #666;
    display: inline-block;
    border-radius: 50%;
    margin: 0 5px;
`;

export const Text = styled.p``;

export const Br = styled.br`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
    }
`;
