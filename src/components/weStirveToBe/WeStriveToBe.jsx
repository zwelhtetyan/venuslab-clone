import React from 'react';
import { Desc, TextWrapper, Title } from './WeStriveToBe.style';
import { AnimateWrapperContainer as AnimateWrapper } from '../../UI/AnimateWrapper';

const WeStriveToBe = () => {
    return (
        <TextWrapper>
            <AnimateWrapper delay='0s'>
                <Title>We strive to be the best and make awsome work…</Title>
            </AnimateWrapper>
            <AnimateWrapper delay='0.01s'>
                <Desc>
                    It’s our focus, passion, love and commitment on our works
                    that makes us who we are. While we can’t share everything we
                    do with you, here is some of our best work.
                </Desc>
            </AnimateWrapper>
        </TextWrapper>
    );
};

export default WeStriveToBe;
