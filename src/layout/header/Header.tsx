import React from "react";
import { Logo } from "../../components/logo/Logo";
import { Socials } from "../../components/socials/Socials";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";
import { MenuMobile } from "../../components/menu/MenuMobile";
import { MenuDesktop } from "../../components/menu/MenuDesktop";
import { S } from "./Header_Styles";

const items = ["Home", "About", "Tech Stack", "Projects", "Contacts"];

export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>
                <FlexWrapper justfy="space-between"  tabletJustify="center" miniTabletJustify="space-between" wrap="wrap" >
                    <Logo variation={'logoGradient'} />

                    {width < breakpoint ?   <MenuMobile menuItems={items} />
                                        :   <S.HeaderMenuDesktop>
                                                <MenuDesktop menuItems={items} />
                                                <Socials colorSVG={theme.colors.font.darkContent} hoverColor={theme.colors.font.lightContent}/>
                                            </S.HeaderMenuDesktop> 
                    }
                    
                </FlexWrapper>
            </Container>
        </S.Header>
    )
}

