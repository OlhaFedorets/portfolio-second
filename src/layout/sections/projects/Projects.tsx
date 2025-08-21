import React from "react";
import styled from "styled-components";
import {FlexContainer} from "../../../components/FlexContainer";
import {theme} from "../../../styles/Theme";
import rectangleImage from "../../../assets/images/Rectangle-35.webp"
import {Container} from "../../../components/Container";
import {Project} from "./project/Project";
import todoImg from "../../../assets/images/proj1.jpg";
import resumeImg from "../../../assets/images/proj2.jpg";
import {font} from "../../../styles/Common";

const projectsData = [
    {
        title: "Todo List",
        src: todoImg,
        text: "The \"Todo List\" project provides a convenient interface for creating, editing, deleting, and displaying tasks and to-do lists. Users can easily add new tasks, set their completion status. ",
        href: "https://olhafedorets.github.io/todo/#",
        id: 1
    },
    {
        title: "Resume",
        src: resumeImg,
        text: "The project that you are currently in. Designed using Styled Components library",
        href: "https://github.com/OlhaFedorets/portfolio-second",
        id: 2
    },

]


export const Projects = () => {
    return (
        <StyledProjects id="projects">
            <Container>
                <Title>Projects</Title>
                <FlexContainer justify={"center"} wrap={"wrap"}>
                    {projectsData.map((w) => {
                        return (
                            <Project title={w.title}
                                     src={w.src}
                                     text={w.text}
                                     href={w.href}
                                     key={w.id}
                            />
                        )
                    })}
                </FlexContainer>
            </Container>
        </StyledProjects>
    )
}

const StyledProjects = styled.section`
    min-height: 50vh;
    color: ${theme.colors.white};

    ${FlexContainer} {
        gap: 80px;
    }

    position: relative;

    ::before {
        content: "";
        background-image: url(${rectangleImage});
        display: inline-block;
        width: 50%;
        height: 100%;
        background-size: cover;
        top: 0;

        position: absolute;
    }
`
const Title = styled.h2`
    ${font({weight: 500, Fmax: 50, Fmin: 36})}
    line-height: 120%;
    text-align: center;
    margin-bottom: 70px;
`
