import React from "react";
import styled from "styled-components";
import photo from "./../../../assets/images/home.jpg"
import { FlexContainer } from "../../../components/FlexContainer";


export const Main = () => {
    return (
        <StyledMain>
            <FlexContainer align={"center"} justify={"space-around"} wrap={"wrap"} >
            <MainTitle>
                I’m Alea. I will create a web design that can give value to your company
            </MainTitle>
            <div>
                <span>UI/UX Designer</span>
                <span>4 Years</span>
            </div>
            <Photo src={photo} />
            <div>
                <span>Web Developer</span>
                <span>2 Years</span>
            </div>
        </FlexContainer>

        </StyledMain>
        
    );
};


const StyledMain = styled.div`
    min-height: 100vh;
    background-color: lightgrey;
`

const MainTitle = styled.h1`
    

`

const Photo = styled.img`
width: 393px;
height: 600px;
object-fit: cover;
`

