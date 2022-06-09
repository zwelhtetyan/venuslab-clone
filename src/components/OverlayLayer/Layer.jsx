import React from 'react';
import { useAction } from '../../context/ContextWrapper';
import { OverlayLayer } from './Layer.style';

const Layer = () => {
    const { isRAQOpen, handleRAQOpen } = useAction();

    return (
        <OverlayLayer
            isRAQOpen={isRAQOpen}
            onClick={handleRAQOpen}
        ></OverlayLayer>
    );
};

export default Layer;
