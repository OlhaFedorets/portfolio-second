import React from "react";
import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";



export const SocialNetworks = () => {
    return (
        <StyledSocialNetworks>
            <ul>
                <li>
                    <a href=""><Icon iconId={"dribble"} width={"122"}/></a>
                </li>
                <li>
                    <a href=""><Icon iconId={"linkedin"} width={"123"}/></a>
                </li>
                <li>
                    <a href=""><Icon iconId={"medium"} width={"152"}/></a>
                </li>
                <li>
                    <a href=""><Icon iconId={"behance"} width={"162"}/></a>
                </li>
            </ul>
        </StyledSocialNetworks>
    );
};


const StyledSocialNetworks = styled.section`
    
    background-color: #bbf3bb;
    
    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 150px;
    }
`
