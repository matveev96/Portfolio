import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Logo } from "../../../components/logo/Logo";
import { Social } from "../../../components/social/Social";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>For any questions please mail me:</SectionTitle>
            <StyledLink href="#">hi@pavanmg.in</StyledLink>
            <FlexWrapper justfy="space-between">
                <Logo/>
                <StyledContactsContainer>
                    <StyledLink href="#">+91 12345 09876</StyledLink>
                    <StyledLink href="#">info@example.com</StyledLink>
                    <Social/>
                </StyledContactsContainer>
            </FlexWrapper>
        </StyledContacts>
    )
}

const StyledContacts = styled.section`
    border-bottom: 1px solid #666666;
`

const StyledLink = styled.a`
    display: block;
    text-align: center;
`

const StyledContactsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`