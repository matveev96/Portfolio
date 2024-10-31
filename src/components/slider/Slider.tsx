import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { S } from "./Slider_Styles";
import { SectionText } from '../SectionText';
import { theme } from '../../styles/Theme';
import { Icon } from '../icon/Icon';
import dude from "../../assets/images/Dude.webp";
import dudeNext from "../../assets/images/Dude_2.webp";
import girl from "../../assets/images/girl.webp";
import './slider.css'

type SlidePropsType = {
    userName?: string,
    text?: string,
    userPhoto?: string,
} 

const Slide = (props: SlidePropsType) => {
    return (
        <S.SliderContent>
            <S.PhotoWrapper userPhoto={props.userPhoto}/>
            <S.UserName>{props.userName} </S.UserName>
            <S.ClientAssessment>Happy Client</S.ClientAssessment>
            <SectionText marginTop="20px" marginBtm="12px">{props.text}</SectionText>
                <S.Stars>
                    <Icon iconId={"star"} viewBox={"0 0 26 24"}  color={theme.colors.starYellow} width={"26px"} height={"26px"} />
                    <Icon iconId={"star"} viewBox={"0 0 26 24"}  color={theme.colors.starYellow} width={"26px"} height={"26px"} />
                    <Icon iconId={"star"} viewBox={"0 0 26 24"}  color={theme.colors.starYellow} width={"26px"} height={"26px"} />
                    <Icon iconId={"star"} viewBox={"0 0 26 24"}  color={theme.colors.starYellow} width={"26px"} height={"26px"} />
                    <Icon iconId={"star"} viewBox={"0 0 26 24"}  color={theme.colors.starYellow} width={"26px"} height={"26px"} />
                </S.Stars>
        </S.SliderContent>
    )

}

const items = [
    <Slide userPhoto={dude} userName='Adams Ademola' text='“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”'/>,
    <Slide userPhoto={dudeNext} userName='Mark Jira' text='“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”'/>,
    <Slide userPhoto={girl} userName='Janifer Erricson' text='“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”'/>
];

export const Slider = () => (
    <S.Slider>
        <AliceCarousel
            mouseTracking
            items={items}
            disableButtonsControls
        />
    </S.Slider>
    
);
