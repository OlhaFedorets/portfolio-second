import React from "react";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "react-scroll";

type MenuProps = {
    closeMenuWhenClicked?: () => void
}

const menuItems = [
    {title: "Home", href: "home"},
    {title: "About Me", href: "about"},
    {title: "Skills", href: "skills"},
    {title: "Projects", href: "projects"},
    {title: "Contacts", href: "contact"},
]

export const Menu = ({closeMenuWhenClicked} : MenuProps) => {

    const closeMenu = () => {
        closeMenuWhenClicked && closeMenuWhenClicked()
    }

    return (
        <ul>
            {menuItems.map((item, index) => {
                return (
                    <li key={index}>
                        <NavLink
                            activeClass="active"
                            to={item.href}
                            smooth={true}
                            spy={true}
                            offset={-70}
                            onClick={closeMenu}
                        >
                            {item.title}
                        </NavLink>
                    </li>
                )
            })}
        </ul>
    );
};


const NavLink = styled(Link)`
    display: block;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    color: ${theme.colors.white};
    transition: 0.3s ease-in-out;

    &:hover, &.active {
        color: ${theme.colors.secondaryBg};
        transition: all 0.3s ease;
    }

`
