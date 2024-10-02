import React from "react";
import styled from "styled-components";
import photo from "./../../../assets/images/home.jpg"
import { FlexContainer } from "../../../components/FlexContainer";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexContainer direction={"column"} align={"center"} justify={"space-around"}>
                    <MainTitle>
                        I’m <span>Alea</span>. I will create a web design that can give value to your company
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
            </Container>
        </StyledMain>
    );
};


const StyledMain = styled.section`
    /* min-height: 100vh; */
    display: flex;
    margin-top: 90px;
`

const MainTitle = styled.h1`
    ${font({weight: 700, Fmax: 50, Fmin: 36})}
    /* font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 50px; */
    //line-height: 120%;
    //letter-spacing: 0.01em;
    text-align: center;  
    color: ${theme.colors.black};

    span {
        background-image: ${theme.colors.gradientAccent};
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
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
        color: ${theme.colors.white};
        
        border-radius: 200px;
        width: 288px;
        height: 100px;
        background-image: ${theme.colors.gradientAccent};

        @media ${theme.media.tablet} {
            display: none;

        span{
            
        :first-child {
            /* font-family: 'Poppins', sans-serif; */
            font-weight: 700;
            font-size: 20px;
            /* color: ${theme.colors.white}; */
        }

         :last-child {
            /* font-family: 'Poppins', sans-serif; */
            font-weight: 500;
            font-size: 15px;
            /* color: ${theme.colors.white}; */
            }
        }
        
    
    }
        }
            
    

    #ui {
    align-self: flex-start;
    margin-top: 50px;
    }

    #web {
    align-self: flex-end;
    margin-bottom: 100px;
    }
`

const Photo = styled.img`
width: 393px;
height: 600px;
object-fit: cover;
`

