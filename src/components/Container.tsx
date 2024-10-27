import styled from "styled-components";

type ContainerPropsType = {
    align?: string
}

export const Container = styled.div<ContainerPropsType>`
    max-width: 1225px;
    width: 100%;
    min-height: 100%;
    padding: 0 15px;
    margin: 0 auto;
    text-align: ${props => props.align};
`