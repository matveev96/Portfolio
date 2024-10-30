import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Card } from "./card/Card";
import { SectionText } from "../../../components/SectionText";
import { Container } from "../../../components/Container";
import { S } from "./About_Styles";

export const About: React.FC = () => {
    return (
            <S.About id="about">
                <Container>
                    <FlexWrapper tabletJustify="center">
                        <S.AboutInfo>
                            <S.InfoBlock>
                                <S.Title>About Me</S.Title>
                                <SectionText>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</SectionText>
                            </S.InfoBlock>

                            <S.InfoBlock>
                                <S.Title>Work Experience</S.Title>
                                <Card margin="30px" position="Junior Web Developer" occupation="Full Time" organization="Dr. Rajkumar’s Learning App" city="Bengaluru" period="Sep 2021 - Dec 2021"/>
                                <Card margin="30px" position="Web Development Intern" occupation="Internship" organization="IonPixelz Web Solutions" city="Bengaluru" period="Sep 2021 - Dec 2021"/>
                                <Card position="SEO / SEM Specialist" occupation="Internship" organization="HAAPS" city="Bengaluru" period="Sep 2021 - Dec 2021"/>
                            </S.InfoBlock>

                            <S.InfoBlock>
                                <S.Title>Education</S.Title>
                                <Card position="Bachelor in Electronics & Communication" occupation="Full Time" organization="Bangalore Instutute of Technology" display="none" period="Aug 2015 - Dec 2020"/>
                            </S.InfoBlock>
                        </S.AboutInfo>                        
                    </FlexWrapper>
                </Container>
            </S.About>
    )
}

