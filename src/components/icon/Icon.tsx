import React from "react";
import iconsSprite from "../../assets/images/icons_sprite.svg";

type IconPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string,
    color?: string
}

export const Icon = (props:IconPropsType) => {
    return (
        <svg width={props.width || "50"} height={props.height || "50"} viewBox={props.viewBox || "0 0 120 120"} xmlns="http://www.w3.org/2000/svg">
            <use 
            xlinkHref={`${iconsSprite}#${props.iconId}`}
            fill={props.color || "currentColor"}
            />
        </svg>
    )
}