import React from "react";
import styled from "styled-components";
import { FlexContainer } from "../../../components/FlexContainer";
import { PersonalAchievements } from "./personalAchievements/PersonalAchievements"
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

const achievementItems = ["Projects Done", "Happy Clients", "Clients on Worldwide"]


export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <FlexContainer direction={"column"}>
                    <StyledPersonalInfo>
                        <StyledPersonalTitle>About Me.</StyledPersonalTitle>
                        <StyledPersonalText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</StyledPersonalText>
                    </StyledPersonalInfo>
                    <PersonalAchievements  achievementItems={achievementItems}/>
                </FlexContainer>
            </Container>
        </StyledAbout>
    );
};


const StyledAbout = styled.section`
    display: flex;
`
const StyledPersonalInfo = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;        
`

const StyledPersonalTitle = styled.h2`
    flex: 1;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 100px;
    line-height: 120%;
    color: ${theme.colors.white};
`

const StyledPersonalText = styled.p`
    flex: 2;
    max-width: 793px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 30px;
    color: rgba(255, 255, 255, 0.5);
`

