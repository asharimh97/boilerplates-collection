import { Flex } from "components/Base";
import Header from "../Header";

interface PublicLayoutProps {
  children?: React.ReactNode;
  [key: string]: any;
}

function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <>
      <Header />
      <Flex
        as="main"
        align="center"
        justify="center"
        direction="column"
        w="100%"
        h="calc(100vh - 64px)"
      >
        {children}
      </Flex>
    </>
  );
}

export default PublicLayout;
