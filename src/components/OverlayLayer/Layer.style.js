import styled from 'styled-components';

export const OverlayLayer = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    transition: var(--transition5s);
    top: 0;
    left: 0;
    z-index: ${({ isRAQOpen }) => (isRAQOpen ? 10 : -1)};
    background-color: ${({ isRAQOpen }) =>
        isRAQOpen ? '#0004' : 'transparent'};

    /* z-index: 10;
    background: #0004; */
`;
