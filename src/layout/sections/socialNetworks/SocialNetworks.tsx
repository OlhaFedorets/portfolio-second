import React from "react";
import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import { theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";
import { FlexContainer } from "../../../components/FlexContainer";




export const SocialNetworks = () => {
    return (
        <StyledSocialNetworks>
            <Container>
            <ul>
                <li>
                    <a href=""><Icon iconId={"dribble"}  width={"123"} height={"38"} viewBox={"0 0 130 38"}/></a>
                </li>
                <li>
                    <a href=""><Icon iconId={"linkedin"} width={"132"} height={"38"} viewBox={"0 0 132 38"}/></a>
                </li>
                <li>
                    <a href=""><Icon iconId={"medium"} width={"161"} height={"30"} viewBox={"0 0 161 38"}/></a>
                </li>
                <li>
                    <a href=""><Icon iconId={"behance"} width={"162"} height={"38"} viewBox={"0 0 167 38"}/></a>
                </li>
            </ul>
            </Container>                                                          
        </StyledSocialNetworks>
    );
};


const StyledSocialNetworks = styled.section`
        
    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        li>a {
            display: inline-block;
            color: rgba(255, 255, 255, 0.5);
            transition: color 0.3s, transform 0.3s;
            

            &:hover {
            color: ${theme.colors.white};
                transform: translateY(-4px);
            }
        }

        @media screen and (max-width: 600px) {
            flex-direction: column;
            gap: 15px;;
        }
    }
`
