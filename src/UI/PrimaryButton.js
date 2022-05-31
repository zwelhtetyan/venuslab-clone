import styled from 'styled-components';

export const PrimaryButton = styled.button`
    width: ${({ size }) => size.width + 'px'};
    height: ${({ size }) => size.height + 'px'};
    text-transform: uppercase;
    border-radius: 42px;
    background-color: var(--primary);
    color: var(--text-dark);
    font-size: 1rem;
    font-weight: 300;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
        content: '';
        width: ${({ size }) => size.width - 4 + 'px'};
        height: ${({ size }) => size.height - 4 + 'px'};
        border: 3px solid var(--primary);
        background-color: var(--white);
        position: absolute;
        border-radius: 42px;
        transform: scale(0);
        transition: var(--transition3s);
    }

    &:hover::after {
        transform: scale(1);
    }
`;

export const ButtonText = styled.span`
    font-size: 15px;
    position: absolute;
    z-index: 1;
`;
