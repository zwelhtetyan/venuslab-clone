import { useRef, useState } from 'react';
import { useHandleMenu } from '../../context/ContextWrapper';
import { ButtonText, PrimaryButton } from '../../UI/PrimaryButton';
import {
    Checkbox,
    Form,
    Input,
    InputWrapper,
    SmallLabel,
    RAQCloseMenu,
    RAQContainer,
    SubTitle,
    Title,
    Label,
    CustomCheckbox,
    InputWrapperSmall,
    Radio,
    CustomRadio,
    TextAreaWrapper,
    Textarea,
    SmallLabelForTextarea,
    SubmitButtonContainerr,
} from './RAQ.style';
import closeMenuIcon from './x.svg';

const RAQ = () => {
    const { isRAQOpen, handleRAQOpen } = useHandleMenu();

    const buttonSize = {
        width: '180',
        height: '42',
    };

    const nameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const companyRef = useRef();
    const positionRef = useRef();
    const aboutProjectRef = useRef();

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        company: '',
        position: '',
        webAndWebApp: null,
        mobileApp: null,
        gameDev: null,
        UIUX: null,
        estimatedBudget: {
            low: null,
            medium: null,
            high: null,
            advance: null,
        },
        aboutProject: '',
        facebook: null,
        linkedin: null,
        googleSearch: null,
        referral: null,
        other: null,
    });

    //animate label when lose focus
    const handleBlur = (key, value) => {
        setFormData((prevValue) => ({ ...prevValue, [key]: value }));
    };

    //handle checkbox
    const handleCheckbox = (e) => {
        const name = e.currentTarget.firstChild.name;
        const value = e.currentTarget.lastChild.innerText;
        setFormData((prevData) => ({
            ...prevData,
            [name]: !prevData[name] ? value : null,
        }));
    };

    //handle radio
    const handleRadio = (e) => {
        const name = e.currentTarget.firstChild.name;
        const value = e.currentTarget.lastChild.innerText;

        const estimateBudget = formData.estimatedBudget;

        for (let key in estimateBudget) {
            if (key === name) {
                estimateBudget[key] = value;
            } else {
                estimateBudget[key] = null;
            }
        }

        setFormData((prevData) => ({
            ...prevData,
            estimatedBudget: estimateBudget,
        }));
    };

    return (
        <RAQContainer isRAQOpen={isRAQOpen}>
            <RAQCloseMenu onClick={handleRAQOpen}>
                <img src={closeMenuIcon} alt='' />
            </RAQCloseMenu>
            <Title>Request a Quote</Title>
            <Form>
                {/* Who You Are */}
                <SubTitle>Who you are?</SubTitle>

                <InputWrapper>
                    <Input
                        type='text'
                        ref={nameRef}
                        name='name'
                        onBlur={({ target }) =>
                            handleBlur(target.name, nameRef.current.value)
                        }
                    />
                    <SmallLabel formData={formData.name}>Your name</SmallLabel>
                </InputWrapper>
                <InputWrapper>
                    <Input
                        type='text'
                        ref={phoneRef}
                        name='phone'
                        onBlur={({ target }) =>
                            handleBlur(target.name, phoneRef.current.value)
                        }
                    />
                    <SmallLabel formData={formData.phone}>
                        Your phone number
                    </SmallLabel>
                </InputWrapper>
                <InputWrapper>
                    <Input
                        type='email'
                        ref={emailRef}
                        name='email'
                        onBlur={({ target }) =>
                            handleBlur(target.name, emailRef.current.value)
                        }
                    />
                    <SmallLabel formData={formData.email}>
                        Your email address
                    </SmallLabel>
                </InputWrapper>
                <SubTitle>What you do?</SubTitle>
                <InputWrapper>
                    <Input
                        type='text'
                        ref={companyRef}
                        name='company'
                        onBlur={({ target }) =>
                            handleBlur(target.name, companyRef.current.value)
                        }
                    />
                    <SmallLabel formData={formData.company}>
                        Your company name
                    </SmallLabel>
                </InputWrapper>
                <InputWrapper>
                    <Input
                        type='text'
                        ref={positionRef}
                        name='position'
                        onBlur={({ target }) =>
                            handleBlur(target.name, positionRef.current.value)
                        }
                    />
                    <SmallLabel formData={formData.position}>
                        Your position
                    </SmallLabel>
                </InputWrapper>

                {/* What is your project type? */}
                <SubTitle>What is your project type?</SubTitle>

                <InputWrapperSmall onClick={handleCheckbox}>
                    <Checkbox type='checkbox' name='webAndWebApp' />
                    <CustomCheckbox formData={formData.webAndWebApp} />
                    <Label>Commercial Websites & Web Application</Label>
                </InputWrapperSmall>
                <InputWrapperSmall onClick={handleCheckbox}>
                    <Checkbox type='checkbox' name='mobileApp' />
                    <CustomCheckbox formData={formData.mobileApp} />
                    <Label>Mobile Application Developemnt</Label>
                </InputWrapperSmall>
                <InputWrapperSmall onClick={handleCheckbox}>
                    <Checkbox type='checkbox' name='gameDev' />
                    <CustomCheckbox formData={formData.gameDev} />
                    <Label>Game Developemnt</Label>
                </InputWrapperSmall>
                <InputWrapperSmall onClick={handleCheckbox}>
                    <Checkbox type='checkbox' name='UIUX' />
                    <CustomCheckbox formData={formData.UIUX} />
                    <Label>UI/UX Developemnt</Label>
                </InputWrapperSmall>

                {/* Estimated Budget? */}

                <SubTitle>Estimated Budget?</SubTitle>

                <InputWrapperSmall onClick={handleRadio}>
                    <Radio type='radio' name='low' />
                    <CustomRadio formData={formData.estimatedBudget.low} />
                    <Label>$1,500 - $3,500</Label>
                </InputWrapperSmall>
                <InputWrapperSmall onClick={handleRadio}>
                    <Radio type='radio' name='medium' />
                    <CustomRadio formData={formData.estimatedBudget.medium} />
                    <Label>$3,600 - $7,000</Label>
                </InputWrapperSmall>
                <InputWrapperSmall onClick={handleRadio}>
                    <Radio type='radio' name='high' />
                    <CustomRadio formData={formData.estimatedBudget.high} />
                    <Label>$7,100 - $15,000</Label>
                </InputWrapperSmall>
                <InputWrapperSmall onClick={handleRadio}>
                    <Radio type='radio' name='advance' />
                    <CustomRadio formData={formData.estimatedBudget.advance} />
                    <Label>$15,100 - Above</Label>
                </InputWrapperSmall>

                {/* Could you explain a bit about your project? */}

                <SubTitle>Could you explain a bit about your project?</SubTitle>

                <TextAreaWrapper>
                    <Textarea
                        type='textarea'
                        ref={aboutProjectRef}
                        name='aboutProject'
                        onBlur={({ target }) =>
                            handleBlur(
                                target.name,
                                aboutProjectRef.current.value
                            )
                        }
                    />
                    <SmallLabelForTextarea formData={formData.aboutProject}>
                        Some about your project...
                    </SmallLabelForTextarea>
                </TextAreaWrapper>

                {/* How did you hear about us? (optional) */}

                <SubTitle>How did you hear about us? (optional)</SubTitle>

                <InputWrapperSmall onClick={handleCheckbox}>
                    <Checkbox type='checkbox' name='facebook' />
                    <CustomCheckbox formData={formData.facebook} />
                    <Label>Facebook</Label>
                </InputWrapperSmall>
                <InputWrapperSmall onClick={handleCheckbox}>
                    <Checkbox type='checkbox' name='linkedin' />
                    <CustomCheckbox formData={formData.linkedin} />
                    <Label>Linkedin</Label>
                </InputWrapperSmall>
                <InputWrapperSmall onClick={handleCheckbox}>
                    <Checkbox type='checkbox' name='googleSearch' />
                    <CustomCheckbox formData={formData.googleSearch} />
                    <Label>Google Search</Label>
                </InputWrapperSmall>
                <InputWrapperSmall onClick={handleCheckbox}>
                    <Checkbox type='checkbox' name='referral' />
                    <CustomCheckbox formData={formData.referral} />
                    <Label>Referral</Label>
                </InputWrapperSmall>
                <InputWrapperSmall onClick={handleCheckbox}>
                    <Checkbox type='checkbox' name='other' />
                    <CustomCheckbox formData={formData.other} />
                    <Label>Other</Label>
                </InputWrapperSmall>
                <SubmitButtonContainerr>
                    <PrimaryButton size={buttonSize}>
                        <ButtonText>request a quote</ButtonText>
                    </PrimaryButton>
                </SubmitButtonContainerr>
            </Form>
        </RAQContainer>
    );
};

export default RAQ;
