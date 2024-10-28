import React from "react";
import styled, { css } from "styled-components";
import { theme } from '../../styles/Theme';
import { Menu } from './Menu';
import { Socials } from "../socials/Socials";


type MenuPropsType = {
    menuItems: Array<string>,
    weight?: string,
    size?: string,
    colorMask?: string,
    colorMaskHover?: string,
    colorMaskLine?: string
}

export const MenuMobile = (props: MenuPropsType) => {
    return (
        <StyledMenuMobile>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>

            <MenuMobilePopup isOpen={false}>
                <Menu menuItems={props.menuItems} weight="500" size="3rem" colorMask={theme.colors.font.darkContent} colorMaskLine={theme.colors.font.lightContent} colorMaskHover={theme.colors.font.lightContent}/>
            </MenuMobilePopup>

        </StyledMenuMobile>
    )
}



const StyledMenuMobile = styled.nav`
    /* display: none; */

    /* @media ${theme.media.miniTablet} {
        display: block;
    } */

`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 999999;

    span {
        display: block;
        width: 40px;
        height: 2px;
        background-color: ${theme.colors.font.darkContent};
        position: absolute;
        left: 20px;
        bottom: 35px;

        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgba(255, 255, 255, 0);
        `}

        &::before {
            display: block;
            content: "";
            width: 40px;
            height: 2px;
            background-color: ${theme.colors.font.darkContent};
            position: absolute;
            transform: translateY(-10px);
            
            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            display: block;
            content: "";
            width: 40px;
            height: 2px;
            background-color: ${theme.colors.font.darkContent};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(45deg) translateY(0);
            `}
        }
    }
`

const MenuMobilePopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 9999;
    display: none;

    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        font-family: 'DM Sans', sans-serif;
    }
    

    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: ${theme.colors.pageBg.lightMode};
    `}


`
