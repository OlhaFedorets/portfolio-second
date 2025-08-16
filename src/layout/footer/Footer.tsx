import React from "react";
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";
import {Container} from "../../components/Container";
import {FlexContainer} from "../../components/FlexContainer";

const iconsData = [
    {
        iconId: "CV",
        viewBox: "0 0 16 16",
        href: ''
    },
    {
        iconId: "TG",
        viewBox: "0 0 24 24",
        href: "https://t.me/olyusha_5"
    },
    {
        iconId: "linkedin_logo",
        viewBox: "0 0 25 25",
        href: ''
    },
    {
        iconId: "github_logo",
        viewBox: "0 0 25 25",
        href: "https://github.com/OlhaFedorets"
    },
    {
        iconId: "codewars",
        viewBox: "0 0 32 32",
        href: "https://www.codewars.com/users/OlhaFedorets"
    },
]


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexContainer justify="space-between" align="center">
                    <PersonalInfo>
                        <p>Fedorets Olga</p>
                        <p>Frontend Developer</p>
                    </PersonalInfo>
                    <PersonalInfo>
                        <p>fedoretsolha@gmail.com</p>
                        <p>+7 959 132-36-97</p>
                    </PersonalInfo>
                    <SocialList>
                        {iconsData.map((i, index) => {
                            return (
                                <SocialLink as={'a'} href={i.href} target={'_blank'} key={index}>
                                    <Icon iconId={i.iconId} width={"25"} height={"25"} viewBox={i.viewBox} key={index}/>
                                </SocialLink>
                            )
                        })}
                    </SocialList>
                </FlexContainer>

            </Container>

        </StyledFooter>
    )
}


const StyledFooter = styled.footer`
    background-color: ${theme.colors.secondaryBg};
    color: rgba(255, 255, 255, 0.5);
    padding: 55px 0;

    ${FlexContainer} {
        @media ${theme.media.tablet} {
            flex-direction: column;
            gap: 25px;
        }
    }
`

const PersonalInfo = styled.div`
    ${font({weight: 500, Fmax: 20, Fmin: 16})} //color: ${theme.colors.white};
`

const SocialList = styled.ul`
    display: flex;
    justify-content: center;
    gap: 25px;

`

const SocialLink = styled.li`
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
    }
`