import styled from "styled-components";
import { theme } from "../styles/Theme";

type TextPropsType = {
    color?: string,
    weight?: string,
    marginBtm?: string,
    marginTop?: string,
    grow?: number,
    fontSizeTablet?: string

}

export const SectionText = styled.p<TextPropsType>`
    color: ${props => props.color};
    font-weight: ${props => props.weight || "400"};
    font-size: 1.8rem;
    line-height: 1.4;
    margin-bottom: ${props => props.marginBtm};
    margin-top: ${props => props.marginTop};
    flex-grow: ${props => props.grow};

    @media ${theme.media.proTablet} {
        font-size: ${props => props.fontSizeTablet};
    }
`