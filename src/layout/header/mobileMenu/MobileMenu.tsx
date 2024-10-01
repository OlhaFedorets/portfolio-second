import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";


export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMobileMenu>
            <BurgerButton>
                <span>

                </span>
            </BurgerButton>
            <MobileMenuPopUp>
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
    


    
    @media ${theme.media.tablet} {
        display: none;
    }
`

const MobileMenuPopUp = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-image: ${theme.colors.gradientAccent};

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

const BurgerButton = styled.button`
    position: fixed;
    width: 200px;
    height: 200px;
    top: -100px;
    right: -100px;

    span {
        display: block;
        width: 36px;
        height: 2px;
        color: ${theme.colors.white};
        position: absolute;
        left: 40px;
        bottom: 50px;

        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            color: ${theme.colors.white};
            position: absolute;
            transform: translateY(-10px);
        }

        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            color: ${theme.colors.white};
            position: absolute;
            transform: translateY(10px);
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