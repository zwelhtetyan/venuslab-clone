import React from 'react';
import { useAction } from '../../context/ContextWrapper';
import AnimateWrapper from '../../UI/AnimateWrapper';
import { MainWrapper } from '../../UI/MainWrapper';
import { PageWrapperCalc } from '../../UI/PageWrapperCalc';
import {
   AboutWrapper,
   Left,
   LargeTitle,
   Para,
   Right,
   Strong,
   Tech,
   Title,
   WhatWeCan,
   WorkFlowContainer,
   WorkFlowCard,
   WorkFlowCardLogo,
   WorkFlowCardArrow,
   WorkFlowCardArrowSmall,
} from './About.style';
import BrandCardContainer from './brandCardContainer/BrandCardContainer ';
import Slider from './slider/Slider';

const About = () => {
   const { isLoading } = useAction();

   return (
      <section>
         <PageWrapperCalc>
            <AboutWrapper>
               <Left>
                  <AnimateWrapper isLoading={isLoading} delay='0s'>
                     <LargeTitle>We are creative people...</LargeTitle>
                  </AnimateWrapper>
               </Left>
               <Right>
                  <AnimateWrapper isLoading={isLoading} delay='0.01s'>
                     <Title>The Makers of Impactful Digital Products</Title>
                     <Strong>
                        We craft digital products that have a good impact on
                        yours. Like you, we hate bad software too.
                     </Strong>
                     <Para>
                        You have an idea to transform your business digitally or
                        you want your business’s digital presence smart, we have
                        a team of well-experienced techies to execute it.
                        Delivering a product no one uses it a big waste. There
                        are so many reasons behind a failed tech product. The
                        guarantee we can give you is your product will never
                        fail because of technical & user experience issues.
                     </Para>
                     <Title>Why do we do what we do?</Title>
                     <Para>
                        We hate to use awful products. Digital products,
                        websites, apps that are not just fancy/buzz words for us
                        or anyone. It’s really hard to live without digital
                        products in today’s age. They become our everyday
                        lifestyles. We believe everyone is deserved to use a
                        good digital product. A good digital product is not a
                        fancy word, it’s the right for today’s people. People
                        have the right to use good digital products. That’s why
                        we create high-quality digital products.
                     </Para>
                     <Title>Apps, Websites & Games</Title>
                     <Para>
                        We create human centered design approach for building
                        apps, websites and games. We brainstorm, design, code to
                        build the impactful digital products. We don’t just
                        build what you ask for, we recommend and implement the
                        solutions to achieve your objectives based on industry
                        best practices and standards. We make sure to deliver
                        products & services with best qualities on time and on
                        budget.
                     </Para>
                     <WhatWeCan>
                        <Tech>User Interface Design</Tech>
                        <Tech>User Experience Design</Tech>
                        <Tech>Web Design</Tech>
                        <Tech>Motion Design</Tech>
                        <Tech>Front-end Development</Tech>
                        <Tech>Back-end Development</Tech>
                        <Tech>Game Development</Tech>
                     </WhatWeCan>
                  </AnimateWrapper>
               </Right>
            </AboutWrapper>
         </PageWrapperCalc>
         <Slider />
         <MainWrapper>
            <LargeTitle>
               Our <br /> work flow...
            </LargeTitle>
            <WorkFlowContainer>
               <WorkFlowCard>
                  <WorkFlowCardLogo logo='https://venuslab.co/icons/idea.png' />
                  <Title>idea</Title>
                  <Para>
                     We value our customers’ ideas. We research & validate and
                     transform them into valuable ones.
                  </Para>
                  <WorkFlowCardArrow arrow='https://venuslab.co/icons/progress-one.png' />
               </WorkFlowCard>
               <WorkFlowCard>
                  <WorkFlowCardLogo logo='https://venuslab.co/icons/implementation.png' />
                  <Title>implementation</Title>
                  <Para>
                     We try our best to implement an idea with our strong
                     commitment of skills & experience combined with industry’s
                     best practice.
                  </Para>
                  <WorkFlowCardArrowSmall arrow='https://venuslab.co/icons/arrow-o.png' />
                  <WorkFlowCardArrow arrow='https://venuslab.co/icons/progress-two.png' />
               </WorkFlowCard>
               <WorkFlowCard>
                  <WorkFlowCardLogo logo='https://venuslab.co/icons/impact.png' />
                  <Title>impact</Title>
                  <Para>
                     We work only on digital products that form good impacts for
                     people. We don’t do things just for money but impact.
                  </Para>
                  <WorkFlowCardArrowSmall
                     isLast={true}
                     arrow='https://venuslab.co/icons/arrow-o.png'
                  />
               </WorkFlowCard>
            </WorkFlowContainer>
            <LargeTitle>
               Fine folks <br /> we've work with...
            </LargeTitle>
            <BrandCardContainer />
         </MainWrapper>
      </section>
   );
};

export default About;
