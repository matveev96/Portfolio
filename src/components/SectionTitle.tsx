import styled from "styled-components";
import { font } from "../styles/Common";
import { theme } from "../styles/Theme";

type TitlePropsType = {
        align?: string,
        color?: string,
        fontSize?: number,
        marginBtm?: string,
        marginBtmTablet?: string,
        family?: string
}

export const SectionTitle = styled.h2<TitlePropsType>`
        
        font-family: ${props => props.family};
        font-weight: 700;
        font-size: calc((100vw - 576px)/(1600 - 576) * (${props => props.fontSize} - 36) + 36px);
        color: ${props => props.color};

        text-align: ${props => props.align || "center"};
        margin-bottom: ${props => props.marginBtm};

        @media ${theme.media.proTablet} {
           margin-bottom: ${props => props.marginBtmTablet};
        }
`