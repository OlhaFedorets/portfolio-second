import React from "react";
import styled from "styled-components";
import photo from "./../../../../assets/images/home.webp";
import { Indicator } from "./indicator/Indicator";




export const Skills = () => {
    return (
        <StyledSkills>
           <h3>What I Can Do To Help Build Your Product</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
           <BrandName>
                <Photo src={photo}/>
                <span>Alea Angelina</span>
                <span>Web Designer</span>
           </BrandName>
           <Indicator percent={"+52.5%"} title={"Task finished"}/>
           <Indicator percent={"+67.5%"} title={"Progress speed"}/>
        </StyledSkills>
    )
}


const StyledSkills = styled.div`

`

const BrandName = styled.div`
max-width: 259px;

`

const Photo = styled.img`
max-width: 50px`



