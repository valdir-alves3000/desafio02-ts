import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box minHeight="100vh" bg="blue.200">
      <Header />
      {children}
      <Footer />
    </Box>
  );
};
