import Sidebar from "./Sidebar";
import { MainContent } from "./styled";
import Header from "../Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <Sidebar />
      <MainContent>{children}</MainContent>
    </>
  );
}

export default MainLayout;
