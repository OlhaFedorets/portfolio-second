import React from "react";
import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";





export const Contacts = () => {
    return (
        <StyledContacts>
            <Container maxWidth={"1000px"} padding={"0"}>
                <Title>Send me a <span>message</span>, I will be touch with you shortly.</Title>
                <Form action="">
                    <FirstColumn>
                        <Field placeholder="Your Name" />
                        <Field placeholder="Your Subject" />
                        <Field as={"textarea"} placeholder="Your Message" />
                    </FirstColumn>
                    <SecondColumn>
                        <Field placeholder="Enter Your Email Adress" />
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
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 50px;
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
    /* max-width: 388px; */
    /* max-height: 410px; */
    width: 100%;
    display: flex;
    justify-content: space-between;
    
    textarea {
        resize: none;
        height: 100px;
    }
`

const FirstColumn = styled.div`
    max-width: 388px;
    width: 100%;
    
    
    & :nth-child(2) {
        margin: 110px 0;
    }
`
const SecondColumn = styled.div`
    max-width: 388px;
    width: 100%;

    position: relative;
`

const Field = styled.input`
    width: 100%;
    border: none;
    border-bottom: 2px solid rgba(255, 255, 255, 0.5);
    width: 388px;
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

const Button = styled.button`
    border-radius: 30px;
    padding: 20px 40px;
    width: 256px;
    height: 64px;
    background-image: ${theme.colors.gradientAccent};
    color: ${theme.colors.white};

    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 120%;
    

    position: absolute;
    bottom: 0;
    right: 0;

    svg {
        margin-right: 10px;
    }
`