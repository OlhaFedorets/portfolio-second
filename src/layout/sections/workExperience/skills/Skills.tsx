import React from "react";
import styled from "styled-components";
import photo from "./../../../../assets/images/home.webp";
import { Indicator } from "./indicator/Indicator";
import { theme } from "../../../../styles/Theme";




export const Skills = () => {
    return (
        <StyledSkills>
           <h3>What I Can Do To Help Build Your Product</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
           <BrandName>
                <Photo src={photo}/>
                <div>
                <span>Alea Angelina</span>
                <span>Web Designer</span>
                </div>                
           </BrandName>
           <Indicator percent={"+52.5%"} title={"Task finished"}/>
           <Indicator percent={"+67.5%"} title={"Progress speed"}/>
        </StyledSkills>
    )
}


const StyledSkills = styled.div`
    max-width: 461px;
    font-family: "Poppins", sans-serif;
    color: ${theme.colors.black};
    margin-left: 145px;

    h3 {
        
        font-weight: 600;
        font-size: 40px;
        line-height: 125%;
        letter-spacing: 0.01em;
        
    }

    p {
        font-weight: 400;
        font-size: 20px;
        line-height: 180%;
        letter-spacing: 0.02em;
        color: rgba(0, 0, 0, 0.5);
        margin: 10px 0 40px;
    }
`



const BrandName = styled.div`
    display: flex;
    

    /* max-width: 259px; */
    div {
        display: flex;
        flex-direction: column;
        margin-left: 16px;

        span {
           font-weight: 500;
            font-size: 20px;
            /* line-height: 180%;
            letter-spacing: 0.02em; */
        }

        span:last-child {
            font-weight: 300;
            font-size: 15px;
            /* line-height: 180%;
            letter-spacing: 0.02em; */
        }
    }
`

const Photo = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
object-fit: cover;
`



