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
            <Copyright>Created by Zarror | All Reserved!</Copyright>
        </StyledFooter>
    )
}


const StyledFooter = styled.section`
    background-color: ${theme.colors.black} !important;
`

const SocialList = styled.ul`

`
const SocialItem = styled.li`

`

const SocialLink = styled.a`

`
const Copyright = styled.small`

`