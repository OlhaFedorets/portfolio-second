import React from "react";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "react-scroll";

const menuItems = [
    {title: "Home", href: "home"},
    {title: "About Me", href: "about"},
    {title: "Skills", href: "skills"},
    {title: "Projects", href: "projects"},
    {title: "Contacts", href: "contact"},
]

export const Menu = () => {
    return (
        <ul>

            {menuItems.map((item, index) => {
                return <ListItem key={index}>
                    <NavLink
                        activeClass="active"
                        to={item.href}
                        smooth={true}
                        spy={true}
                        offset={-70}
                    >
                        {item.title}
                    </NavLink>
                </ListItem>
            })}

        </ul>
    );
};

const ListItem = styled.li`

`
const NavLink = styled(Link)`
    display: block;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    color: ${theme.colors.white};
    transition: 0.3s ease-in-out;

    &:hover, &.active {
        font-size: 22px;
        color: ${theme.colors.secondaryBg};
        transition: all 0.3s ease;
    }

`