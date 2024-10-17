import styled from "styled-components";
import { theme } from "../styles/Theme";

type TextPropsType = {
    color?: string,
    weight?: string,
    marginBtm?: string,
}

export const SectionText = styled.p<TextPropsType>`
    color: ${props => props.color};
    font-weight: ${props => props.weight || "400"};
    font-size: 1.8rem;
    line-height: 144%;
    margin-bottom: ${props => props.marginBtm};
`