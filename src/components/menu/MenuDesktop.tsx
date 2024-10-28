import React from "react";
import styled, { css } from "styled-components";
import { theme } from '../../styles/Theme';
import {Menu} from "./Menu"

type MenuPropsType = {
    menuItems: Array<string>,
    weight?: string,
    size?: string,
    proTabletSize?: string,
    colorMask?: string,
    colorMaskHover?: string,
    colorMaskLine?: string
}

export const MenuDesktop: React.FC<MenuPropsType> = (props: MenuPropsType) => {
    return (
        <StyledMenuDesktop>
            <Menu menuItems={props.menuItems} weight="500" size="2rem" proTabletSize="2.8rem" colorMask={theme.colors.font.darkContent} colorMaskLine={theme.colors.font.lightContent} colorMaskHover={theme.colors.font.lightContent}/>
        </StyledMenuDesktop>
    )
}

const StyledMenuDesktop = styled.nav`
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
