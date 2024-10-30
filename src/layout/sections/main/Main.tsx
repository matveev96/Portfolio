import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./Main_Styles";

export const Main: React.FC = () => {
    return (
        <S.Main id="home">
            <Container>
                <FlexWrapper justfy="space-between" tabletJustify="center" wrap="wrap" align="center"  >
                    <S.TextWrapper>
                        <S.MainText>Hi 👋,</S.MainText>
                        <S.MainText>My name is</S.MainText>
                        <S.MainName>PavanMG</S.MainName>
                        <S.MainTitle>I build things for web</S.MainTitle>
                    </S.TextWrapper>
                    <S.PhotoWrapper/>
                </FlexWrapper>
            </Container>
        </S.Main>
    )
}

