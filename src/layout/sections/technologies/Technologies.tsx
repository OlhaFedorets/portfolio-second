import React from "react";
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";
import {FlexContainer} from "../../../components/FlexContainer";

const technologiesData = [
    {
        iconId: "js1",
        viewBox: "0 0 16 16"
    },
    {
        iconId: "ts1",
        viewBox: "0 0 16 16"
    },
    {
        iconId: "react1",
        viewBox: "0 0 16 16"
    },
    {
        iconId: "redux1",
        viewBox: "2 2 20 20"
    },
]


export const Technologies = () => {
    return (
        <StyledTechnologies>
            <Container>
                <FlexContainer justify={"space-between"} align={"center"} wrap={"wrap"}>
                    {technologiesData.map((t, index) => {
                        return (
                            <StyledTechnology>
                                <Icon
                                    iconId={t.iconId}
                                    width={"100"}
                                    height={"100"}
                                    viewBox={t.viewBox}
                                    key={index}/>
                            </StyledTechnology>
                        )
                    })}
                </FlexContainer>
            </Container>
        </StyledTechnologies>
    );
};


const StyledTechnologies = styled.section`
    padding: 30px;
`
const StyledTechnology = styled.div`
    color: rgba(255, 255, 255, 0.5);
    transition: color 0.3s, transform 0.3s;

    &:hover {
        color: ${theme.colors.white};
    }

    @media screen and (max-width: 600px) {
        display: none;
    }
`