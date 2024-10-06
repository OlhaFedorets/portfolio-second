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
    display: flex;
    margin-top: 90px;
`

const MainTitle = styled.h1`
    ${font({weight: 700, Fmax: 50, Fmin: 36})}
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

        span{
            
        :first-child {
            font-weight: 700;
            font-size: 20px;
        }

        :last-child {
            font-weight: 500;
            font-size: 15px;
            }
        }
        
        @media screen and (max-width: 1010px) {
            display: none; 
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
    object-position: center;

    @media ${theme.media.mobile} {
        width: 255px;
        height: 400px;
    }
`

