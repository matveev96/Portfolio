import React from "react";
import styled from "styled-components";
import { MenuDesktop } from "../../components/menu/MenuDesktop";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";
import { Logo } from "../../components/logo/Logo";
import { Socials } from "../../components/socials/Socials";
import { Container } from "../../components/Container";
import { font } from "../../styles/Common";

const items = ["Home", "About", "Tech Stack", "Projects", "Contacts"];

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justfy="space-between" direction="column" miniTabletDirection="row-reverse" >

                    <InfoBox>
                        <Logo color={theme.colors.font.darkTitle}/>
                        <ContactsContainer>
                            <StyledLink href="tel:+911234509876">+91 12345 09876</StyledLink>
                            <StyledLink href="mailto:info@example.com&body=Hello?subject=Question">info@example.com</StyledLink>
                            <Socials colorSVG={theme.colors.font.darkTitle} hoverColor={theme.colors.font.darkContent}/>
                        </ContactsContainer>
                    </InfoBox>
                    
                    <InfoBox>
                        <MenuDesktop menuItems={items} weight="400" size="1.8rem" colorMask={theme.colors.font.darkTitle} colorMaskLine={theme.colors.font.contactsTitle} colorMaskHover={theme.colors.font.contactsTitle}/>
                        <Copyright>
                            <ColorText>Designed and built by </ColorText>Pavan MG<ColorText> with </ColorText>Love<ColorText> & </ColorText>Coffee
                        </Copyright>
                    </InfoBox>
                    
                </FlexWrapper>
            </Container>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    padding-bottom: 60px;
`

const ContactsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 60px;
    color: ${theme.colors.font.darkTitle};

    @media ${theme.media.miniTablet} {
        margin-top: 20px;
        flex-direction: column;
        align-items: flex-end;
        gap: 10px;
    }
`

const StyledLink = styled.a`
    display: block;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 400;
    color: ${theme.colors.font.darkTitle};
`

const Copyright = styled.small`
    ${font({weight: 400, Fmax: 18, Fmin: 12})};
    background: ${theme.colors.font.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    @media ${theme.media.miniTablet} {
        position: absolute;
        bottom: -20%;
        width: 360px;
    }
`

const ColorText = styled.span`
    color: ${theme.colors.font.darkContent};
`

const InfoBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media ${theme.media.miniTablet} {
        flex-direction: column;
        align-items: flex-start;
    }

    &:first-child {
        padding-bottom: 45px;
        margin-bottom: 45px;
        
        @media ${theme.media.miniTablet} {
            align-items: flex-end;
            padding-bottom: 0;
            margin-bottom: 0;
        }
        &::after {
            content: "";
            width: 100%;
            height: 2px;
            background-color: ${theme.colors.font.lightContent};
            bottom: 0;

            position: absolute;

            @media ${theme.media.miniTablet} {
                display: none;
            }
        }
    }

`