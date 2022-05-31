import styled from 'styled-components';

export const MainWrapper = styled.div`
    padding: var(--main-padding);

    @media screen and (max-width: 1200px) {
        padding: var(--mid-padding);
    }

    @media screen and (max-width: 480px) {
        padding: var(--low-paddiing);
    }
`;
