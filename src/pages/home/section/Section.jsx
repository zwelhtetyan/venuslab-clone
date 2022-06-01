import React from 'react';
import { useInView } from 'react-intersection-observer';
import MoreBtn from '../../../components/more/More';
import { MainWrapper } from '../../../UI/MainWrapper';
import {
    AnimateItemWrapper,
    ContentWrapper,
    HomeSectionContainer,
} from './Section.style';

const Section = ({
    imgFirst,
    bgColor,
    color,
    logo,
    title,
    subtitle,
    para,
    circleBg,
    animatedImg,
}) => {
    const clipPath = !imgFirst
        ? 'polygon(0 9%, 100% 0, 100% 100%, 0 91%)'
        : 'polygon(0 0, 100% 9%, 100% 91%, 0 100%)';

    const { ref, entry } = useInView({
        threshold: 1,
    });

    return (
        <HomeSectionContainer clipPath={clipPath} bgColor={bgColor}>
            <MainWrapper>
                <ContentWrapper></ContentWrapper>
                <AnimateItemWrapper></AnimateItemWrapper>
            </MainWrapper>
        </HomeSectionContainer>
    );
};

export default Section;
