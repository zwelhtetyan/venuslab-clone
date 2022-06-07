import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import MoreBtn from '../../../components/moreBtn/More';
import {
    AnimateCircle,
    AnimateImg,
    AnimateItemWrapper,
    ContentWrapper,
    HomeSectionContainer,
    Logo,
    Para,
    SectionWrapper,
    SubTitle,
    Title,
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
    //conditional clipPath
    const clipPath = {
        XL: imgFirst
            ? 'polygon(0 0, 100% 9%, 100% 91%, 0 100%)'
            : 'polygon(0 9%, 100% 0, 100% 100%, 0 91%)',
        MD: imgFirst
            ? 'polygon(0 0,100% 4.5%,100% 95.5%,0 100%)'
            : 'polygon(0 4.5%,100% 0px,100% 100%,0px 95.5%)',
    };

    const { ref, entry } = useInView({
        threshold: [
            0.2, 0.21, 0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29, 0.3,
            0.31, 0.32, 0.33, 0.34, 0.35, 0.36, 0.37, 0.38, 0.39, 0.4, 0.41,
            0.42, 0.43, 0.44, 0.45, 0.46, 0.47, 0.48, 0.49, 0.5, 0.51, 0.52,
            0.53, 0.54, 0.55, 0.56, 0.57, 0.58, 0.59, 0.6, 0.61, 0.62, 0.63,
            0.64, 0.65, 0.66, 0.67, 0.68, 0.69, 0.7, 0.71, 0.72, 0.73, 0.74,
            0.75, 0.76, 0.77, 0.78, 0.79, 0.8, 0.81, 0.82, 0.83, 0.84, 0.85,
            0.86, 0.87, 0.88, 0.89, 0.9, 0.91, 0.92, 0.93, 0.94, 0.95, 0.96,
            0.97, 0.98, 0.99,
        ],
    });

    useEffect(() => {
        if (!entry) return;

        const animateCircle = entry.target.firstElementChild;
        const animateImg = entry.target.lastElementChild;

        const currentY = entry.boundingClientRect.y;
        const currentRatio = entry.intersectionRatio;
        const isIntersecting = entry.isIntersecting;

        let { width, height } = entry.target.getBoundingClientRect();
        let { width: boxW, height: boxH } = animateImg.getBoundingClientRect();

        let tX = (width / 2 + boxW / 2) * currentRatio;
        let tY = (height / 2 + boxH / 2) * currentRatio;

        //animate circle
        animateCircle.style.opacity = currentRatio;
        animateCircle.style.transform = `scale(${currentRatio})`;

        if (currentY < 0 && isIntersecting) {
            animateCircle.style.transform = `scale(1)`;
            animateCircle.style.opacity = '1';

            tX = width / 2 + boxW / 2;
            tY = height / 2 + boxH / 2;
        }

        // animate image
        if (isIntersecting) {
            if (!imgFirst) {
                animateImg.style.transform = `translate(-${tX}px, -${tY}px)`;
            } else {
                animateImg.style.transform = `translate(${tX}px, -${tY}px)`;
            }
        }
    }, [entry, imgFirst]);

    return (
        <HomeSectionContainer clipPath={clipPath} bgColor={bgColor}>
            <SectionWrapper imgFirst={imgFirst}>
                <ContentWrapper color={color}>
                    <Logo src={logo} />
                    <Title>{title}</Title>
                    <SubTitle>{subtitle}</SubTitle>
                    <Para>{para}</Para>
                    <MoreBtn />
                </ContentWrapper>
                <AnimateItemWrapper ref={ref}>
                    <AnimateCircle circleBg={circleBg} />
                    <AnimateImg animatedImg={animatedImg} imgFirst={imgFirst} />
                </AnimateItemWrapper>
            </SectionWrapper>
        </HomeSectionContainer>
    );
};

export default Section;
