import React from "react";
import styled from "styled-components";
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from "../../../components/SectionTitle";
import { SectionSubtitle } from "../../../components/SectionSubtitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";


export const Skills = () => {
    return (
        <StyledSkills id="2">
            <Container>
                <SectionTitle align="center" fontSize={48} color={theme.colors.font.darkTitle} marginBtm="50px" marginBtmTablet="20px">My Tech Stack</SectionTitle>
                <SectionSubtitle fontSize={32} align="center" color={theme.colors.font.darkContent} marginBtm="124px" marginBtmTablet="50px"> Technologies I’ve been working with recently</SectionSubtitle>
                <GridWrapper>
                    <Skill iconId={"html"}/>
                    <Skill iconId={"css"}/>
                    <Skill iconId={"js"}/>
                    <Skill iconId={"react"} viewBox="-5 -5 120 110"/>
                    <Skill iconId={"vector"} viewBox="-5 -5 120 110"/>
                    <Skill iconId={"bootstrap"} viewBox="-5 -5 100 100"/>
                    <Skill iconId={"tailwind"} viewBox="10 10 120 110"/>
                    <Skill iconId={"sass"} viewBox="-10 -5 120 110"/>
                    <Skill iconId={"git"} viewBox="-5 0 120 110"/>
                    <Skill iconId={"greenshock"}/>
                    <Skill iconId={"vsCode"}/>
                    <Skill iconId={"github"} viewBox="-5 -5 100 100"/>
                </GridWrapper>
            </Container>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
    
`

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 120px);
    grid-auto-rows: minmax(120px, auto);
    gap: 95px;
    justify-content: center;

    @media ${theme.media.miniDesktop} {
        grid-template-columns: repeat(4, 120px);
    }
    @media ${theme.media.miniTablet} {
        grid-template-columns: repeat(auto-fill, 120px);
    }
    @media ${theme.media.mobile} {
        grid-template-columns: repeat(2, 120px);
        grid-column-gap: 40px;
        grid-row-gap: 20px;
    }
`