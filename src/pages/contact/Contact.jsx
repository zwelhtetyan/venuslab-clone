import React, { useRef, useState } from 'react';
import AnimateWrapper from '../../UI/AnimateWrapper';
import { PageWrapperCalc } from '../../UI/PageWrapperCalc';
import { ButtonText, PrimaryButton } from '../../UI/PrimaryButton';
import AddressCard from './addressCard/AddressCard';
import {
   AddressContainer,
   Desc,
   Form,
   FormWrapper,
   GoogleMap,
   InnerAddressWrapper,
   Title,
   Wrapper,
} from './Contact.style';
import { Input, Textarea } from './input and textarea';
import { useAction } from '../../context/ContextWrapper';

const Contact = () => {
   const { isLoading } = useAction();

   const buttonSize = {
      width: '180',
      height: '42',
   };

   //states
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      companyName: '',
      aboutProject: '',
   });

   //refs
   const nameRef = useRef();
   const emailRef = useRef();
   const companyNameRef = useRef();
   const aboutProjectRef = useRef();
   const formRef = useRef();

   //small label still top when value exist
   const handleOnBlur = (e, val) => {
      const { name } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: val }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      // emailjs
      //    .sendForm(
      //       'contact_service',
      //       'contact_form',
      //       formRef.current,
      //       'user_PpXo4D95NB1qu61WXJAS0'
      //    )
      //    .then((res) => console.log(res.text))
      //    .catch((err) => console.log(err.text));
   };

   return (
      <>
         <PageWrapperCalc>
            <AnimateWrapper isLoading={isLoading} delay='0s'>
               <Desc>
                  Are you ready to schedule your first project with us? <br />
                  Or maybe you still have some question.
               </Desc>
               <Wrapper>
                  <FormWrapper>
                     <Title>Don’t be shy to say Hi!</Title>
                     <Form ref={formRef} onSubmit={handleSubmit}>
                        <Input
                           type='text'
                           label='Name'
                           refren={nameRef}
                           name='name'
                           handleOnBlur={handleOnBlur}
                           val={formData.name}
                        />
                        <Input
                           type='email'
                           label='Email'
                           refren={emailRef}
                           name='email'
                           handleOnBlur={handleOnBlur}
                           val={formData.email}
                        />
                        <Input
                           type='text'
                           label='Your Company Name'
                           refren={companyNameRef}
                           name='companyName'
                           handleOnBlur={handleOnBlur}
                           val={formData.companyName}
                        />
                        <Textarea
                           label='Tell us about your project'
                           refren={aboutProjectRef}
                           name='aboutProject'
                           handleOnBlur={handleOnBlur}
                           val={formData.aboutProject}
                        />
                        <PrimaryButton
                           size={buttonSize}
                           style={{ marginLeft: 'auto' }}
                        >
                           <ButtonText>Send</ButtonText>
                        </PrimaryButton>
                     </Form>
                  </FormWrapper>
                  <AddressContainer>
                     <Title> Or you can contact us directly...</Title>
                     <InnerAddressWrapper>
                        <AddressCard
                           w='50%'
                           src='https://venuslab.co/icons/phone.png'
                           addr='+959 972 709 001'
                        />

                        <AddressCard
                           w='50%'
                           src='https://venuslab.co/icons/email.png'
                           addr='nwaung@venuslab.co'
                        />

                        <AddressCard
                           w='100%'
                           src='https://venuslab.co/icons/location.png'
                           addr={
                              <span>
                                 No.204, 8th Floor, <br /> Tower A, The Leaf
                                 Residence, <br />
                                 Dama Thukha Kyaung Lane, Hlaing Township,{' '}
                                 <br /> Yangon
                              </span>
                           }
                        />
                     </InnerAddressWrapper>
                  </AddressContainer>
               </Wrapper>
            </AnimateWrapper>
         </PageWrapperCalc>
         <GoogleMap
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.888429915386!2d96.16759071437532!3d16.831890123019082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c193ada58e18c7%3A0x1c5d5b4d528ec20c!2sVenus%20Lab!5e0!3m2!1sen!2smm!4v1654879287653!5m2!1sen!2smm'
            width='100%'
            height='450'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
         ></GoogleMap>
      </>
   );
};

export default Contact;
