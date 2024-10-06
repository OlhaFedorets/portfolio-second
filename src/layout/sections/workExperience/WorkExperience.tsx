import React from "react";
import styled from "styled-components";
import { FlexContainer } from "../../../components/FlexContainer";
import { WorkArea } from "./workArea/WorkArea";
import { Skills } from "../workExperience/skills/Skills";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";



export const WorkExperience = () => {
    return (
        <StyledWorkExperience>
            <Container>
                <FlexContainer justify={"space-between"}>
                    <WorkAreas>                    
                    <WorkArea iconId={"computer"} height={"40"} width={"41"} viewBox={"0 0 28 30"}
                        title={"Web Design"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
                    <WorkArea iconId={"paint"} height={"40"} width={"41"} viewBox={"0 0 39 40"}
                        title={"UI/UX Design"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
                    </WorkAreas>
                    <Skills />
                </FlexContainer>
            </Container>
        </StyledWorkExperience>
    )
}

const StyledWorkExperience = styled.section`
    ${FlexContainer} {
        @media ${theme.media.tablet} {
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }
    }
`

const WorkAreas = styled.div`
    display: flex;
    justify-content: center;

    @media ${theme.media.mobile} {
        flex-direction: column;
        gap: 20px;
    }
`