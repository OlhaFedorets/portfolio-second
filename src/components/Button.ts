import styled from "styled-components";
import {theme} from "../styles/Theme";
import { font } from "../styles/Common";


type ButtonPropsType = {
    width?: string
    height?: string
    borderRadius?: string
}

export const Button = styled.button<ButtonPropsType>`
    border-radius: ${props => props.borderRadius || '30px'};
    width: ${props => props.width || '256px'};
    height: ${props => props.height || '64px'};
    background-image: ${theme.colors.gradientAccent};
    color: ${theme.colors.white};

    ${font({weight: 400, Fmax: 20, Fmin: 16})}

    &:hover {
        transform: scale(1.1);
        transition: transform 0.3s ease;
    }
    
    // a {
    //     color: ${theme.colors.white};
    //
    //     ${font({weight:400, Fmax: 20, Fmin: 16})}
    // }

    svg {
        margin-right: 10px;
    }

    @media ${theme.media.tablet} {
        width: 135px;
        height: 40px;
        bottom: -40px;
        padding: 0;
        
        svg {
            display: none;
        }
        
    }

   
}
`