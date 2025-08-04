import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const menuItems = [
    {title: "Home", href: "home" },
    {title: "About", href: "about" },
    {title: "Services", href: "services" },
    {title: "Let's talk", href: "contact" },
    ]

export const Menu = () => {
    return (
            <ul>

                {menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href={`#${item.href}`}>{item.title}</Link>
                    </ListItem>
                })}

            </ul>
    );
};

const ListItem = styled.li`
    
`
const Link = styled.a`
    display: block;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    color: ${theme.colors.white};
    
    &:hover {
        transform: translateY(-4px);
    }
`