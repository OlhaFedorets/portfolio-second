import React from "react";
import styled from "styled-components";
import photo from "./../../../assets/images/photo.webp"
import {FlexContainer} from "../../../components/FlexContainer";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";
import rectangleImage from "../../../assets/images/Rectangle-10.webp";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexContainer direction={"column"} align={"center"} justify={"space-around"}>
                    <MainTitle>
                        I’m <span>Olga</span>. Energetic front-end developer looking for the opportunities to grow professionally
                    </MainTitle>
                    <PhotoWrapper>
                        <div id="ui">
                            <span>Front-End Developer</span>
                        </div>

                            <Photo src={photo} />

                        <div id="web">
                            <span>Download CV</span>
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

    z-index: 1;
    position: relative;

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

        span {
                font-weight: 700;
                font-size: 20px;

            //:first-child {
            //    font-weight: 700;
            //    font-size: 20px;
            //}
            //
            //:last-child {
            //    font-weight: 500;
            //    font-size: 15px;
            //}
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

    ::after {
        content: "";
        background-image: url(${rectangleImage});
        display: block;
        width: 300px;
        height: 300px;
        background-size: cover;

        position: absolute;
        top: 30px;
        left: 510px;
        z-index: -1;

    }

`

const Photo = styled.img`
    width: 393px;
    height: 600px;
    object-fit: cover;
    object-position: center;   
    border-radius: 200px;



    @media ${theme.media.mobile} {
        width: 255px;
        height: 400px;
    }
`

