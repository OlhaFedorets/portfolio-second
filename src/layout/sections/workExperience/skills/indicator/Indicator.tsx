import React from "react";
import styled from "styled-components";
import { FlexContainer } from "../../../../../components/FlexContainer";
import { font } from "../../../../../styles/Common"

type IndicatorPropsType = {
    percent: string,
    title: string,
}




export const Indicator = (props: IndicatorPropsType) => {
    return (
           <StyledIndicator>             
            <Percentages>{props.percent}</Percentages>
            <IndicatorTitle>{props.title}</IndicatorTitle>                       
           </StyledIndicator>
       
    )
}


const StyledIndicator = styled.div`
`
const Percentages = styled.span`
    ${font({weight: 600, Fmax: 36, Fmin: 26})}
    /* font-weight: 600;
    font-size: 36px; */
    line-height: 180%;
    letter-spacing: 0.01em;

`
const IndicatorTitle = styled.h5`
    text-align: center;
    ${font({weight: 400, Fmax: 15, Fmin: 12})}
    /* font-weight: 400;
    font-size: 15px; */
    line-height: 93%;
    letter-spacing: 0.02em;
    color: #747578;
`

