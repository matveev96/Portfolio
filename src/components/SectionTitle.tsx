import styled from "styled-components";

type TitlePropsType = {
        align?: string,
        color?: string,
        fontSize?: string
}

export const SectionTitle = styled.h2<TitlePropsType>`
        color: ${props => props.color};
        text-align: ${props => props.align || "center"};
        font-size: ${props => props.fontSize};
`