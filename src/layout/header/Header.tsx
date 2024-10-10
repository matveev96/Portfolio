import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Social } from '../../components/social/Social';

const items = ["Home", "About", "Tech Stack", "Projects", "Contacts"];

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Menu menuItems={items} />
            <Social />
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    background-color: #e3b1cb;
    display: flex;
`