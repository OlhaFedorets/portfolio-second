import React from "react";
import styled from "styled-components";
import { FlexContainer } from "../../../../../components/FlexContainer";

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
   /* max-width: 132px  */
`
const Percentages = styled.span`
    
`
const IndicatorTitle = styled.h5`
    
`

