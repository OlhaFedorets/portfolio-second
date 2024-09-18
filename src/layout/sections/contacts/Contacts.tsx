import React from "react";
import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";





export const Contacts = () => {
    return (
        <StyledContacts>
            <Title>Send me a message, I will be touch with you shortly.</Title>
            <Form action="">
                <Field placeholder="Your Name"/>
                <Field placeholder="Your Subject"/>
                <Field as={"textarea"}  placeholder="Your Message"/>
                <Field placeholder="Enter Your Email Adress"/>  
                <Button type="submit"><Icon iconId="mail"/>Send Message</Button>             
            </Form>            
        </StyledContacts>
    )
}


const StyledContacts = styled.section`
    min-height: 100vh;
    background-color: rgb(184, 248, 223);
`

const Title = styled.h3`
    
`

const Form = styled.form`
    max-width: 995px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0 auto;
`
const Field = styled.input`
    
`

const Button = styled.button`
    
`