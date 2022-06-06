import styled from 'styled-components';

export const SecondaryButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eee;
    height: 42px;
    border-radius: 42px;
    padding: 0px 30px;
    color: #111;
    text-decoration: none;
    font-size: 0.85em;
    letter-spacing: 2px;
    transition: var(--transition3s);
    margin-left: auto;

    &:hover img {
        transform: translateX(5px);
    }

    &:hover {
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 5px 5px rgba(0, 0, 0, 0.1);
    }
`;

export const Img = styled.img`
    width: 16px;
    height: 16px;
    margin: 4px 0 0 5px;
    transition: var(--transition3s);
`;
