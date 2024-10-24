import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Socials } from "../../components/socials/Socials";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";
import { MenuMobile } from "../../components/menu/MenuMobile";

const items = ["Home", "About", "Tech Stack", "Projects", "Contacts"];

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justfy="space-between"  wrap="wrap">
                    <Logo variation={'logoGradient'} />
                    <MenuBox>
                        <Menu menuItems={items} weight="500" size="2rem" colorMask={theme.colors.font.darkContent} colorMaskLine={theme.colors.font.lightContent} colorMaskHover={theme.colors.font.lightContent}/>
                        <Socials colorSVG={theme.colors.font.darkContent} hoverColor={theme.colors.font.lightContent}/>
                    </MenuBox>

                    <MenuMobile menuItems={items} weight="500" size="3rem" colorMask={theme.colors.font.darkContent} colorMaskLine={theme.colors.font.lightContent} colorMaskHover={theme.colors.font.lightContent}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    background-color: ${theme.colors.pageBg.lightMode};
    padding-top: 40px;
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

    @media ${theme.media.tablet} {
        display: none;
    }
`