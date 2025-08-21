import React from "react";
import styled from "styled-components";
import photo from "./../../../assets/images/photo.webp"
import {FlexContainer} from "../../../components/FlexContainer";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";
import rectangleImage from "../../../assets/images/Rectangle-10.webp";
import {Button} from "../../../components/Button";


export const Main = () => {
    return (
        <StyledMain id={"home"}>
            <Container>
                <FlexContainer direction={"column"} align={"center"} justify={"space-around"}>
                    <StyledName>
                        I’m <span>Fedorets Olga</span><span>. I’m a front-end developer looking for the opportunities to grow
                        professionally.</span>
                    </StyledName>
                    <PhotoWrapper>
                        <Button
                            width={'288px'}
                            height={'100px'}
                            borderRadius={'200px'}
                        ><MainTitle>
                            Front-End Developer
                        </MainTitle>
                            Front-End Developer
                        </Button>
                        <Photo src={photo}/>
                        <Button
                            as={'a'}
                            href={""}
                            target={'_blank'}
                            width={'288px'}
                            height={'100px'}
                            borderRadius={'200px'}
                        >
                            Download CV
                        </Button>
                    </PhotoWrapper>
                </FlexContainer>
            </Container>
        </StyledMain>
    );
};


const StyledMain = styled.section`
    display: flex;
    margin-top: 50px;
`

const StyledName = styled.h2`
    ${font({weight: 700, Fmax: 50, Fmin: 36})}
    text-align: center;

    span:first-child {
        background-image: ${theme.colors.gradientAccent};
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    span:nth-child(2) {
        @media ${theme.media.tablet} {
            display: none
        }
`

const MainTitle = styled.h1`
    ${font({weight: 700, Fmax: 20, Fmin: 16})}
`

const PhotoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;

    z-index: 1;
    position: relative;

    @media screen and (max-width: 1010px) {
        flex-direction: column;
    }

    ${Button} {
        text-align: center;
        line-height: 100px;
        font-weight: 700;
        font-size: 20px;

        align-self: flex-end;
        margin-bottom: 100px;

        @media screen and (max-width: 1010px) {
            width: 100%;
            height: 50px;
            line-height: 50px;
            margin-bottom: 0;
        }
    }

    ${Button}:first-child {
        align-self: flex-start;
        margin-top: 50px;
        margin-bottom: 0;
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

        @media screen and (max-width: 1010px) {
            display: none;
        }
    }

`
const Photo = styled.img`
    width: 393px;
    height: 600px;
    object-fit: cover;
    object-position: center;
    border-radius: 200px;
    //border: 1px solid rgba(255, 255, 255, 0.53);
    border: 1px solid white;

    @media ${theme.media.mobile} {
        width: 255px;
        height: 400px;
    }
`