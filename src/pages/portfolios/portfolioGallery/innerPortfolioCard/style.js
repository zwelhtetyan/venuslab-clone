import styled from 'styled-components';

export const Popup = styled.div`
    position: absolute;
    z-index: 1;
    background-color: #fff9;
    width: 100%;
    padding: 30px 20px;
    left: 0;
    bottom: 0;
    backdrop-filter: blur(4px);
    transition: var(--transition5s);
    transform: translateY(10px);
    opacity: 0;
`;

export const Img = styled.div`
    width: 100%;
    height: 100%;
    background: url(${({ img }) => img}) no-repeat center;
    background-size: cover;
    position: absolute;
    z-index: 0;
    transition: var(--transition5s);
    filter: brightness(0.6);
    cursor: pointer;
`;

export const Title = styled.h1`
    font-weight: 400;
`;

export const Desc = styled.p`
    letter-spacing: 1px;
    font-size: 14px;
`;
