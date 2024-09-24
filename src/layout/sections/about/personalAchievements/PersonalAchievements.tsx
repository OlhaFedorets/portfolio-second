import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/Theme";



export const PersonalAchievements = (props: { achievementItems: Array<string> }) => {
    return (
        <StyledAchievements>

            {props.achievementItems.map((item, index) => {
                return <AchievementItems key={index}>
                    {item}
                </AchievementItems>
            })}

        </StyledAchievements>
    )
}


const StyledAchievements = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 150px;
    margin-top: 50px;
`

const AchievementItems = styled.li`
    display: flex;
    align-items: center;
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 30px;
    line-height: 120%;
    letter-spacing: 0.01em;
    color: ${theme.colors.white};
    gap: 16px;


    &::before {
        display: inline-block;
        gap: 15px;
        border-radius: 30px;
        padding: 20px 30px;
        width: 130px;
        height: 130px;
        box-shadow: 0 10px 4px 0 rgba(0, 0, 0, 0.25);
        background-image: linear-gradient(214deg, #b75cff 0%, #671ae4 100%);
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-size: 50px;
        line-height: 180%;
        letter-spacing: 0.01em;
        color: ${theme.colors.white};
}
        
        &:nth-child(1)::before {
            content: "2K";            
        }

        &:nth-child(2)::before {
            content: "4K";
        }

        &:nth-child(3)::before {
            content: "9K";
        }
`