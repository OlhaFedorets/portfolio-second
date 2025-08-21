import React from "react";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Icon} from "../../../../components/icon/Icon";
import {FlexContainer} from "../../../../components/FlexContainer";

type SkillPropsType = {
    iconId: string;
    title: string;
    viewBox?: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexContainer direction={"column"} align={"center"}>
                <StledIconWrapper>
                    <Icon iconId={props.iconId} viewBox={props.viewBox}/>
                </StledIconWrapper>
                <StyledSkillTitle>{props.title}</StyledSkillTitle>
            </FlexContainer>
        </StyledSkill>
    )
}


const StyledSkill = styled.div`
    width: 200px;
    flex-grow: 1;
    padding: 20px 0 20px;
    margin: 10px;

    @media ${theme.media.mobile} {
        margin: 0;
        width: 120px;
        height: 160px;
    }
`

const StledIconWrapper = styled.div`
    position: relative;
    z-index: 1;

    &::before {
        content: "";
        display: inline-block;
        border-radius: 30px;
        width: 100px;
        height: 100px;
        box-shadow: 0 10px 4px 0 rgba(0, 0, 0, 0.25);
        background-color: ${theme.colors.secondaryBg};
        transform: rotate(45deg) translate(-50%, -50%);
        opacity: 0.6;

        position: absolute;
        left: -50%;
        top: 80%;
        z-index: -1;
    }
`

const StyledSkillTitle = styled.h3`
    padding: 40px 0;
    text-transform: uppercase;
    text-align: center;

    @media ${theme.media.mobile} {
        padding: 20px 0;
    }
`