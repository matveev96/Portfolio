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
        viwBox: "0 0 30 32"
    },
    {
        iconId: "twitterMini",
        viwBox: "0 0 30 32"
    },
    {
        iconId: "linkdInMini",
        viwBox: "0 0 30 30"
    },
]

export const Socials: React.FC<SocialPropsType> = (props:SocialPropsType) => {
    return (
        <S.SocialList>

            {socialsData.map((s, index) => {
                return <S.SocialItem>
                            <S.SocialLink href="#" colorSVG={props.colorSVG} hoverColor={props.hoverColor}>
                                <Icon iconId={s.iconId} height="30" width="30" viewBox={s.viwBox} />
                            </S.SocialLink>
                        </S.SocialItem>
            })}

        </S.SocialList>
    )
}

