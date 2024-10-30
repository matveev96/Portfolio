import React from "react";
import { S } from "./Card_Styles";

type CardPropsType = {
    position: string,
    occupation: string,
    organization: string,
    city?: string,
    period: string,
    display?: string,
    margin?: string,
    iconId?: string
}

export const Card: React.FC<CardPropsType> = (props: CardPropsType) => {
    return (
        <S.Card margin={props.margin}>
            <S.CardContainerTop>
                <S.Position>{props.position || "null"}</S.Position>
                <S.Occupation>{props.occupation || "null"}</S.Occupation>
            </S.CardContainerTop>

            <S.CardContainerBottom>
                <S.Info iconId="building">{props.organization || "null"}</S.Info>
                <S.Info iconId="map" display={props.display} >{props.city}</S.Info>
                <S.Info iconId="calendar">{props.period || "null"}</S.Info>
            </S.CardContainerBottom>
        </S.Card>
    )
}


