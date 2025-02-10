import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./Main_Styles";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main: React.FC = () => {
    return (
        <S.Main id="home">
            <Container >
                <FlexWrapper justfy="space-between" tabletJustify="center" wrap="wrap" align="center"  proTabletDirection="column">
                    <S.TextWrapper>
                        <S.MainText>Hi 👋,</S.MainText>
                        <S.MainText>My name is</S.MainText>
                        <S.MainName>Aliaksandr Matsveyeu</S.MainName>
                        <S.MainTitle>
                            <S.MainTitleSpan>I build things for web</S.MainTitleSpan> 
                            <Typewriter
                                options={{
                                    strings: ['I build things for web'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 150
                                }}
                                />
                            
                        </S.MainTitle>
                    </S.TextWrapper>
                    <Tilt
                    className="background-stripes parallax-effect" perspective={500}>
                        <S.PhotoWrapper/>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </S.Main>
    )
}

