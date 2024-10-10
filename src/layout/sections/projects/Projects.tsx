import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { SectionSubtitle } from "../../../components/SectionSubtitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./project/Project";
import projectOne from "../../../assets/images/project_1.webp"
import projectTwo from "../../../assets/images/project_2.webp"
import projectThree from "../../../assets/images/project_3.webp"
import projectFour from "../../../assets/images/project_4.webp"
import projectFive from "../../../assets/images/project_5.webp"
import projectSix from "../../../assets/images/project_6.webp"

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>
            <SectionSubtitle>Things I’ve built so far</SectionSubtitle>
            <FlexWrapper wrap={"wrap"} justfy="space-between">
                <Project src={projectOne} title={"Project Tile goes here"} list={"HTML , JavaScript, SASS, React"} text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} />
                <Project src={projectTwo} title={"Project Tile goes here"} list={"HTML , JavaScript, SASS, React"} text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} />
                <Project src={projectThree} title={"Project Tile goes here"} list={"HTML , JavaScript, SASS, React"} text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} />
                <Project src={projectFour} title={"Project Tile goes here"} list={"HTML , JavaScript, SASS, React"} text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} />
                <Project src={projectFive} title={"Project Tile goes here"} list={"HTML , JavaScript, SASS, React"} text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} />
                <Project src={projectSix} title={"Project Tile goes here"} list={"HTML , JavaScript, SASS, React"} text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} />

            </FlexWrapper>

        </StyledProjects>
    )
}

const StyledProjects = styled.div`
    background-color: #abc6cf;
`