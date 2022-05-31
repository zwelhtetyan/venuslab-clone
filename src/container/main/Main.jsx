import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainContainer } from './Main.style';
import { Home, About, Services, Portfolios, Blog, Contact } from '../../pages';
import Header from '../../components/header/Header';

const Main = () => {
    return (
        <MainContainer>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/portfolios' element={<Portfolios />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </MainContainer>
    );
};

export default Main;
