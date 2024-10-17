import styled from "styled-components";

type TitlePropsType = {
        align?: string,
        color?: string,
        fontSize?: string,
        marginBtm?: string
}

export const SectionTitle = styled.h2<TitlePropsType>`
        font-weight: 700;
        color: ${props => props.color};
        text-align: ${props => props.align || "center"};
        font-size: ${props => props.fontSize};
        margin-bottom: ${props => props.marginBtm};
`