import React, {ElementRef, useRef} from "react";
import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";
import {Button} from "../../../components/Button";
import emailjs from '@emailjs/browser';


export const Contacts = () => {

    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm('service_zltemnz', 'template_iebmkyh', form.current, {
                publicKey: 'pzc__QE8pnmbbYqqM',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset();
    };

    return (
        <StyledContacts id={"contact"}>
            <Container maxWidth={"1000px"} padding={"0"}>
                <Title>Send me a <span>message</span>, I will be touch with you shortly.</Title>
                <Form ref={form} onSubmit={sendEmail}>
                    <FirstColumn>
                        <Field required placeholder="Your Name" name={"user_name"}/>
                        <Field required placeholder="Your Subject" name={"subject"}/>
                        <Field required as={"textarea"} placeholder="Your Message" name={"message"}/>
                    </FirstColumn>
                    <SecondColumn>
                        <Field required placeholder="Enter Your Email Adress" name={"email"}/>
                        <Button type="submit"><Icon iconId={"mail"} width={"20"} height={"20"} viewBox={"0 0 18 14"}/>Send Message</Button>
                    </SecondColumn>
                </Form>
            </Container>
        </StyledContacts>
    )
}


const StyledContacts = styled.section`
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
`

const Title = styled.h3`
    ${font({weight: 400, Fmax: 50, Fmin: 36})}
    line-height: 120%;
    text-align: center;
    margin-bottom: 50px;    

    span {
        background-image: ${theme.colors.gradientAccent};
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

const Form = styled.form`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10px;

    textarea {
        resize: none;
        height: 100px;
    }

    @media ${theme.media.tablet} {
        flex-direction: column;
        align-items: center;
        gap: 50px;
    }    
`

const FirstColumn = styled.div`
    max-width: 388px;
    width: 100%;
        
    & :nth-child(2) {
        margin: 110px 0;

        @media ${theme.media.tablet} {
            margin: 50px 0;
        }
    }
`
const SecondColumn = styled.div`
    max-width: 388px;
    width: 100%;
    padding-bottom: 50px;

    position: relative;

    ${Button} {
        position: absolute;
        bottom: 0;
        right: 0;
    }
`

const Field = styled.input`
    width: 100%;
    border: none;
    border-bottom: 2px solid rgba(255, 255, 255, 0.5);
    max-width: 388px;
    height: 34px;
    background-color: ${theme.colors.black};

    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 120%;

    color: ${theme.colors.white};

    &::placeholder {
        text-align: start;
        color: rgba(255, 255, 255, 0.5);
    }

    &:focus-visible {
        outline: 1px solid rgba(255, 255, 255, 0.5);
    }
`