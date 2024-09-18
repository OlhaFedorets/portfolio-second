import React from "react";
import styled from "styled-components";
import ava from "./../../assets/images/avatar.webp"
import { FlexContainer } from "../FlexContainer";




export const Slider = () => {
    return (
        <StyledSlider>
            <Slide>
                <Name>John Wick</Name>
                <Position>Manager</Position>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquen</Text>
                <Photo src={ava} />
            </Slide>
        </StyledSlider>
    )
}


const StyledSlider = styled.div`
max-width: 793px;
    border: 1px solid red;
`
const Slide = styled.div`

text-align: center;

`

const Name = styled.span`
`

const Position = styled.span`
`

const Text = styled.p`
`
const Photo = styled.img`
max-width: 70px;
`

