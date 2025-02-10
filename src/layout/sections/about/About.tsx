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
                                <SectionText>Frontend Developer with experience in creating dynamic and responsive web applications. I have deep knowledge of JavaScript, TypeScript, React, and other frontend development technologies. Passionate about continuous learning and improving my skills. I strive to create intuitive user interfaces and deliver high-quality, scalable code.</SectionText>
                            </S.InfoBlock>

                            <S.InfoBlock>
                                <S.Title>Work Experience</S.Title>
                                <Card margin="30px" position="Junior Frontend Developer" occupation="Internship" organization="IT-Incubator" city="Online" period="Jun 2024 - Present"/>
                                <Card margin="30px" position="Chief Technologist" occupation="Full Time" organization="Oil Refinery" city="Mozyr" period="Dec 2024 - Present"/>
                                <Card margin="30px" position="Engineer Technologist" occupation="Full Time" organization="Oil Refinery" city="Mozyr" period="Dec 2023 - Dec 2024"/>
                                <Card position="Technologist Operator" occupation="Full Time" organization="Oil Refinery" city="Mozyr" period="Aug 2019 - Dec 2023"/>
                            </S.InfoBlock>

                            <S.InfoBlock>
                                <S.Title>Education</S.Title>
                                <Card position="Engineer-Chemist Technologist" occupation="Full Time" organization="Belarusian State Technological University" display="none" period="Aug 2015 - Jun 2019"/>
                            </S.InfoBlock>
                        </S.AboutInfo>                        
                    </FlexWrapper>
                </Container>
            </S.About>
    )
}

