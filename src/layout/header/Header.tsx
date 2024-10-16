import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Social } from '../../components/social/Social';
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";

const items = ["Home", "About", "Tech Stack", "Projects", "Contacts"];

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justfy="space-between"  wrap="wrap">
                    <Logo variation={'logoGradient'} />
                    <MenuBox>
                        <Menu menuItems={items} variant={"header"}/>
                        <Social color={theme.colors.font.darkContent}/>
                    </MenuBox>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    background-color: ${theme.colors.pageBg.lightMode};
    padding-top: 41px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9999;
`

const MenuBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 790px;
    width: 100%;
    padding-top: 8px;
`