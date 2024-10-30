import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

type SubtitlePropsType = {
    align?: string,
    color?: string,
    fontSize?: number,
    marginBtm?: string,
    marginBtmTablet?: string,
    marginBtmMobile?: string,
    weight?: number
}

export const SectionSubtitle = styled.h4<SubtitlePropsType>`

    ${({ fontSize, color, weight }) =>
        font({
            weight: weight || 400,
            color: color,
            Fmin: 22,
            Fmax: fontSize
    })};

    text-align: ${props => props.align || "center"};
    margin-bottom: ${props => props.marginBtm};

    @media ${theme.media.proTablet} {
        margin-bottom: 30px;
    }
    @media ${theme.media.mobile} {
        margin-bottom: ${props => props.marginBtmMobile};
    }
`