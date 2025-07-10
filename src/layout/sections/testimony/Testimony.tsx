import React from "react";
import styled from "styled-components";
import { FlexContainer } from "../../../components/FlexContainer";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { theme } from "../../../styles/Theme";
import rectangleImage from "../../../assets/images/Rectangle-35.webp"



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
    color: ${theme.colors.white};
    
    position: relative;
    
    ::before {
        content: "";
        background-image: url(${rectangleImage});
        display: inline-block;
        width: 50%;
        height: 100%;
        background-size: cover;
        top: 0px;

        position: absolute;
        
    }
`
