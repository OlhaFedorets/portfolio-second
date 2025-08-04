import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { FlexContainer } from "../../components/FlexContainer";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";
import { MobileMenu } from "./mobileMenu/MobileMenu";
import {DesktopMenu} from "./desktopMenu/DesktopMenu";


export const Header: React.FC = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexContainer justify="space-between" align="center">
                    <Logo />
                    <DesktopMenu />
                    <MobileMenu />
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