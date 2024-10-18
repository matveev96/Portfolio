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
                        <a href={`#${index}`}>{item}</a>
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
        font-family: 'DM Sans', sans-serif;
    }

    ${(props) =>
        props.variant === "header" && css`
        a {
            color: ${theme.colors.font.darkContent};
            font-weight: 500;
            font-size: 2rem;
            line-height: 130%;
            text-align: center;
        }
    `}

    ${(props) =>
        props.variant === "footer" && css`
      a {
        font-family: 'DM Sans';
        color: ${theme.colors.font.darkTitle};
        font-weight: 400;
        font-size: 1.8rem;
        line-height: 144%;
      }
    `}

    ${(props) =>
        props.variant === "darkMode" && css`
      a {
        color: ${theme.colors.font.lightContent};
      }
    `}
`
