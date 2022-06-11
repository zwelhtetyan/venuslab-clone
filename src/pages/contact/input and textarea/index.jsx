import React from 'react';
import {
    CustomInput,
    CustomTextArea,
    InputWrapper,
    SmallLabel,
    SmallLabelForTextarea,
    TextAreaWrapper,
} from './style';

export const Input = ({ type, label, name, val, handleOnBlur, refren }) => {
    return (
        <InputWrapper>
            <CustomInput
                type={type}
                ref={refren}
                name={name}
                onBlur={(e) => handleOnBlur(e, refren.current.value)}
                required
            />
            <SmallLabel val={val}>{label}</SmallLabel>
        </InputWrapper>
    );
};

export const Textarea = ({ label, val, refren, name, handleOnBlur }) => {
    return (
        <TextAreaWrapper>
            <CustomTextArea
                as='textarea'
                ref={refren}
                name={name}
                onBlur={(e) => handleOnBlur(e, refren.current.value)}
                required
            />
            <SmallLabelForTextarea val={val}>{label}</SmallLabelForTextarea>
        </TextAreaWrapper>
    );
};
