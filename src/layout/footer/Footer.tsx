import React from "react";
import { MenuDesktop } from "../../components/menu/MenuDesktop";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";
import { Logo } from "../../components/logo/Logo";
import { Socials } from "../../components/socials/Socials";
import { Container } from "../../components/Container";
import { S } from "./Footer_Styles";


const items = ["Home", "About", "Tech Stack", "Projects", "Contacts"];

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper justfy="space-between" direction="column" miniTabletDirection="row-reverse" >

                    <S.InfoBox>
                        <Logo color={theme.colors.font.darkTitle}/>
                        <S.ContactsContainer>
                            <S.Link href="tel:+375333709381">+375 33 370-93-81</S.Link>
                            <S.Link href="mailto:sasha.matveev1996@gmail.com&body=Hello?subject=Question">sasha.matveev1996@gmail.com</S.Link>
                            <Socials colorSVG={theme.colors.font.darkTitle} hoverColor={theme.colors.font.darkContent}/>
                        </S.ContactsContainer>
                    </S.InfoBox>
                    
                    <S.InfoBox>
                        <MenuDesktop weight="400" size="1.8rem" colorMask={theme.colors.font.darkTitle} colorMaskLine={theme.colors.font.contactsTitle} colorMaskHover={theme.colors.font.contactsTitle}/>
                        <S.Copyright>
                            <S.ColorText>Designed and built by </S.ColorText>AlexMt<S.ColorText> with </S.ColorText>Love<S.ColorText> & </S.ColorText>Coffee
                        </S.Copyright>
                    </S.InfoBox>
                    
                </FlexWrapper>
            </Container>
        </S.Footer>
    )
}

