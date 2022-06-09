import styled from 'styled-components';

export const Container = styled.div``;

export const Action = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--primary);
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 1;
    background-image: url(${({ icon }) => icon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80%;
`;
