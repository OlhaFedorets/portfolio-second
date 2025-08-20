import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import {Menu} from "../menu/Menu";



export const DesktopMenu = () => {
    return (
        <StyledDesktopMenu>
            <Menu/>
        </StyledDesktopMenu>
    );
};


const StyledDesktopMenu = styled.nav`
    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;


        li:last-child {
            display: block;
            width: 134px;
            height: 50px;
            border-radius: 100px;
            padding: 10px 20px;
            background-image: ${theme.colors.gradientBG};

            &:hover {
                transform: scale(1.1);
                transition: transform 0.3s ease;
            }
        }
    }

    @media ${theme.media.tablet} {
        display: none;
    }
`