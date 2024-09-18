import React from "react";
import styled from "styled-components";
import { FlexContainer } from "../../../components/FlexContainer";
import { WorkArea } from "./workArea/WorkArea";
import { Skills } from "../workExperience/skills/Skills";



export const WorkExperience = () => {
    return (
        <StyledWorkExperience>
            <FlexContainer>
                <WorkArea iconId={"computer"} title={"Web Design"} 
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} 
                />
                <WorkArea iconId={"paint"} title={"UI/UX Design"} 
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} 
                />
                <Skills></Skills>
            </FlexContainer>
        </StyledWorkExperience>
    )
}


const StyledWorkExperience = styled.section`
min-height: 100vh;
    background-color: rgb(240, 184, 247);


`