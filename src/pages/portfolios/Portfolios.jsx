import React from 'react';
import WeStriveToBe from '../../components/weStirveToBe/WeStriveToBe';
import { PageWrapperCalc } from '../../UI/PageWrapperCalc';
import ProtfolioGallery from './portfolioGallery/ProtfolioGallery';

const Portfolios = () => {
    return (
        <PageWrapperCalc>
            <WeStriveToBe />
            <ProtfolioGallery />
        </PageWrapperCalc>
    );
};

export default Portfolios;
