import React from "react";
import { S } from "./Menu_styles";

export type MenuPropsType = {
    weight?: string,
    size?: string,
    proTabletSize?: string,
    colorMask?: string,
    colorMaskHover?: string,
    colorMaskLine?: string,
}


const items = [
    {
        title: "Home",
        href: "home"
    },
    {
        title: "About",
        href: "about"
    },
    {
        title: "Tech Stack",
        href: "techStack"
    },
    {
        title: "Projects",
        href: "projects"
    },
    {
        title: "Testimony",
        href: "testimony"
    },
    {
        title: "Contacts",
        href: "contacts"
    },

];

export const Menu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
    return (
        <ul>
            {items.map((item, index) => {
                return <S.MenuItem key={index} colorMaskLine={props.colorMaskLine} colorMaskHover={props.colorMaskHover} >
                    <S.Link size={props.size} proTabletSize={props.proTabletSize} weight={props.weight} href={`#${item.href}`}>
                            {item.title}
                        <S.Mask colorMask={props.colorMask}>
                            <span>{item.title}</span>
                        </S.Mask>
                        <S.Mask colorMask={props.colorMask}>
                            <span>{item.title}</span>
                        </S.Mask>
                    </S.Link>
                </S.MenuItem>
            })}
        </ul>   
    )
}