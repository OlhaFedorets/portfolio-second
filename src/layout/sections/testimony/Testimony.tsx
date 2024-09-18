import React from "react";
import styled from "styled-components";
import { FlexContainer } from "../../../components/FlexContainer";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";




export const Testimony = () => {
    return (
        <StyledTestimony>
            <FlexContainer direction={"column"} align={"center"}>
                <Icon iconId={"quotes"} />
                <Slider />
            </FlexContainer>
        </StyledTestimony>
    )
}


const StyledTestimony = styled.section`
    min-height: 50vh;
    background-color: rgb(241, 213, 171);
`
