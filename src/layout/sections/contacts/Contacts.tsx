import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Logo } from "../../../components/logo/Logo";
import { Socials } from "../../../components/socials/Socials";
import { theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";
import { font } from "../../../styles/Common";

export const Contacts = () => {
    return (
        <StyledContacts id="4">
            <Container align="center">
                    <SectionTitle family="DM Sans, sans-serif" fontSize={58} color={theme.colors.font.contactsTitle}>For any questions please mail me:</SectionTitle>
                    <StyledLink href="mailto:hi@pavanmg.in&body=Hello?subject=Question">hi@pavanmg.in</StyledLink>
            </Container>
        </StyledContacts>
    )
}

const StyledContacts = styled.section`
`

const StyledLink = styled.a`
    ${font({family: 'DM Sans, sans-serif',weight: 700, Fmax: 58, Fmin: 36, })};
    background: ${theme.colors.font.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media ${theme.media.mobile} {
        font-size: 2.8rem;
    }
`

