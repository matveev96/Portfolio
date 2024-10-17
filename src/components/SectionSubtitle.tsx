import styled from "styled-components";

type SubtitlePropsType = {
    align?: string,
    color?: string,
    fontSize?: string,
    marginBtm?: string
}

export const SectionSubtitle = styled.h4<SubtitlePropsType>`
    font-weight: 400;
    color: ${props => props.color};
    text-align: ${props => props.align || "center"};
    font-size: ${props => props.fontSize};
    margin-bottom: ${props => props.marginBtm};
`