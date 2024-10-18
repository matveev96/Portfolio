import React from "react";
import styled from "styled-components";
import { Menu } from "../../components/menu/Menu";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";
import { Logo } from "../../components/logo/Logo";
import { Social } from "../../components/social/Social";
import { Container } from "../../components/Container";

const items = ["Home", "About", "Tech Stack", "Projects", "Contacts"];

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justfy="space-between" direction="column">

                    <InfoBox>
                        <Logo color={theme.colors.font.darkTitle}/>
                        <ContactsContainer>
                            <StyledLink href="#">+91 12345 09876</StyledLink>
                            <StyledLink href="#">info@example.com</StyledLink>
                            <Social colorSVG={theme.colors.font.darkTitle} hoverColor={theme.colors.font.darkContent}/>
                        </ContactsContainer>
                    </InfoBox>
                    
                    <InfoBox>
                        <Menu menuItems={items} variant={"footer"}/>
                        <Copyright><ColorText>Designed and built by </ColorText>Pavan MG<ColorText> with </ColorText>Love<ColorText> & </ColorText>Coffee</Copyright>
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
`

const StyledLink = styled.a`
    display: block;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 400;
    color: ${theme.colors.font.darkTitle};
`

const Copyright = styled.small`
    font-weight: 400;
    font-size: 1.8rem;
    background: ${theme.colors.font.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
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

    &:first-child {
        padding-bottom: 45px;
        margin-bottom: 45px;

        &::after {
            content: "";
            width: 100%;
            height: 2px;
            background-color: ${theme.colors.font.lightContent};
            bottom: 0;

            position: absolute;

        }
    }
`