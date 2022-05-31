import styled from 'styled-components';

export const Container = styled.ul`
    display: flex;
    align-items: center;
    text-transform: uppercase;
`;

export const MenuItem = styled.li`
    margin-left: 2rem;

    & > a {
        position: relative;

        &::after {
            content: '';
            width: 0%;
            height: 1px;
            background-color: var(--white);
            position: absolute;
            bottom: 0;
            left: 50%;
            transition: var(--transition7s);
        }

        &:hover::after {
            width: 100%;
            left: 0;
        }

        @media screen and (max-width: 1000px) {
            &:hover::after {
                width: 0;
            }
        }
    }
`;
