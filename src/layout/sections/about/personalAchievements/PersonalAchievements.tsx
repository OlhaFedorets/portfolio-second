import React from "react";
import styled from "styled-components";


export const PersonalAchievements = () => {
    return (
        <StyledAchievements>
            <li>Projects Done</li>
            <li>Happy Clients</li>
            <li>Clients on Worldwide</li>
        </StyledAchievements>
    )
}


const StyledAchievements = styled.ul`

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 150px;

        li::before {
        display: inline-block;
        width: 50px;
        height: 50px;
        border: 1px solid black;
        gap: 15px
        }


        li:nth-child(1)::before {
            content: "2K";
        }

        li:nth-child(2)::before {
            content: "4K";
        }

        li:nth-child(3)::before {
            content: "9K";
        }
`