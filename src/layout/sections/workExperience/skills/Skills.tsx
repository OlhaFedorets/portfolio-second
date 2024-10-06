import React from "react";
import styled from "styled-components";
import photo from "./../../../../assets/images/home.webp";
import { Indicator } from "./indicator/Indicator";
import { theme } from "../../../../styles/Theme";
import { font } from "../../../../styles/Common"




export const Skills = () => {
    return (
        <StyledSkills>
            <div>
            <h3>What I Can Do To Help Build Your Product</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            </div>
            <BrandName>
                <Photo src={photo} />
                <div>
                    <span>Alea Angelina</span>
                    <span>Web Designer</span>
                </div>
            </BrandName>
            <Indicators>
                <Indicator percent={"+52.5%"} title={"Task finished"} />
                <Indicator percent={"+67.5%"} title={"Progress speed"} />
            </Indicators>
        </StyledSkills>
    )
}


const StyledSkills = styled.div`
    max-width: 461px;
    color: ${theme.colors.black};
    
    h3 {
        ${font({weight: 600, Fmax: 40, Fmin: 29})};
        line-height: 125%;
        letter-spacing: 0.01em;        
    }

    p {
        ${font({weight: 400, Fmax: 20, Fmin: 16})};
        line-height: 180%;
        letter-spacing: 0.02em;
        color: rgba(0, 0, 0, 0.5);
        margin: 10px 0 40px;
    }
`

const BrandName = styled.div`
    display: flex;
    

        div {
            display: flex;
            flex-direction: column;
            margin-left: 16px;

        span {
            ${font({weight: 500, Fmax: 20, Fmin: 16})}
        }

        span:last-child {
            ${font({weight: 300, Fmax: 15, Fmin: 12})}
        }
    }
`

const Photo = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
`


const Indicators = styled.div`
    display: flex;
    gap: 60px;
    margin-top: 80px;

    position: relative;

    &::before {
        content: "";
        display: inline-block;
        border: 1px solid #000;
        max-width: 420px;
        width: 100%;
        height: 0px;
        top: -40px;

        position: absolute;
    }
`
