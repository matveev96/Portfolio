import React from "react";
import styled from "styled-components";
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from "../../../components/SectionTitle";
import { SectionSubtitle } from "../../../components/SectionSubtitle";
import { Skill } from "./skill/Skill";


export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Tech Stack</SectionTitle>
            <SectionSubtitle> Technologies I’ve been working with recently</SectionSubtitle>
            <FlexWrapper wrap={"wrap"} justfy={"space-between"}>
                <Skill iconId={"html"}/>
                <Skill iconId={"css"}/>
                <Skill iconId={"js"}/>
                <Skill iconId={"react"}/>
                <Skill iconId={"vector"}/>
                <Skill iconId={"bootstrap"}/>
                <Skill iconId={"tailwind"}/>
                <Skill iconId={"sass"}/>
                <Skill iconId={"git"}/>
                <Skill iconId={"greenshock"}/>
                <Skill iconId={"vsCode"}/>
                <Skill iconId={"github"}/>
            </FlexWrapper>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
    /* min-height: 100vh; */
    background-color: #cac5ce;
`