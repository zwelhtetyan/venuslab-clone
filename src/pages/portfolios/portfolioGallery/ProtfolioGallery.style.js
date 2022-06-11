import styled from 'styled-components';

const hover = `&:hover {
    div:first-child {
        transform: scale(1.1);
    }
    div:last-child {
        transform: translateY(0);
        opacity: 1;
    }
}`;

export const Container = styled.div`
    display: flex;
    width: 100%;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        margin: 0.5rem 0 !important;
    }
`;

export const W30 = styled.div`
    width: 30%;
    height: calc(600px + 1rem);
    position: relative;
    overflow: hidden;
    ${hover}

    @media screen and (max-width: 1000px) {
        width: 100%;
        height: 300px;
        margin: 0.5rem 0 !important;
    }
`;

export const W25 = styled.div`
    width: 25%;
    margin: 0 1rem;

    @media screen and (max-width: 1000px) {
        width: 100%;
        display: flex;
        margin: 0;
    }

    @media screen and (max-width: 480px) {
        flex-direction: column;
    }
`;

export const W45 = styled.div`
    width: 45%;

    @media screen and (max-width: 1000px) {
        display: flex;
        width: 100%;
    }

    @media screen and (max-width: 480px) {
        flex-direction: column;
    }
`;

export const W25ImgFirst = styled(W30)`
    width: 100%;
    height: 300px;
    ${hover}
`;

export const W25ImgSecond = styled(W25ImgFirst)`
    margin-top: 1rem;

    @media screen and (max-width: 1000px) {
        margin-left: 1rem !important;
    }

    @media screen and (max-width: 480px) {
        margin: 0.5rem 0 !important;
    }
`;

export const W45ImgFirst = styled(W30)`
    width: 100%;
    height: 400px;
    ${hover}

    @media screen and (max-width: 1000px) {
        height: 300px;
    }
`;

export const W45ImgSecond = styled(W45ImgFirst)`
    height: 200px;
    margin-top: 1rem;

    @media screen and (max-width: 1000px) {
        margin-left: 1rem !important;
        height: 300px;
    }

    @media screen and (max-width: 480px) {
        margin-left: 0 !important;
    }
`;
