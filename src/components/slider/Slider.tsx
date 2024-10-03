import React from "react";
import styled from "styled-components";
import ava from "./../../assets/images/avatar.webp";
import { font } from "../../styles/Common";




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
    margin-top: 30px;
    text-align: center;
    ${font({weight: 500, Fmax: 20, Fmin: 16})}

`

const Name = styled.span`
${font({family: "Playfair Display", weight: 700, Fmax: 30, Fmin: 26})}
    /* font-family: "Playfair Display", sans-serif;
    font-weight: 700;
    font-size: 30px; */
    line-height: 120%;
    letter-spacing: 0.01em;

`

const Position = styled.span`
    display: block;
    line-height: 120%;
    letter-spacing: 0.02em;
    text-align: center;
    margin: 10px 0 20px;;
`

const Text = styled.p`
    line-height: 120%;
    letter-spacing: 0.02em;
    text-align: center;
    opacity: 0.5;
`
const Photo = styled.img`
    max-width: 70px;
    border-radius: 50%;
    margin-top: 40px;
`

