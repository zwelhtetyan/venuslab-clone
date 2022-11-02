import React from 'react';
import { Desc, TextWrapper, Title } from './WeStriveToBe.style';
import AnimateWrapper from '../../UI/AnimateWrapper';
import { useAction } from '../../context/ContextWrapper';

const WeStriveToBe = () => {
   const { isLoading } = useAction();

   return (
      <TextWrapper>
         <AnimateWrapper isLoading={isLoading} delay='0s'>
            <Title>We strive to be the best and make awsome work…</Title>
         </AnimateWrapper>
         <AnimateWrapper isLoading={isLoading} delay='0.01s'>
            <Desc>
               It’s our focus, passion, love and commitment on our works that
               makes us who we are. While we can’t share everything we do with
               you, here is some of our best work.
            </Desc>
         </AnimateWrapper>
      </TextWrapper>
   );
};

export default WeStriveToBe;
