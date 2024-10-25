import styled from "styled-components";
import { theme } from "../styles/Theme";

type SubtitlePropsType = {
    align?: string,
    color?: string,
    fontSize?: number,
    marginBtm?: string,
    marginBtmTablet?: string,
    weight?: string
}

export const SectionSubtitle = styled.h4<SubtitlePropsType>`
    font-weight: ${props => props.weight || "400"};
    color: ${props => props.color};
    text-align: ${props => props.align || "center"};
    font-size: ${props => props.fontSize};
    font-size: calc((100vw - 576px)/(1600 - 576) * (${props => props.fontSize} - 22) + 22px);
    margin-bottom: ${props => props.marginBtm};

    @media ${theme.media.proTablet} {
           margin-bottom: ${props => props.marginBtmTablet};
    }
`