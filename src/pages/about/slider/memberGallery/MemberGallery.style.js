import styled from 'styled-components';

export const GalleryContainer = styled.div`
    height: 550px;
    display: flex;
    width: 2792px;

    @media screen and (max-width: 480px) {
        height: 500px;
        width: 2476.92px;
    }
`;

export const ImgContainer = styled.div`
    width: 260px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 0 1.2rem 0 0;

    @media screen and (max-width: 480px) {
        width: 230px;
    }
`;

export const ImgLarge = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 1.2rem;
    background-image: url(${({ img }) => img});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const ImgSmall1 = styled.div`
    width: 100%;
    height: calc(50% - 0.6rem);
    background-image: url(${({ img }) => img});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const ImgSmall2 = styled(ImgSmall1)`
    background-image: url(${({ img }) => img});
    margin-top: 1.2rem;
`;
