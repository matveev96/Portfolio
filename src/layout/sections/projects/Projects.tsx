import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { SectionSubtitle } from "../../../components/SectionSubtitle";
import { Project } from "./project/Project";
import projectOne from "../../../assets/images/project_1.webp";
import projectTwo from "../../../assets/images/project_2.webp";
import projectThree from "../../../assets/images/project_3.webp";
import projectFour from "../../../assets/images/project_4.webp";
import projectFive from "../../../assets/images/project_5.webp";
import projectSix from "../../../assets/images/project_6.webp";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { S } from "./Projects_Styles";

const projectsData = [
    {
        src: projectOne,
        title: "Project Tile goes here",
        list: "HTML , JavaScript, SASS, React",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    },
    {
        src: projectTwo,
        title: "Project Tile goes here",
        list: "HTML , JavaScript, SASS, React",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    },
    {
        src: projectThree,
        title: "Project Tile goes here",
        list: "HTML , JavaScript, SASS, React",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    },
    {
        src: projectFour,
        title: "Project Tile goes here",
        list: "HTML , JavaScript, SASS, React",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    },
    {
        src: projectFive,
        title: "Project Tile goes here",
        list: "HTML , JavaScript, SASS, React",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    },
    {
        src: projectSix,
        title: "Project Tile goes here",
        list: "HTML , JavaScript, SASS, React",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    }
]

export const Projects: React.FC = () => {
    return (
        <S.Projects id="projects">
            <Container>
                <SectionTitle align="center" fontSize={48} color={theme.colors.font.darkTitle} marginBtm="50px" marginBtmTablet="20px">Projects</SectionTitle>
                <SectionSubtitle fontSize={32} align="center" color={theme.colors.font.darkContent} marginBtm="124px" marginBtmTablet="50px">Things I’ve built so far</SectionSubtitle>
                <S.GridWrapper>

                    {projectsData.map((p, index) => {
                        return <Project 
                        src={p.src} 
                        key={index}
                        title={p.title} 
                        list={p.list} 
                        text={p.text} />
                    })}

                </S.GridWrapper>
            </Container>
        </S.Projects>
    )
}