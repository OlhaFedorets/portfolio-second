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
                    <MainTitle>
                        I’m <span>Olga</span>. I’m a front-end developer looking for the opportunities to grow
                        professionally.
                    </MainTitle>
                    <PhotoWrapper>
                        <div id="ui">
                            <span>Front-End Developer</span>
                        </div>
                        {/*<UIButton  width={'288px'} height={'100px'}>Front-End Developer</UIButton>*/}
                        {/*<Button className={"ui"} width={'288px'} height={'100px'}>Front-End Developer</Button>*/}
                        <Photo src={photo}/>
                        {/*<WebButton width={'288px'} height={'100px'}>Download CV</WebButton>*/}
                        {/*<Button className={"web"} width={'288px'} height={'100px'} ><a>Download CV</a></Button>*/}
                        <div id="web">
                            <a href={''}>Download CV</a>
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
// const UIButton = styled(Button)`
//     display: block;
//   align-self: flex-start;
//   margin-top: 50px;
// `;
//
// const WebButton = styled(Button)`
//   align-self: flex-end;
//   margin-bottom: 100px;
// `;
const PhotoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;

    z-index: 1;
    position: relative;


    div {
        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 200px;
        width: 288px;
        height: 100px;
        background-image: ${theme.colors.gradientAccent};

        span, a {
            font-weight: 700;
            font-size: 20px;
            color: ${theme.colors.white};           
        }
        
        a {
            &:hover {
                font-size: 22px;
                transition: all 0.3s ease;
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

// const UIButton = styled(Button)`
//   align-self: flex-start;
//   margin-top: 50px;
// `;
//
// const WebButton = styled(Button)`
//   align-self: flex-end;
//   margin-bottom: 100px;
// `;

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

