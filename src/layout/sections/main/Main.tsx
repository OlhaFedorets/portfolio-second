import React from "react";
import styled from "styled-components";
import photo from "./../../../assets/images/home.jpg"
import { FlexContainer } from "../../../components/FlexContainer";


export const Main = () => {
    return (
        <StyledMain>
            <FlexContainer direction={"column"} align={"center"} justify={"space-around"}>
                <MainTitle>
                    I’m Alea. I will create a web design that can give value to your company
                </MainTitle>
                <PhotoWrapper>
                    <div id="ui">
                        <span>UI/UX Designer</span>
                        <span>4 Years</span>
                    </div>
                    <Photo src={photo} />
                    <div id="web">
                        <span>Web Developer</span>
                        <span>2 Years</span>
                    </div>
                </PhotoWrapper>
            </FlexContainer>
        </StyledMain>
    );
};


const StyledMain = styled.section`
    min-height: 100vh;
    background-color: lightgrey;
`

const MainTitle = styled.h1`
    

`

const PhotoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
    }

    #ui {
    align-self: flex-start;
    }

    #web {
    align-self: flex-end;
    }
`

const Photo = styled.img`
width: 393px;
height: 600px;
object-fit: cover;
`

