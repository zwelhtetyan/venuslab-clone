import React from 'react';
import Hero from './hero/Hero';
import Section from './section/Section';
import sectionData from './section-data';

const Home = () => {
    return (
        <>
            <Hero />
            <Section {...sectionData.inHouse} imgFirst={false} />
            <Section {...sectionData.mdyRum} imgFirst={true} />
            <Section {...sectionData.meePyaTike} imgFirst={false} />
            <Section {...sectionData.mApn} imgFirst={true} />
        </>
    );
};

export default Home;
