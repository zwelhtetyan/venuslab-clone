import styled from 'styled-components';

export const AnimateWrapperContainer = styled.div`
   transform: translateY(10%);
   animation: animateHero 0.9s forwards;
   animation-delay: ${({ isLoading, delay }) => (isLoading ? '2.5s' : delay)};
   opacity: 0.3;

   @keyframes animateHero {
      to {
         transform: translateY(0%);
         opacity: 1;
      }
   }
`;

const AnimateWrapper = ({ children, isLoading, delay }) => {
   return (
      <AnimateWrapperContainer isLoading={isLoading} delay={delay}>
         {children}
      </AnimateWrapperContainer>
   );
};

export default AnimateWrapper;
