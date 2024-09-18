import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { FlexContainer } from "../../components/FlexContainer";

const menuItems = ["Home", "About","Services","Let's talk"]

export const Header = () => {
    return (
        <StyledHeader>
            <FlexContainer justify={"space-between"}>
                <Logo />
                <Menu menuItems={menuItems}/>
            </FlexContainer>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    background-color: lightpink;
`