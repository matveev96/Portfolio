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
        preview: "https://matveev96.github.io/TaskManagementApp/",
        code: "https://github.com/matveev96/TaskManagementApp",
        title: "Task Management App",
        list: "TypeScript, React, Redux, RTK, MaterialUI, REST API",
        text: "Created a fully functional task management app with TypeScript, React, and Redux for state management. Implemented REST API interaction for task CRUD operations, and MaterialUI for UI components and UX improvements."
    },
    {
        src: projectTwo,
        preview: "https://matveev96.github.io/PortfolioReact/",
        code: "https://github.com/matveev96/PortfolioReact",
        title: "Portfolio",
        list: "TypeScript, React, StyledComponents",
        text: "Built a personal portfolio website using React and StyledComponents, showcasing projects and skills. Applied animations and effects to enhance user experience."
    },
    {
        src: projectThree,
        preview: "https://rolling-scopes-school.github.io/matveev96-JSFEPRESCHOOL2024Q2/shelter_2024/shelter/pages/main/",
        code: "https://github.com/matveev96/PetPojects/tree/shelter-part3",
        title: "Shelter Animal Adoption Website",
        list: "HTML, CSS, SASS, JavaScript",
        text: "Designed a responsive website for an animal shelter, utilizing HTML, CSS, SASS, and JavaScript. Added interactive features like a carousel and burger menu for mobile navigation. Ensured mobile and desktop optimization."
    },
    {
        src: projectFour,
        preview: "https://rolling-scopes-school.github.io/matveev96-JSFEPRESCHOOL2024Q2/js30-random-game/",
        code: "https://github.com/matveev96/PetPojects/tree/js30-random-game",
        title: "Flappy Bird Game",
        list: "HTML, Canvas, CSS, SASS, JavaScript",
        text: " Developed a browser-based game using JavaScript and HTML5 Canvas. Implemented difficulty levels, statistics tracking, and a smooth user interface."
    },
    {
        src: projectFive,
        preview: "https://rolling-scopes-school.github.io/matveev96-JSFEPRESCHOOL2024Q2/js30-image-gallery/",
        code: "https://github.com/matveev96/PetPojects/tree/js30-image-gallery",
        title: "Image Gallery with Unsplash API",
        list: "HTML, CSS, SASS, JavaScript, Fetch API",
        text: " Developed a dynamic image gallery using JavaScript and Fetch API, allowing users to search and display images from Unsplash. Added theme toggle for dark/light mode and ensured responsiveness across devices."
    },
    {
        src: projectSix,
        preview: "https://matveev96.github.io/CounterPRO/",
        code: "https://github.com/matveev96/CounterPRO",
        title: "Counter",
        list: "TypeScript, React, Redux, RTK, MaterialUI",
        text: "Developed a simple counter application with the ability to increase/decrease values. Used Redux and Redux-Toolkit for managing the application's state. Integrated MaterialUI for interface components and UX optimization"
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
                        text={p.text}
                        code={p.code}
                        preview={p.preview}
                        />
                    })}

                </S.GridWrapper>
            </Container>
        </S.Projects>
    )
}