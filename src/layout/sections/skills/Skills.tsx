import React from "react";
import styled from "styled-components";
import { FlexContainer } from "../../../components/FlexContainer";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import {Skill} from "./skill/Skill";
import {Fade} from "react-awesome-reveal";
import {font} from "../../../styles/Common";

const skillData = [
    {
        iconId: "html",
        title: "HTML5",
        viewBox: "0 -1 32 32"
    },
    {
        iconId: "js",
        title: "javascript",
        viewBox: "2 1 21 21"
    },
    {
        iconId: "typescript",
        title: "TypeScript",
        viewBox: "2 1 46 46"
    },
    {
        iconId: "css",
        title: "CSS3"
    },
    {
        iconId: "react",
        title: "REACT",
        viewBox: "2 2 46 46"
    },
    {
        iconId: "redux",
        title: "REDUX",
        viewBox: "0 0 32 32"
    },
    {
        iconId: "redux",
        title: "REDUX TOOLKIT",
        viewBox: "0 0 32 32"
    },
    {
        iconId: "rtk",
        title: "RTK QUERY",
        viewBox: "0 0 256 272"
    },
    {
        iconId: "restAPI",
        title: "REST API",
        viewBox: "0 0 20 20"
    },
    {
        iconId: "axios",
        title: "AXIOS",
        viewBox: "0 0 24 24"
    },
    {
        iconId: "reactRouter",
        title: "REACT ROUTER",
        viewBox: "0 0 128 128"
    },
    {
        iconId: "git",
        title: "git",
        viewBox: "0 0 16 16"
    },
    {
        iconId: "zod",
        title: "zod",
        viewBox: "0 0 24 24"
    },
    {
        iconId: "reactHookForm",
        title: "react Hook Form",
        viewBox: "0 0 24 24"
    },
    {
        iconId: "materialUI",
        title: "material UI",
        viewBox: "0 -1 24 24"
    },
    {
        iconId: "postman",
        title: "postman",
        viewBox: "0 0 32 32"
    },
    {
        iconId: "tdd",
        title: "unit tests",
        viewBox: "0 0 2048 2048"
    },
    {
        iconId: "storyBook",
        title: "storybook",
        viewBox: "0 0 32 32"
    },
    {
        iconId: "styled-components",
        title: "Styled Components"
    },
    {
        iconId: "figma",
        title: "FIGMA"
    },

]


export const Skills = () => {
    return (
        <StyledSkills id={"skills"}>
            <Container>
                <Title>Skills</Title>
                <FlexContainer wrap={"wrap"} justify={"center"}>
                    <Fade cascade={true} direction={'up'} damping={0.1}>
                        {skillData.map((s, index) => {
                            return <Skill iconId={s.iconId} key={index}
                                          title={s.title}
                                          viewBox={s.viewBox}/>
                        })}
                    </Fade>
                </FlexContainer>
            </Container>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
    color: ${theme.colors.black};
    
    ${FlexContainer} {
        @media ${theme.media.tablet} {
            align-items: center;
            gap: 20px;
        }
        @media ${theme.media.mobile} {
                     gap: 10px;
                 }
    }
`

const Title = styled.h2`
    ${font({weight: 500, Fmax: 50, Fmin: 36})};
    color: ${theme.colors.secondaryBg};
    line-height: 120%;
    text-align: center;
    margin-bottom: 40px;
    
`