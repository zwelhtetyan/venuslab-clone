import React from 'react';
import Hero from './hero/Hero';
import HomeServices from './home-services/HomeServices';
import Section from './section/Section';
import sectionData from './section/section-data';

const Home = () => {
    return (
        <>
            <Hero />
            <Section {...sectionData.inHouse} imgFirst={false} />
            <Section {...sectionData.mdyRum} imgFirst={true} />
            <Section {...sectionData.meePyaTike} imgFirst={false} />
            <Section {...sectionData.mApn} imgFirst={true} />
            <HomeServices />
        </>
    );
};

export default Home;
