import React from "react";
import { SectionText } from "../SectionText";
import { Icon } from '../icon/Icon';
import { theme } from "../../styles/Theme";
import { S } from "./Slider_Styles";

const starsData = [
    {
        color: theme.colors.starYellow,
    },
    {
        color: theme.colors.starYellow,
    },
    {
        color: theme.colors.starYellow,
    },
    {
        color: theme.colors.starYellow,
    },
    {
        color: theme.colors.starYellow,
    },
]

export const Slider: React.FC = () => {
    return (
        <S.Slider>
            <S.SliderContent>
                <S.ImageWrapper/>
                <S.UserName>Adams Ademola</S.UserName>
                <S.ClientAssessment>Happy Client</S.ClientAssessment>
                <SectionText marginTop="20px" marginBtm="12px">“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”</SectionText>
                <S.Stars>

                    {starsData.map((s,index) => {
                        return <Icon 
                        key={index}
                        iconId={"star"} 
                        viewBox={"0 0 26 24"}  
                        color={s.color} 
                        width={"26px"} 
                        height={"26px"} />
                    })}

                </S.Stars>
            </S.SliderContent>
            <S.ButtonsBox>
                <S.Dot/>
                <S.Dot/>
                <S.Dot/>
            </S.ButtonsBox>
        </S.Slider>
    )
}

