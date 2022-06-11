import React from 'react';
import {
    Container,
    W25,
    W25ImgFirst,
    W25ImgSecond,
    W30,
    W45,
    W45ImgFirst,
    W45ImgSecond,
} from './ProtfolioGallery.style';
import protfolioData from './portfolioData';
import PortfolioCard from './innerPortfolioCard/index';

const ProtfolioGallery = () => {
    const { mdyRum, venusGp, thirdEye, mmAPN, pwalKyan } =
        protfolioData.gallery1;

    const { inHouse, meePyaTike, payToe, mec, mmc } = protfolioData.gallery2;

    return (
        <>
            {/* gallery1 */}
            <Container style={{ marginBottom: '2rem' }}>
                <W30>
                    <PortfolioCard {...mdyRum} />
                </W30>
                <W25>
                    <W25ImgFirst>
                        <PortfolioCard {...venusGp} />
                    </W25ImgFirst>
                    <W25ImgSecond>
                        <PortfolioCard {...thirdEye} />
                    </W25ImgSecond>
                </W25>
                <W45>
                    <W45ImgFirst>
                        <PortfolioCard {...mmAPN} />
                    </W45ImgFirst>
                    <W45ImgSecond>
                        <PortfolioCard {...pwalKyan} />
                    </W45ImgSecond>
                </W45>
            </Container>

            {/* gallery2 */}
            <Container>
                <W45>
                    <W45ImgFirst>
                        <PortfolioCard {...inHouse} />
                    </W45ImgFirst>
                    <W45ImgSecond>
                        <PortfolioCard {...meePyaTike} />
                    </W45ImgSecond>
                </W45>
                <W30 style={{ margin: '0 1rem' }}>
                    <PortfolioCard {...payToe} />
                </W30>
                <W25 style={{ margin: 0 }}>
                    <W25ImgFirst>
                        <PortfolioCard {...mec} />
                    </W25ImgFirst>
                    <W25ImgSecond>
                        <PortfolioCard {...mmc} />
                    </W25ImgSecond>
                </W25>
            </Container>
        </>
    );
};

export default ProtfolioGallery;
