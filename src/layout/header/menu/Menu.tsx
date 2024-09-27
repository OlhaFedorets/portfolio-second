import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";


export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>

                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}

            </ul>
        </StyledMenu>
    );
};


const StyledMenu = styled.nav`
    ul {
    display: flex;
    align-items: center;
    gap: 40px;


    li:last-child a {
        display: block;
        width: 134px;
        height: 50px;
        border-radius: 100px;
        padding: 10px 20px;       
        background-image: ${theme.colors.gradientBG};
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
    
    
`