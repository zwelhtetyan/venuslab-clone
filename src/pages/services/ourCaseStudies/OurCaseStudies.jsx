import React from 'react';
import MoreBtn from '../../../components/moreBtn/More';
import {
    CaseStudiesWrapper,
    CaseStudy,
    CaseStudyLeft,
    CaseStudyRight,
    CaseStudySubTitle,
    CaseStudyTitle,
    Circle,
    Img,
    Logo,
    OurCaseStudiesContainer,
    Title,
} from './OurCaseStudies.style';

const OurCaseStudies = ({ caseStudiesData }) => {
    return (
        <OurCaseStudiesContainer>
            <Title>
                Our <br />
                case studies…
            </Title>
            <CaseStudiesWrapper>
                {caseStudiesData?.map(
                    ({ circleBg, img, logo, title, subTitle, logoWidth }) => (
                        <CaseStudy key={logo}>
                            <CaseStudyLeft>
                                <Circle
                                    circleBg={circleBg}
                                    className='circle'
                                />
                                <Img src={img} className='img' />
                            </CaseStudyLeft>
                            <CaseStudyRight>
                                <Logo src={logo} logoWidth={logoWidth} />
                                <CaseStudyTitle>{title}</CaseStudyTitle>
                                <CaseStudySubTitle>
                                    {subTitle}
                                </CaseStudySubTitle>
                                <MoreBtn />
                            </CaseStudyRight>
                        </CaseStudy>
                    )
                )}
            </CaseStudiesWrapper>
        </OurCaseStudiesContainer>
    );
};

export default OurCaseStudies;
