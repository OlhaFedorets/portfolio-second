import React from "react";
import styled, {css} from "styled-components";
import { theme } from "../../../styles/Theme";


export const MobileMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={true}>
                <span>

                </span>
            </BurgerButton>
            <MobileMenuPopUp isOpen={true}>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
            </ul>
            </MobileMenuPopUp>            
        </StyledMobileMenu>
    );
};


const StyledMobileMenu = styled.nav`
    display: none;
    
    @media ${theme.media.tablet} {
        display: block;
    }
`

const MobileMenuPopUp = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-image: ${theme.colors.gradientAccent};
    display: none;

    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        align-items: center;
        justify-content: center;
    `}

    ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    }

    li:last-child a {
        display: block;
        width: 134px;
        height: 50px;
        border-radius: 100px;
        padding: 10px 20px;       
        background-image: ${theme.colors.gradientBG};
        }

`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    width: 200px;
    height: 200px;
    top: -100px;
    right: -100px;
    z-index: 9999999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.white};
        position: absolute;       
        bottom: 40px;

        ${props => props.isOpen && css<{isOpen: boolean}>`
         background-color: rgba(255, 255, 255, 0);
    `}

        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.white};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
            transform: rotate(-45deg) translateY(0);
    `}
        }

        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.white};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
            transform: rotate(45deg) translateY(0);
            width:36px;
    `}
        }
    }
`

const ListItem = styled.li`
    
`
const Link = styled.a`
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    color: ${theme.colors.white};
    
    &:hover {
        transform: translateY(-4px);
    }
`