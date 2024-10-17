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
        <StyledSkills>
            <Container>
                <SectionTitle align="center" fontSize="4.8rem" color={theme.colors.font.darkTitle} marginBtm="50px">My Tech Stack</SectionTitle>
                <SectionSubtitle fontSize="3.2rem" align="center" color={theme.colors.font.darkContent} marginBtm="130px"> Technologies I’ve been working with recently</SectionSubtitle>
                <FlexWrapper wrap={"wrap"}  justfy="center" gap="90px">
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
                </FlexWrapper>
            </Container>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
    
`