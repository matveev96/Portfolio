import React from "react";
import { theme } from '../../styles/Theme';
import {Menu, MenuPropsType} from "./Menu"
import { S } from "./Menu_styles";


export const MenuDesktop: React.FC<MenuPropsType> = (props: MenuPropsType) => {
    return (
        <S.MenuDesktop>
            <Menu weight="500" size="2rem" proTabletSize="2.2rem" colorMask={theme.colors.font.darkContent} colorMaskLine={theme.colors.font.lightContent} colorMaskHover={theme.colors.font.lightContent}/>
        </S.MenuDesktop>
    )
}
