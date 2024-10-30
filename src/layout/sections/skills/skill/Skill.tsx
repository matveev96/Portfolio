import React from "react";
import { Icon } from "../../../../components/icon/Icon";
import { S } from "../Skills_Styles";

type SkillPropsType = {
    iconId: string,
    viewBox?: string
}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <Icon iconId={props.iconId} viewBox={props.viewBox} width="110px" height="110px"/>
        </S.Skill>
    )
}
