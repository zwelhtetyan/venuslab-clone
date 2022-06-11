import React from 'react';
import { PageWrapperCalc } from '../../UI/PageWrapperCalc';
import servicesData from '../home/home-services/services.data.json';
import ServicesContainer from '../../components/services/Services';

import OurCaseStudies from './ourCaseStudies/OurCaseStudies';
import caseStudiesData from './caseStudiesData.json';
import WeStriveToBe from '../../components/weStirveToBe/WeStriveToBe';

const Services = () => {
    return (
        <PageWrapperCalc>
            <WeStriveToBe />
            <ServicesContainer servicesData={servicesData} paraColor='#333' />
            <OurCaseStudies caseStudiesData={caseStudiesData} />
        </PageWrapperCalc>
    );
};

export default Services;
