import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { SectionSubtitle } from "../../../components/SectionSubtitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { S } from "./Skills_Styles";

const skillData = [
    {
        iconId: "html"
    },
    {
        iconId: "css"
    },
    {
        iconId: "js"
    },
    {
        iconId: "react",
        viewBox: "-5 -5 120 110"
    },
    {
        iconId: "vector",
        viewBox: "-5 -5 120 110"
    },
    {
        iconId: "ts"
    },
    {
        iconId: "tailwind",
        viewBox: "10 10 120 110"
    },
    {
        iconId: "sass",
        viewBox: "-10 -5 120 110"
    },
    {
        iconId: "git",
        viewBox: "-5 0 120 110"
    },
    {
        iconId: "greenshock",
    },
    {
        iconId: "vsCode"
    },
    {
        iconId: "github",
        viewBox: "-5 -5 100 100"
    }
]


export const Skills: React.FC = () => {
    return (
        <S.Skills id="techStack">
            <Container>
                <SectionTitle align="center" fontSize={48} color={theme.colors.font.darkTitle} marginBtm="50px" marginBtmTablet="20px">My Tech Stack</SectionTitle>
                <SectionSubtitle fontSize={32} align="center" color={theme.colors.font.darkContent} marginBtm="124px" marginBtmTablet="50px"> Technologies I’ve been working with recently</SectionSubtitle>
                <S.GridWrapper>

                    {skillData.map((s, index) => {
                        return <Skill iconId={s.iconId} key={index} viewBox={s.viewBox}/>
                    })}
                    
                </S.GridWrapper>
            </Container>
        </S.Skills>
    )
}
