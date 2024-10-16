import React from "react";
import { Icon } from '../icon/Icon';

type LogoPropsType = {
    color?: string,
    variation?: 'logoGradient'
}

export const Logo = (props:LogoPropsType) => {
    return (
        <a href="#">
            <Icon iconId={props.variation || "logo"} height="80" width="80" viewBox="0 -20 100 100" color={props.color}/>
        </a>
    )
}