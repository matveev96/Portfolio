import React from "react";
import { Icon } from '../icon/Icon';
import styled from "styled-components";

type LogoPropsType = {
    color?: string,
    variation?: 'logoGradient'
}

export const Logo = (props:LogoPropsType) => {
    return (
        <StyledLogo href="#">
            <Icon iconId={props.variation || "logo"} height="59" width="97" viewBox="0 0 100 60" color={props.color}/>
        </StyledLogo>
    )
}

const StyledLogo = styled.a`
    display: inline-block;
    height: 59px;
`