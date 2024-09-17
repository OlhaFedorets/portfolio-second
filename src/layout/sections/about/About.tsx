import React from "react";
import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import { FlexContainer } from "../../../components/FlexContainer";



export const About = () => {
    return (
        <StyledAbout>
            <FlexContainer>
                <h2>About Me.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</p>
                <ul>
                    <li>Projects Done</li>
                    <li>Happy Clients</li>
                    <li>Clients on Worldwide</li>
                </ul>
            </FlexContainer>
        </StyledAbout>
    );
};


const StyledAbout = styled.div`
    background-color: #f3edaa ;
`