import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "./menu/Menu";
import { FlexContainer } from "../../components/FlexContainer";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";

const menuItems = ["Home", "About", "Services", "Let's talk"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexContainer justify="space-between" align="center">
                    <Logo />
                    <Menu menuItems={menuItems} />
                </FlexContainer>
            </Container>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    background-image: ${theme.colors.gradientBG};
    color: ${theme.colors.white};
    padding: 20px 0;    
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999999;    
`