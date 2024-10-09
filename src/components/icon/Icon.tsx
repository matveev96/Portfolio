import React from "react";
import iconsSprite from "../../assets/images/icons_sprite.svg";

type IconPropstype = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string,
}

export const Icon = (props:IconPropstype) => {
    return (
        <svg width={props.width || "50"} height={props.height || "50"} viewBox={props.viewBox || "0 0 120 120"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    )
}