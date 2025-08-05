import React from "react";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "react-scroll";

const menuItems = [
    {title: "Home", href: "home"},
    {title: "About", href: "about"},
    {title: "Services", href: "services"},
    {title: "Contact", href: "contact"},
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

    &:hover, &.active {
        font-size: 22px;
        color: #281471;
        transition: all 0.3s ease;
    }

`