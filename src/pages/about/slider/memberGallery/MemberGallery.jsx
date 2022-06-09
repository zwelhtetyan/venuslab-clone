import React from 'react';
import {
    GalleryContainer,
    ImgContainer,
    ImgLarge,
    ImgSmall1,
    ImgSmall2,
} from './MemberGallery.style';
import imgData from './memberImgData.json';

const MemberGallery = () => {
    return (
        <GalleryContainer>
            {imgData &&
                imgData.map((img) =>
                    Object.keys(img).length < 2 ? (
                        <ImgContainer key={img['img-lg']}>
                            <ImgLarge img={img['img-lg']} />
                        </ImgContainer>
                    ) : (
                        <ImgContainer key={img['img-sm1']}>
                            <ImgSmall1 img={img['img-sm1']} />
                            <ImgSmall2 img={img['img-sm2']} />
                        </ImgContainer>
                    )
                )}
        </GalleryContainer>
    );
};

export default MemberGallery;
