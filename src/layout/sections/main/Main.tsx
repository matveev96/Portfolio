import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/avatar.webp"
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";
import AbstractMain from "../../../assets/images/AbstractMain.svg"



export const Main = () => {
    return (
        <StyledMain id="0">
            <Container>
                <FlexWrapper justfy="space-between" wrap="wrap" align="center">
                    <TextWrapper>
                        <MainText>Hi 👋,</MainText>
                        <MainText>My name is</MainText>
                        <Name>PavanMG</Name>
                        <MainTitle>I build things for web</MainTitle>
                    </TextWrapper>
                    <PhotoWrapper/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    )
}

const StyledMain = styled.section`
    display: flex;
    height: 80vh;
    overflow: hidden;
`

const TextWrapper = styled.div`
    max-width: 636px;
    width: 100%;
    font-weight: 700;
    font-size: 5.8rem;
    color: ${theme.colors.font.darkTitle};
`

const Name = styled.h2`
    font-size: 5.8rem;
    background: ${theme.colors.font.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const MainTitle = styled.h1`
    font-size: 5.8rem;
`

const MainText = styled.p`
    
`

const PhotoWrapper = styled.div`
    position: relative;
    border-radius: 230px;
    width: 350px;
    height: 350px;
    background-image: url(${photo});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

    &::before {
        content: "";
        position: absolute;
        top: -9px;
        bottom: -9px;
        right: -9px;
        left: -9px;
        background: ${theme.colors.font.gradient};
        border-radius: 230px;
        z-index: -1;
    }

    &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 770px;
        height: 770px;
        background-image: url(${AbstractMain});
        z-index: -2;
    }
`

