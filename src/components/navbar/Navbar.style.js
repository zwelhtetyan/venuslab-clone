import styled from 'styled-components';

export const Nav = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 1000px) {
        height: 70px;

        .menu-item-container {
            display: flex;
            overflow: hidden;
            flex-direction: column;
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
            z-index: -1;
            height: 0;
            padding-top: 120px;
            transition: var(--transition5sEI);

            ${({ menuOpen }) => (menuOpen ? 'height: 100%' : 'height: 0px;')};

            li {
                margin: ${({ menuOpen }) => (menuOpen ? `0 0 1.3rem` : '0')};
                font-size: 1.7rem;
                text-transform: capitalize;
                transition: var(--transition7s);
            }

            button {
                width: 100vw;
                border-radius: 0;
                height: 55px;

                &:hover::after {
                    transform: scale(0);
                }
            }

            li:last-child {
                opacity: ${({ menuOpen }) => (menuOpen ? '1' : '0')};
                position: absolute;
                transition: var(--transition7s);
                bottom: 0;
                margin-bottom: 0;
            }
        }

        & > .hamburger-menu {
            display: flex;
        }
    }
`;

export const Logo = styled.img`
    width: 170px;
    transition: var(--transition5sEI);
    transform: translate(0);

    @media screen and (max-width: 1000px) {
        width: 140px;
        transform: ${({ menuOpen }) =>
            menuOpen && 'translate(calc(50vw - 90px), 20px)'};
    }
`;
