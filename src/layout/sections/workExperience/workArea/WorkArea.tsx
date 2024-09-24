import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { theme } from "../../../../styles/Theme";

type WorkAreaPropsType = {
    iconId: string,
    width: string,
    height: string,
    viewBox: string,
    title: string,
    text: string
}


export const WorkArea = (props: WorkAreaPropsType) => {
    return (
        <StyledWorkArea>
            <WorkIcon>
                <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox} />
            </WorkIcon>
            <WorkTitle>{props.title}</WorkTitle>
            <WorkText>{props.text}</WorkText>
        </StyledWorkArea>
    )
}


const StyledWorkArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 288px;
    height: 460px;
    padding: 100px 20px;
    color: ${theme.colors.white};
    box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.25);
    background-image:${theme.colors.gradientAccent};
    border-radius: 30px;
    margin-right: 15px;
`

const WorkIcon = styled.div`
vertical-align: middle
`

const WorkTitle = styled.h3`
font-family: "Poppins", sans-serif;
font-weight: 700;
font-size: 30px;
line-height: 120%;
text-align: center;
margin: 100px 0 10px;
`

const WorkText = styled.p`
font-family: "Poppins", sans-serif;
font-weight: 500;
font-size: 20px;
line-height: 120%;
text-align: center;
color: rgba(255, 255, 255, 0.5);
`