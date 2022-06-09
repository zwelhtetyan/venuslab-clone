import styled from 'styled-components';
import { MainWrapper } from './MainWrapper';

export const PageWrapperCalc = styled(MainWrapper)`
    padding-top: 210px;

    @media screen and (max-width: 1000px) {
        padding-top: 130px;
    }
`;
