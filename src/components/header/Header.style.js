import styled from 'styled-components';

export const Head = styled.header`
    width: 100%;
    height: 150px;
    background-color: ${({ isScroll, isHome }) =>
        isScroll && isHome ? '#222D' : 'var(--black)'};
    transition: var(--transition5sEI);
    padding: 0 2rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    display: flex;
    align-items: center;
    height: ${({ isScroll }) => isScroll && '80px'};

    @media screen and (max-width: 1000px) {
        align-items: flex-start;
        padding: 0 1rem;
        ${({ menuOpen }) =>
            menuOpen
                ? 'height: 100vh; background-color: var(--black)'
                : 'height: 70px; '};
    }
`;
