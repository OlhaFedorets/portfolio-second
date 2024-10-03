import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";






export const Footer = () => {
    return (
        <StyledFooter>
            <SocialList>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId="dribble_logo" width={"25"} height={"25"} viewBox={"0 0 25 25"}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId="upwork_logo" width={"25"} height={"25"} viewBox={"0 0 25 25"}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId="youtube_logo" width={"25"} height={"25"} viewBox={"0 0 25 25"}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId="linkedin_logo" width={"25"} height={"25"} viewBox={"0 0 25 25"}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>                        
                        <Icon iconId="github_logo" width={"25"} height={"25"} viewBox={"0 0 25 25"}/>
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
    display: flex;
    justify-content: center;
    gap: 25px;
    margin-bottom: 100px;
`
const SocialItem = styled.li`
    
`

const SocialLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    width: 45px;
    height: 45px;
    background: rgba(255, 255, 255, 0.25);
    color: rgba(255, 255, 255, 0.5);

    &:hover {
        color: ${theme.colors.white};
        transform: translateY(-4px);
    }    
`
const Copyright = styled.small`
    display: block;
    ${font({weight: 500, Fmax: 20, Fmin: 16})}
    /* font-weight: 500;
    font-size: 20px; */
    letter-spacing: 0.02em;
    text-align: center;
    

    span {
        font-weight: 700;
        color: ${theme.colors.white};
    }
`