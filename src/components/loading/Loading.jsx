import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAction } from '../../context/ContextWrapper';
import {
   HelloImg,
   Img,
   LoadingContainer,
   LoadingImg,
   Precent,
   Wrapper,
} from './loading.style';

const Loading = () => {
   const [percent, setPrecent] = useState(0);
   const [intervalId, setIntervalId] = useState(null);
   const [opacity, setOpacity] = useState(1);
   const [display, setDisplay] = useState('flex');

   const { setIsLoading } = useAction();

   useEffect(() => {
      const intervalId = setInterval(
         () => setPrecent((oldValue) => oldValue + 1),
         20
      );
      setIntervalId(intervalId);
      return () => clearInterval(intervalId);
   }, []);

   useEffect(() => {
      if (percent === 100) {
         setOpacity(0);
         setTimeout(() => setDisplay('none'), 500);

         clearInterval(intervalId);
         setTimeout(() => setIsLoading(false), 3000);
      }
   }, [intervalId, percent, setIsLoading]);

   return (
      <LoadingContainer opacity={opacity} display={display}>
         <Wrapper>
            <Img>
               <LoadingImg />
               <HelloImg />
            </Img>
            <Precent>{percent}%</Precent>
         </Wrapper>
      </LoadingContainer>
   );
};

export default Loading;
