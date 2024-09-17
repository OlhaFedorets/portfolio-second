import React from "react";
import styled from "styled-components";



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
    gap: 17px;
`