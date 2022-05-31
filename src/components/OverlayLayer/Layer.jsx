import React from 'react';
import { useHandleMenu } from '../../context/ContextWrapper';
import { OverlayLayer } from './Layer.style';

const Layer = () => {
    const { isRAQOpen, handleRAQOpen } = useHandleMenu();

    return (
        <OverlayLayer
            isRAQOpen={isRAQOpen}
            onClick={handleRAQOpen}
        ></OverlayLayer>
    );
};

export default Layer;
