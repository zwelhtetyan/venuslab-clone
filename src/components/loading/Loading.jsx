import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
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

    useEffect(() => {
        const intervalId = setInterval(
            () => setPrecent((oldValue) => oldValue + 1),
            50
        );
        setIntervalId(intervalId);
        return () => clearInterval(intervalId);
    }, []);

    if (percent === 100) {
        clearInterval(intervalId);
    }

    useEffect(() => {
        if (percent === 100) {
            setOpacity(0);
        }
    }, [percent]);

    useEffect(() => {
        if (percent === 100) {
            setTimeout(() => setDisplay('none'), 500);
        }
    }, [percent]);

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
