import { useRef, useState } from 'react';
import { useAction } from '../../context/ContextWrapper';
import { ButtonText, PrimaryButton } from '../../UI/PrimaryButton';
import {
    Input as CustomInput,
    Textarea as CustomTextarea,
} from '../../pages/contact/input and textarea';
import {
    Checkbox,
    Form,
    RAQCloseMenu,
    RAQContainer,
    SubTitle,
    Title,
    Label,
    CustomCheckbox,
    InputWrapperSmall,
    Radio,
    CustomRadio,
    SubmitButtonContainerr,
} from './RAQ.style';
import closeMenuIcon from './x.svg';

const RAQ = () => {
    const { isRAQOpen, handleRAQOpen } = useAction();

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
    const handleOnBlur = (e, val) => {
        const { name } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: val }));
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

                <CustomInput
                    type='text'
                    label='Your name'
                    refren={nameRef}
                    name='name'
                    handleOnBlur={handleOnBlur}
                    val={formData.name}
                />

                <CustomInput
                    type='text'
                    label='Your phone number'
                    refren={phoneRef}
                    name='phone'
                    handleOnBlur={handleOnBlur}
                    val={formData.phone}
                />

                <CustomInput
                    type='email'
                    label='Your email address'
                    refren={emailRef}
                    name='email'
                    handleOnBlur={handleOnBlur}
                    val={formData.email}
                />

                <SubTitle>What you do?</SubTitle>
                <CustomInput
                    type='text'
                    label='Your company name'
                    refren={companyRef}
                    name='company'
                    handleOnBlur={handleOnBlur}
                    val={formData.company}
                />

                <CustomInput
                    type='text'
                    label='Your position'
                    refren={positionRef}
                    name='position'
                    handleOnBlur={handleOnBlur}
                    val={formData.position}
                />

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

                <CustomTextarea
                    label='Some about your project...'
                    refren={aboutProjectRef}
                    name='aboutProject'
                    handleOnBlur={handleOnBlur}
                    val={formData.aboutProject}
                />

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
