import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";
import { S } from "./Contacts_Styles";


export const Contacts: React.FC = () => {
    return (
        <S.Contacts id="contacts">
            <Container align="center">
                    <SectionTitle family="DM Sans, sans-serif" fontSize={58} color={theme.colors.font.contactsTitle}>For any questions please mail me:</SectionTitle>
                    <S.Link href="mailto:sasha.matveev1996@gmail.com&body=Hello?subject=Question">sasha.matveev1996@gmail.com</S.Link>
            </Container>
        </S.Contacts>
    )
}


