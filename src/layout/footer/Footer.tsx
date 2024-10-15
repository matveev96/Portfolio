import React from "react";
import styled from "styled-components";
import { Menu } from "../../components/menu/Menu";
import { FlexWrapper } from "../../components/FlexWrapper";

const items = ["Home", "About", "Tech Stack", "Projects", "Contacts"];

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justfy={"space-between"} align={"center"}>
                <Menu menuItems={items}/>
                <Copyright>Designed and built by <ColorText>Pavan MG</ColorText> with <ColorText>Love</ColorText> & <ColorText>Coffee</ColorText></Copyright>
            </FlexWrapper>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
`

const Copyright = styled.small`
`
const ColorText = styled.span`
`
