import styled from "styled-components";
import { font } from "../styles/Common";
import { theme } from "../styles/Theme";
import React from "react";

type TitlePropsType = {
        align?: string,
        color?: string,
        fontSize?: number,
        marginBtm?: string,
        marginBtmTablet?: string,
        family?: string
}

export const SectionTitle = styled.h2<TitlePropsType>`

        ${({ family, fontSize, color }) =>
        font({
            family: family,
            weight: 700,
            color: color,
            Fmin: 36,
            Fmax: fontSize
        })};

        text-align: ${props => props.align || "center"};
        margin-bottom: ${props => props.marginBtm};

        @media ${theme.media.proTablet} {
           margin-bottom: ${props => props.marginBtmTablet};
        }
`