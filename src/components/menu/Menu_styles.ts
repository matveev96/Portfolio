import styled, { css } from "styled-components"
import { theme } from "../../styles/Theme"

// Menu

const Link = styled.a<{weight?: string, size?: string, proTabletSize?: string}>`
    color: transparent;
    font-weight: ${props => props.weight};
    font-size: ${props => props.size};

    @media ${theme.media.proTablet} {
        font-size: ${props => props.proTabletSize};
    }
    @media ${theme.media.miniTablet} {
        font-size: 2rem;
    }
`

const Mask = styled.span<{colorMask?: string}>`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    color: ${props => props.colorMask};
    transition: ${theme.animations.transition};
    
    & + & {
        top: 50%;
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`

const MenuItem = styled.li<{colorMaskLine?: string, colorMaskHover?: string}>`
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        height: 2px;
        background-color: ${props => props.colorMaskLine};

        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;

        transform: scale(0);
    }

    &:hover {
        &::before {
            transform: scale(1);
        }

        ${Mask} {
            transform: skewX(12deg) translateX(5px);
            color: ${props => props.colorMaskHover};
            & + ${Mask} {
            transform: skewX(12deg) translateX(-5px);
            }
        }
    }
`

// Menu Mobile

const MenuMobile = styled.nav<{isOpen: boolean}>`
    height: 0;
    transition: ${theme.animations.transition};
    ${props => props.isOpen && css<{isOpen: boolean}>`
        height: 100vh;
    `}
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 999999;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

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
    z-index: 99999;
    display: none;

    transition: ${theme.animations.transition};
    

    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; 
    `}

    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        font-family: 'DM Sans', sans-serif;
    }
`

// Desktop Menu

const MenuDesktop = styled.nav`
    max-width: 610px;
    width: 100%;
    ul {
        display: flex;
        justify-content: space-between;
        font-family: 'DM Sans', sans-serif;
    }

    @media ${theme.media.miniTablet} {
        ul {
            flex-direction: column;
            gap: 15px;
        }
    }

    @media ${theme.media.mobile} {
        max-width: 510px;
    }
`

export const S = {
    Link,
    Mask,
    MenuItem,
    MenuMobile,
    BurgerButton,
    MenuMobilePopup,
    MenuDesktop
}