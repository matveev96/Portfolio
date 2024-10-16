import React from "react";
import styled, { css } from "styled-components";
import { theme } from '../../styles/Theme';

type MenuPropsType = {
    menuItems: Array<string>,
    variant: 'header' | 'footer' | 'darkMode'
}

export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu variant={props.variant}>
            <ul>
                {props.menuItems.map((item: string, index: number) => {
                    return <li key={index}>
                        <a href="#">{item}</a>
                    </li>
                })}
            </ul>
        </StyledMenu>
    )
}

const StyledMenu = styled.nav<{ variant: 'header' | 'footer' | 'darkMode' }>`
    max-width: 609px;
    width: 100%;
    ul {
        display: flex;
        justify-content: space-between;
    }

    ${(props) =>
        props.variant === "header" && css`
        a {
            color: ${theme.colors.font.darkContent};
        }
    `}

    ${(props) =>
        props.variant === "footer" && css`
      a {
        color: ${theme.colors.font.darkTitle};
      }
    `}

    ${(props) =>
        props.variant === "darkMode" && css`
      a {
        color: ${theme.colors.font.lightContent};
      }
    `}
`
