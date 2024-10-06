import styled from "styled-components"

type ContainerPropsType = {
    maxWidth?: string
    padding?: string
}

export const Container = styled.div<ContainerPropsType>`
    max-width: ${props => props.maxWidth || "1230px"};
    width: 100%;
    min-height: 100%;
    padding:  ${props => props.padding || "0 15px"};
    margin: 0 auto;
` 