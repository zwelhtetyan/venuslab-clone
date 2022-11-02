import React from 'react';
import { GlobalStyles } from './GlobalStyles';
import Loading from './components/loading/Loading';
import Main from './container/main/Main';
import ContextWrapper from './context/ContextWrapper';
import Layer from './components/OverlayLayer/Layer';
import RAQ from './components/RAQ/RAQ';
import ScrollToTop from './ScrollToTop';

const App = () => {
   return (
      <>
         <ContextWrapper>
            <GlobalStyles />
            <Loading />
            <Main />
            <Layer />
            <RAQ />
            <ScrollToTop />
         </ContextWrapper>
      </>
   );
};

export default App;
