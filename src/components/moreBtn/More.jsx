import React from 'react';
import { Img, SecondaryButton } from '../../UI/SecondaryButton';

const MoreBtn = () => {
    return (
        <SecondaryButton>
            more
            <Img src='https://venuslab.co/icons/arrow.png' alt='' />
        </SecondaryButton>
    );
};

export default MoreBtn;
