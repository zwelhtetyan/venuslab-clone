import styled from 'styled-components';

export const Menu = styled.button`
    display: none;
    width: 23px;
    height: 23px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const Line1 = styled.div`
    width: 100%;
    height: 2px;
    background-color: var(--white);
    transition: var(--transition2s);
    transform: ${({ animate }) => animate};

    position: absolute;
    top: 4px;
`;

export const Line2 = styled(Line1)`
    ${({ animate }) => animate};
    transition: var(--transition5s);

    top: unset;
`;

export const Line3 = styled(Line1)`
    transform: ${({ animate }) => animate};
    top: unset;
    bottom: 5px;
`;
