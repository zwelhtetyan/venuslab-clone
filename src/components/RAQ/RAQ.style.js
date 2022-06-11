import styled from 'styled-components';

export const RAQContainer = styled.div`
    position: fixed;
    top: 0;
    right: ${({ isRAQOpen }) => (isRAQOpen ? '0' : '-100%')};
    width: 600px;
    height: 100%;
    overflow-x: hidden;
    overflow-y: overlay;
    background-color: var(--white);
    z-index: 11;
    padding: 0 4rem;
    transition: var(--transition3s);

    @media screen and (max-width: 600px) {
        width: 100%;
        padding: 2rem;
    }
`;

export const RAQCloseMenu = styled.button`
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: var(--light-gray);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 15px;
    right: 10px;
`;

export const Title = styled.h2`
    margin-top: 4rem;
    font-size: 2rem;
    border-bottom: 1px solid var(--pure-light);
    padding-bottom: 2rem;

    @media screen and (max-width: 600px) {
        margin-top: 1rem;
    }
`;

export const Form = styled.form``;

export const SubTitle = styled.h4`
    font-size: 20px;
    font-weight: 600;
    margin: 2rem 0 1.3rem 0;
`;

export const Label = styled.label`
    font-size: 17px;
    cursor: pointer;
`;

export const InputWrapperSmall = styled.div`
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
`;

export const Checkbox = styled.input`
    width: 0;
    height: 0;
    padding: 0;
    display: block;
    opacity: 0;
    position: absolute;
    z-index: -99;
`;

export const CustomCheckbox = styled.div`
    width: 20px;
    height: 20px;
    border: 2px solid
        ${({ formData }) => (formData ? 'var(--primary)' : '#ddd')};

    background-color: #f4f4f4;
    border-radius: 2px;
    margin-right: 10px;

    &::before {
        content: '';
        display: block;
        width: 10px;
        height: 4px;
        border-left: 2px solid #f4f4f4;
        border-bottom: 2px solid #f4f4f4;
        transform: translate(2px, 4px);
        transition: var(--transition3s);

        ${({ formData }) =>
            formData &&
            'border-left: 2px solid var(--primary);border-bottom: 2px solid var(--primary);transform: translate(2px, 4px) rotate(-45deg);'};

        /* border-left: 2px solid var(--primary);
        border-bottom: 2px solid var(--primary);
        transform: translate(2px, 4px) rotate(-45deg); */
    }
`;

export const Radio = styled(Checkbox)``;

export const CustomRadio = styled.div`
    width: 24px;
    height: 24px;
    background-color: #f4f4f4;
    border: 2px solid #ddd;
    margin-right: 10px;
    border-radius: 50%;

    ${({ formData }) =>
        formData && 'border-color: var(--primary);background-color: #fff;'}

    /* border-color: var(--primary);
    background-color: #fff; */

    &::before {
        content: '';
        display: block;
        width: 16px;
        height: 16px;
        border-radius: 100%;
        background-color: var(--primary);
        margin: 2px;
        transform: scale(0);
        transition: var(--transition3s);

        ${({ formData }) => formData && 'transform: scale(1)'};
        /* transform: scale(1) */
    }
`;

export const SubmitButtonContainerr = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 2rem 0 5rem 0;
`;
