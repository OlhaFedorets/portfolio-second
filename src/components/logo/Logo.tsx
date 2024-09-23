import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme"



export const Logo = () => {
    return (
        <StyledLogo>
            <a href="">A</a>
            <span>Alea</span>
        </StyledLogo>
    );
};


const StyledLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    

    a {
        display: inline-block;
        width: 40px;
        height: 40px;        
        border-radius: 50%;
        background-image: ${theme.colors.gradientAccent};
        color: ${theme.colors.white};
        text-align: center;
        line-height: 40px;
    }
`