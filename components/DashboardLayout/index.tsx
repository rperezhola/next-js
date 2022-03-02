import Sidebar from "../Sidebar";
import Header from "../Header";
import { Content, PageContainer, Container } from "./styles";
import Footer from "../Footer";
import { useState } from "react";

type DashboardLayoutProps = {
    children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    const [isOpened, setOpened] = useState(false);

    const toggleDrawer = () => {
        setOpened((prev) => !prev);
    };

    return (
        <Container>
            <Header isOpened={isOpened} toggleDrawer={toggleDrawer} />
            <Content>
                <PageContainer>{children}</PageContainer>
                <Sidebar isOpened={isOpened} />
            </Content>
            <Footer />
        </Container>
    );
}
