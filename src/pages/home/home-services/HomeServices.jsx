import React from 'react';
import { MainWrapper } from '../../../UI/MainWrapper';
import {
    ButtonContainer,
    Container,
    Desc,
    Label,
    Title,
} from './HomeServices.style';
import Services from '../../../components/services/Services';
import servicesData from './services.data.json';
import { ButtonText, PrimaryButton } from '../../../UI/PrimaryButton';
import { useAction } from '../../../context/ContextWrapper';

const HomeServices = () => {
    const buttonSize = {
        width: '180',
        height: '42',
    };

    const { handleRAQOpen } = useAction();

    return (
        <Container>
            <MainWrapper>
                <Title>what we can do</Title>
                <Title>for you or your business</Title>
                <Services servicesData={servicesData} />
                <Label>let's talk</Label>
                <Desc>
                    Wheather you're interested in working with us or for us,
                    we're always happy to chat.
                </Desc>
                <ButtonContainer>
                    <PrimaryButton size={buttonSize} onClick={handleRAQOpen}>
                        <ButtonText>request a quote</ButtonText>
                    </PrimaryButton>
                </ButtonContainer>
            </MainWrapper>
        </Container>
    );
};

export default HomeServices;
