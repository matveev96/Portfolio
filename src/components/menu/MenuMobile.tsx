import React, { useState } from "react";
import { theme } from '../../styles/Theme';
import { Menu, MenuPropsType } from './Menu';
import { S } from "./Menu_styles";


export const MenuMobile = (props: MenuPropsType) => {

    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {
        setMenuIsOpen( !menuIsOpen )
    }

    return (
        <S.MenuMobile>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>

            <S.MenuMobilePopup isOpen={menuIsOpen} onClick={ () => {setMenuIsOpen(false)} }>
                <Menu weight="500" size="3rem" colorMask={theme.colors.font.darkContent} colorMaskLine={theme.colors.font.lightContent} colorMaskHover={theme.colors.font.lightContent}/>
            </S.MenuMobilePopup>
        </S.MenuMobile>
    )
}
