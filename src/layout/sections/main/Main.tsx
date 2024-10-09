import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/avatar.webp"
import { FlexWrapper } from "../../../components/FlexWrapper";



export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper justfy="space-around" wrap="wrap" align="center">
                <div>
                    <MainText>Hi 👋,</MainText>
                    <MainText>My name is</MainText>
                    <Name>Aliaksandr Matsveyeu</Name>
                    <MainTitle>I build things for web</MainTitle>
                </div>

                <Photo src={photo}/>
            </FlexWrapper>
            
        </StyledMain>
    )
}

const StyledMain = styled.div`
    background-color: #8dbfbf;
`

const Photo = styled.img`
    width: 350px;
    height: 350px;
    object-fit: cover;
`

const Name = styled.h2`
    
`

const MainTitle = styled.h1`
`

const MainText = styled.span`
    
`