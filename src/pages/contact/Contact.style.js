import styled from 'styled-components';

export const Desc = styled.p`
    font-size: 20px;
    letter-spacing: 1px;
    color: #333;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 200;
`;

export const Wrapper = styled.div`
    display: flex;
    margin-top: 3rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const FormWrapper = styled.div`
    width: 50%;
    margin-right: 2rem;

    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 0 0 2rem 0;
    }
`;

export const Form = styled.form`
    margin-top: 1.5rem;
`;

export const AddressContainer = styled.div`
    width: 50%;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const InnerAddressWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

export const GoogleMap = styled.iframe`
    margin-bottom: 3rem;
`;
