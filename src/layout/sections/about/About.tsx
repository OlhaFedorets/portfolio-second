import React from "react";
import styled from "styled-components";
import { FlexContainer } from "../../../components/FlexContainer";
import { PersonalAchievements } from "./personalAchievements/PersonalAchievements"




export const About = () => {
    return (
        <StyledAbout>
            <FlexContainer direction={"column"}>
                <StyledPersonalInfo>
                    <StyledPersonalTitle>About Me.</StyledPersonalTitle>
                    <StyledPersonalText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</StyledPersonalText>
                </StyledPersonalInfo>
                <PersonalAchievements />
            </FlexContainer>
        </StyledAbout>
    );
};


const StyledAbout = styled.section`
    
    min-height: 100vh;
    
`
const StyledPersonalInfo = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
`

const StyledPersonalTitle = styled.h2`
    
`

const StyledPersonalText = styled.p`
    max-width: 793px
`

