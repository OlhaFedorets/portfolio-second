import React from "react";
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";
import Typewriter from 'typewriter-effect';

// const achievementItems = ["Projects Done", "Happy Clients", "Clients on Worldwide"]


export const About = () => {
    return (
        <StyledAbout id={"about"}>
            <Container>
                {/*<FlexContainer direction={"column"}>*/}
                    <StyledPersonalInfo>
                        {/*<StyledPersonalTitle>About Me.</StyledPersonalTitle>*/}
                        <StyledPersonalTitle>
                            {/*About me*/}
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
                                Hello! My name is Olga. Frontend developer with 1+ years of experience in Single Page
                                Application development using TypeScript, JavaScript, React, Redux, Redux-toolkit, RTK
                                Query.
                            </p>
                            <p>
                                I am constantly improving my skills in these technologies, and am also actively studying
                                Next.js and React Native to expand my capabilities and achieve a higher level of
                                professionalism in my work.
                            </p>
                            <p>
                                My main development priority is to create efficient and clean code that is easy to
                                maintain and scale. I strive to create high-quality, intuitive and accessible user
                                interfaces.
                            </p>
                        </StyledPersonalText>
                    </StyledPersonalInfo>
                    {/*<PersonalAchievements achievementItems={achievementItems}/>*/}
                {/*</FlexContainer>*/}
            </Container>
        </StyledAbout>
    );
};


const StyledAbout = styled.section`
    position: relative;
    color: ${theme.colors.white};
`
const StyledPersonalInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 10px;


    @media screen and (max-width: 950px) {
        flex-direction: column;
        margin-left: 20px;
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
    /*flex: 2;*/    
    max-width: 793px;
    min-width: 449px;
    ${font({weight: 500, Fmax: 30, Fmin: 23})};
    opacity: 0.8;
    
    @media ${theme.media.mobile} {
        min-width: 355px;
    }
`

