import styled from 'styled-components';

export const LoadingContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    display: ${({ display }) => display};
    align-items: center;
    justify-content: center;
    background-color: var(--black);
    z-index: 99;
    transition: var(--transition7s);
    opacity: ${({ opacity }) => opacity};
`;

export const Wrapper = styled.div`
    width: 550px;
    height: 350px;
    display: flex;
    position: relative;
`;

export const Img = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

export const HelloImg = styled.div`
    background-image: url('https://venuslab.co/images/hello.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    width: 90%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
`;

export const LoadingImg = styled(HelloImg)`
    background-image: url('https://venuslab.co/images/loading.png');
    width: 71%;
    top: 20%;
    z-index: -1;
    animation: animateLoadingText 1s linear infinite alternate;
    @media screen and (max-width: 480px) {
        top: 30%;
    }

    @keyframes animateLoadingText {
        to {
            opacity: 0.3;
        }
    }
`;

export const Precent = styled.p`
    font-size: 4rem;
    margin-left: -3rem;
    color: var(--primary);
    font-weight: bold;
    margin-top: 55px;
    width: 150px;
    overflow: hidden;
    font-family: Arial, Helvetica, sans-serif;

    @media screen and (max-width: 480px) {
        width: 130px;
        font-size: 3rem;
        margin-left: -2rem;
        color: var(--primary);
        font-weight: bold;
        margin-top: 75px;
    }
`;
