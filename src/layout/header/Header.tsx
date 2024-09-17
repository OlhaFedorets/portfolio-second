import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "./menu/Menu";
import { FlexContainer } from "../../components/FlexContainer";

export const Header = () => {
    return (
        <StyledHeader>
            <FlexContainer justify={"space-between"}>
                <Logo />
                <Menu />
            </FlexContainer>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    background-color: lightpink;
`