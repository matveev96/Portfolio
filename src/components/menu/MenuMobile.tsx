import React from "react";
import styled, { css } from "styled-components";
import { theme } from '../../styles/Theme';
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
                <MobileList>
                    {props.menuItems.map((item: string, index: number) => {
                        return <ListItem key={index} colorMaskLine={props.colorMaskLine} colorMaskHover={props.colorMaskHover}>
                            <Link size={props.size} weight={props.weight} href={`#${index}`}>
                                    {item}
                                <Mask colorMask={props.colorMask}>
                                    <span>{item}</span>
                                </Mask>
                                <Mask colorMask={props.colorMask}>
                                    <span>{item}</span>
                                </Mask>
                            </Link>
                        </ListItem>
                    })}
                    <Socials colorSVG={theme.colors.font.darkContent} />
                </MobileList>
            </MenuMobilePopup>

        </StyledMenuMobile>
    )
}



const StyledMenuMobile = styled.nav`
    display: none;

    @media ${theme.media.miniTablet} {
        display: block;
    }

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
    

    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: ${theme.colors.pageBg.lightMode};
    `}


`

const MobileList = styled.ul`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        font-family: 'DM Sans', sans-serif;
`

const Link = styled.a<{weight?: string, size?: string}>`
    color: transparent;
    font-weight: ${props => props.weight};
    font-size: ${props => props.size};
`

const Mask = styled.span<{colorMask?: string}>`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    color: ${props => props.colorMask};
    transition: .2s all ease-in;
    
    & + & {
        top: 50%;
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`

const ListItem = styled.li<{colorMaskLine?: string, colorMaskHover?: string}>`
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
        z-index: 1;

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