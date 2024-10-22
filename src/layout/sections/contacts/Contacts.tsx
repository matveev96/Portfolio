import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Logo } from "../../../components/logo/Logo";
import { Social } from "../../../components/social/Social";
import { theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";

export const Contacts = () => {
    return (
        <StyledContacts id="4">
            <Container>
                <FlexWrapper direction="column" justfy="center" align="center" gap="10px">
                    <SectionTitle family="DM Sans, sans-serif" fontSize="5.8rem" color={theme.colors.font.contactsTitle}>For any questions please mail me:</SectionTitle>
                    <StyledLink href="mailto:hi@pavanmg.in&body=Hello?subject=Question">hi@pavanmg.in</StyledLink>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    )
}

const StyledContacts = styled.section`
    height: 100vh;
    display: flex;
    margin-bottom: 0;
`

const StyledLink = styled.a`
    display: block;
    font-family: DM Sans, sans-serif;
    text-align: center;
    font-size: 5.8rem;
    font-weight: 700;
    background: ${theme.colors.font.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

