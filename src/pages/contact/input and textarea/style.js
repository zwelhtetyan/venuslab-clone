import styled from 'styled-components';

export const InputWrapper = styled.div`
    height: 42px;
    margin-bottom: 1.5rem;
    position: relative;
    display: flex;
    align-items: center;
`;

export const TextAreaWrapper = styled(InputWrapper)`
    height: 160px;
`;

export const CustomInput = styled.input`
    appearance: none;
    width: 100%;
    height: 100%;
    border: 2px solid var(--light-gray);
    background-color: var(--pale-light);
    border-radius: 2px;
    outline-color: var(--primary);
    padding: 0 15px;
    font-size: 16px;

    &:focus + label {
        transform: translate(-20px, -30px);
        font-size: 14px;
    }
`;

export const CustomTextArea = styled(CustomInput)``;

export const SmallLabel = styled.label`
    position: absolute;
    font-weight: 200;
    left: 20px;
    pointer-events: none;
    transition: var(--transition3s);

    //focus and have value
    ${({ val }) => val && 'transform: translate(-20px, -30px);font-size: 14px;'}
`;

export const SmallLabelForTextarea = styled(SmallLabel)`
    top: 10px;
`;
