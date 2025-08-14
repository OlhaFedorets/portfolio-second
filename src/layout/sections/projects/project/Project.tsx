import React from 'react';
import styled from "styled-components";
import {Button} from "../../../../components/Button";
import {theme} from "../../../../styles/Theme";
import {Zoom} from "react-awesome-reveal";


type WorkPropsType = {
    title: string
    text: string
    src: string
    href: string
}

export const Project: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <StyledProject>
            <Zoom damping={0.1}>
            <StyledImageWrapper>
                <StyledImage src={props.src} alt=""/>
                <Button as={'a'} href={props.href} target={'_blank'} width={'200px'} height={'40px'}>
                    View Project
                </Button>
            </StyledImageWrapper>
            <StyledDescription>
                <StyledTitle>{props.title}</StyledTitle>
                <StyledText>{props.text}</StyledText>
            </StyledDescription>
            </Zoom>
        </StyledProject>
    );
};




const StyledProject = styled.div`
    width: 400px;
    flex-grow: 1;
    max-width: 540px;
    background-color: ${theme.colors.secondaryBg};
`

const StyledImageWrapper = styled.div`
    position: relative;

    ${Button} {
        text-align: center;
        line-height: 40px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -40%);
        transition: ${theme.animations.transition};
        
        &:hover {
        transform: translate(-50%, -50%) scale(1.1);
    }
    }

    &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(2px);
        opacity: 0;
        transition: ${theme.animations.transition};
    }

    &:hover {
        &::before {
            opacity: 1;
        }
    }
    
    @media ${theme.media.tablet} {
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
        }
    }
`

const StyledImage = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const StyledDescription = styled.div`
    padding: 25px 20px;
`

const StyledTitle = styled.h3`

`

const StyledText = styled.p`
    margin: 14px 0 10px;
`