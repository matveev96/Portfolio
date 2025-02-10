import React from "react";
import { SectionSubtitle } from "../../../../components/SectionSubtitle";
import { SectionText } from "../../../../components/SectionText";
import { theme } from "../../../../styles/Theme";
import { S } from "../Projects_Styles";

type ProjectPropsType = {
    title: string,
    text: string,
    src: string,
    list: string,
    iconId?: string,
    code: string,
    preview: string
}

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <S.Project>
            <S.ImageBox>
                <S.Image src={props.src}/>
            </S.ImageBox>

            <S.ContentBox>
                <SectionSubtitle weight={500} color={theme.colors.font.black} fontSize={28} align="left" marginBtm="17px" marginBtmMobile="10px">{props.title}</SectionSubtitle>
                <SectionText weight="300" color={theme.colors.font.darkContent} marginBtm="12px" grow={1} >{props.text}</SectionText>
                <S.Stack>Tech stack: <S.StackList>{props.list}</S.StackList></S.Stack>

                <S.LinkBox>
                    <S.Link href={props.preview} iconId="chain" target="_blank">Live Preview</S.Link>
                    <S.Link href={props.code} iconId="gh-project" target="_blank">View Code</S.Link>
                </S.LinkBox>
            </S.ContentBox>
        </S.Project>
    )
}


