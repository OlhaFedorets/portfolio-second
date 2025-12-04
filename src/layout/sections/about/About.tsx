import React from "react";
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";
import Typewriter from 'typewriter-effect';
import {FlexContainer} from "../../../components/FlexContainer";


export const About = () => {
    return (
        <StyledAbout id={"about"}>
            <Container>
                <FlexContainer justify={'space-between'} align={'center'} wrap={'wrap'}>
                    <StyledPersonalTitle>
                        <Typewriter
                            options={{
                                strings: ['About', 'Me.'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </StyledPersonalTitle>
                    <StyledPersonalText>
                        <p>
                            Hello! My name is Olga. I'm a frontend developer with 1+ year of experience in SPA development
                            using TypeScript, JavaScript, React, Redux, Redux-Toolkit, RTK Query, and Next.js.
                        </p>
                        <p>
                            I am constantly improving my skills in these areas and plan to expand them with new
                            technologies, such as GraphQL and React Native, to enhance my capabilities and achieve
                            a higher level of professionalism.
                        </p>
                        <p>
                            My main development priority is to create efficient and clean code that is easy to
                            maintain and scale. I strive to create high-quality, intuitive, and accessible user
                            interfaces.
                        </p>
                    </StyledPersonalText>
                </FlexContainer>
            </Container>
        </StyledAbout>
    );
};


const StyledAbout = styled.section`
    position: relative;
    color: ${theme.colors.white};

    ${FlexContainer} {
        gap: 10px;

        @media screen and (max-width: 1150px) {
            flex-direction: column;
            margin-left: 20px;
            margin-right: 20px;
        }
    }
`

const StyledPersonalTitle = styled.h2`
    flex: 1;
    ${font({weight: 700, Fmax: 100, Fmin: 70})};
    line-height: 120%;
`

const StyledPersonalText = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    max-width: 793px;
    min-width: 325px;
    ${font({weight: 400, Fmax: 28, Fmin: 20})};
    opacity: 0.8;

    @media ${theme.media.mobile} {
        min-width: 325px;
    }
`

