import { theme } from "./Theme"

type FontPropsType = {
    family?: string,
    weight?: number,
    color?: string,
    lineHeight?: number,
    Fmin?: number,
    Fmax?: number,
}

export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: FontPropsType) => `
    font-family: ${family || 'Poppins'};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.font.black};
    line-height: ${lineHeight || 1.2};
    font-size: calc((100vw - 576px)/(1600 - 576) * (${Fmax} - ${Fmin}) + ${Fmin}px);

`