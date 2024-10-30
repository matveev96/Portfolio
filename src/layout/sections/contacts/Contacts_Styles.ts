import { font } from "../../../styles/Common";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Contacts = styled.section`
`

const Link = styled.a`
    ${font({family: 'DM Sans, sans-serif',weight: 700, Fmax: 58, Fmin: 36 })};
    background: ${theme.colors.font.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media ${theme.media.mobile} {
        font-size: 2.8rem;
    }
`

export const S = {
    Contacts,
    Link
}
