import { HeaderContainer, TitleContainer, IconContainer } from "./styles";
import { Menu, ChevronRight } from "@styled-icons/material";

type HeaderProps = {
    isOpened: boolean,
    toggleDrawer: () => void,
};

export default function Header({ isOpened, toggleDrawer }: HeaderProps) {
    return (
        <HeaderContainer>
            <TitleContainer href={'/'}>¡Hola! / Hello!</TitleContainer>
            <IconContainer onClick={toggleDrawer}>
                {isOpened ? <ChevronRight /> : <Menu />}
            </IconContainer>
        </HeaderContainer>
    );
}
