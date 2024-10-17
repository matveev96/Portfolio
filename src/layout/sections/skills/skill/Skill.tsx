import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/FlexWrapper";

type SkillPropsType = {
    iconId: string,
    viewBox?: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} viewBox={props.viewBox} width="110px" height="110px"/>
        </StyledSkill>
    )
}

const StyledSkill = styled.div`
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
`