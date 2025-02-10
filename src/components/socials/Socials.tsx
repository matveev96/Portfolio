import React from "react";
import { Icon } from '../icon/Icon';
import { S } from "./Socials_Styled";


export type SocialPropsType = {
    hoverColor?: string,
    colorSVG?: string
}

const socialsData = [
    {
        iconId: "githubMini",
        href: "https://github.com/matveev96",
        viwBox: "0 0 30 32"
    },
    {
        iconId: "twitterMini",
        href: "https://x.com/",
        viwBox: "0 0 30 32"
    },
    {
        iconId: "linkdInMini",
        href: "https://www.linkedin.com/in/aliaksandr-matsveyeu-55878823a/",
        viwBox: "0 0 30 30"
    },
]

export const Socials: React.FC<SocialPropsType> = (props:SocialPropsType) => {
    return (
        <S.SocialList>

            {socialsData.map((s, index) => {
                return <S.SocialItem>
                            <S.SocialLink target="_blank" href={s.href} colorSVG={props.colorSVG} hoverColor={props.hoverColor}>
                                <Icon iconId={s.iconId} height="30" width="30" viewBox={s.viwBox} />
                            </S.SocialLink>
                        </S.SocialItem>
            })}

        </S.SocialList>
    )
}

