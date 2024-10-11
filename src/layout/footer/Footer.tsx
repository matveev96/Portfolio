import React from "react";
import styled from "styled-components";
import { Menu } from "../../components/menu/Menu";

const items = ["Home", "About", "Tech Stack", "Projects", "Contacts"];

export const Footer = () => {
    return (
        <StyledFooter>
            <Menu menuItems={items}/>
            <Copyright>Designed and built by <ColorText>Pavan MG</ColorText> with <ColorText>Love</ColorText> & <ColorText>Coffee</ColorText></Copyright>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
`

const Copyright = styled.small`
`
const ColorText = styled.span`
`
