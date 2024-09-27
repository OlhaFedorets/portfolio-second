import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { theme } from "../../styles/Theme";






export const Footer = () => {
    return (
        <StyledFooter>            
            <SocialList>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId="dribble_logo" />
                        <Icon iconId="upwork_logo" />
                        <Icon iconId="youtube_logo" />
                        <Icon iconId="linkedin_logo" />
                        <Icon iconId="github_logo" />
                    </SocialLink>
                </SocialItem>
            </SocialList>
            <Copyright>Created by <span>Zarror</span> | All Reserved!</Copyright>
        </StyledFooter>
    )
}


const StyledFooter = styled.footer`
    background-color: ${theme.colors.black};
    color: rgba(255, 255, 255, 0.5);
    padding-bottom: 55px;
`

const SocialList = styled.ul`
    margin-bottom: 100px;
`
const SocialItem = styled.li`

`

const SocialLink = styled.a`

`
const Copyright = styled.small`
    display: block;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 0.02em;
    text-align: center;
    

    span {
        font-weight: 700;
        color: ${theme.colors.white};
    }
`