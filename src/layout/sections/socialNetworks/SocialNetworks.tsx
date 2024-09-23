import React from "react";
import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";




export const SocialNetworks = () => {
    return (
        <StyledSocialNetworks>
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
        </StyledSocialNetworks>
    );
};


const StyledSocialNetworks = styled.section`
        
    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        gap:150px;
        //height: 100%;
        //min-height: 135px;
        padding: 55px 0 50px;
    }
`
