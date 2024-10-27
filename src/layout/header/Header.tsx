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
                <FlexWrapper justfy="space-between"  tabletJustify="center" miniTabletJustify="space-between" wrap="wrap" >
                    <Logo variation={'logoGradient'} />
                    <MenuBox>
                        <Menu menuItems={items} weight="500" size="2rem" proTabletSize="2.8rem" colorMask={theme.colors.font.darkContent} colorMaskLine={theme.colors.font.lightContent} colorMaskHover={theme.colors.font.lightContent}/>
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
    padding-bottom: 10px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9999;
    @media ${theme.media.proTablet} {
        padding-top: 20px;
    }
    @media ${theme.media.miniTablet} {
        padding-top: 40px;
    }
`

const MenuBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 790px;
    width: 100%;
    padding-top: 8px;

    @media ${theme.media.proTablet} {
        max-width: 900px;
        padding-top: 10px;
        flex-wrap: nowrap;
        
        gap: 30px;
        justify-content: center;
    }

    @media ${theme.media.miniTablet} {
        display: none;
    }
`