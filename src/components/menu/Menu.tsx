import React from "react";
import styled, { css } from "styled-components";
import { theme } from '../../styles/Theme';

type MenuPropsType = {
    menuItems: Array<string>,
    weight?: string,
    size?: string,
    colorMask?: string,
    colorMaskHover?: string,
    colorMaskLine?: string
}

export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu>
            <ul>
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
            </ul>
        </StyledMenu>
    )
}

const Link = styled.a<{weight?: string, size?: string}>`
    color: transparent;
    font-weight: ${props => props.weight};
    font-size: ${props => props.size};

    @media ${theme.media.proTablet} {
        font-size: 3rem;
    }
    @media ${theme.media.mobile} {
        font-size: 1.6rem;
    }
`

const StyledMenu = styled.nav`
    max-width: 610px;
    width: 100%;
    ul {
        display: flex;
        justify-content: space-between;
        font-family: 'DM Sans', sans-serif;
    }

    @media ${theme.media.proTablet} {
        max-width: 810px;
    }

    @media ${theme.media.mobile} {
        max-width: 510px;
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