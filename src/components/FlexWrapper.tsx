import React from "react";
import styled from "styled-components";
import { theme } from "../styles/Theme";

type FlexWrapperPropsType = {
    direction?: string,
    justfy?: string,
    tabletJustify?: string,
    mobileJustify?: string,
    align?: string,
    mobileAlign?: string,
    wrap?: string,
    gap?: string,
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justfy || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    gap: ${props => props.gap};
    height: 100%;

    @media ${theme.media.proTablet} {
        justify-content: ${props => props.tabletJustify};
    }

    @media ${theme.media.mobile} {
        align-items: ${props => props.mobileAlign};
        justify-content: ${props => props.mobileJustify};
    }

`