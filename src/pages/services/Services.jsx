import React from 'react';
import { PageWrapperCalc } from '../../UI/PageWrapperCalc';
import servicesData from '../home/home-services/services.data.json';
import ServicesContainer from '../../components/services/Services';
import { Desc, TextWrapper, Title } from './Services.style';
import AnimateWrapper from '../../UI/AnimateWrapper';
import OurCaseStudies from './ourCaseStudies/OurCaseStudies';
import caseStudiesData from './caseStudiesData.json';

const Services = () => {
    return (
        <PageWrapperCalc>
            <TextWrapper>
                <AnimateWrapper delay='0s'>
                    <Title>
                        We strive to be the best and make awsome work…
                    </Title>
                </AnimateWrapper>
                <AnimateWrapper delay='0.01s'>
                    <Desc>
                        It’s our focus, passion, love and commitment on our
                        works that makes us who we are. While we can’t share
                        everything we do with you, here is some of our best
                        work.
                    </Desc>
                </AnimateWrapper>
            </TextWrapper>
            <ServicesContainer servicesData={servicesData} paraColor='#333' />
            <OurCaseStudies caseStudiesData={caseStudiesData} />
        </PageWrapperCalc>
    );
};

export default Services;
