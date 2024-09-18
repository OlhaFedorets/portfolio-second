import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type WorkAreaPropsType = {
    iconId: string,
    title: string,
    text: string,
    
}


export const WorkArea = (props: WorkAreaPropsType) => {
    return (
        <StyledWorkArea>
           <Icon iconId={props.iconId}/>
           <WorkTitle>{props.title}</WorkTitle>
           <WorkText>{props.text}</WorkText>
        </StyledWorkArea>
    )
}


const StyledWorkArea = styled.div`
background-color: #fbc1cb;`

const WorkIcon = styled.img``

const WorkTitle = styled.h3``

const WorkText = styled.p``