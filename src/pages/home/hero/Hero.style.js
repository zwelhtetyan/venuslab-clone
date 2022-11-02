import styled from 'styled-components';

export const Container = styled.section`
   width: 100%;
   min-height: 100vh;
   background-color: var(--black);
   display: flex;
   align-items: center;
   clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%);

   @media screen and (max-width: 1000px) {
      clip-path: polygon(0 0, 100% 0, 100% 93%, 0 100%);
   }
`;

export const SmallText = styled.p`
   font-size: 10rem;
   text-transform: uppercase;
   font-weight: 100;
   letter-spacing: -7px;
   color: var(--primary);
   font-family: 'Oswald', sans-serif;

   @media screen and (max-width: 768px) {
      font-size: 8rem;
   }

   @media screen and (max-width: 480px) {
      font-size: 6rem;
   }
`;

export const StrongText = styled.h1`
   font-size: 10rem;
   text-transform: uppercase;
   letter-spacing: -7px;
   margin-top: -5.5rem;
   color: var(--primary);
   font-family: 'Oswald', sans-serif;

   @media screen and (max-width: 768px) {
      font-size: 8rem;
      margin-top: -4rem;
   }

   @media screen and (max-width: 480px) {
      font-size: 6rem;
      margin-top: -3rem;
   }
`;

export const NormalText = styled.p`
   font-size: 23px;
   color: var(--white);
   margin: -2rem 0 0 8px;

   @media screen and (max-width: 480px) {
      font-size: 19px;
      margin: -1rem 0 0 5px;
   }
`;
