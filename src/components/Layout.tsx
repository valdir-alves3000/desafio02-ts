import { Footer } from "./Footer";
import { Header } from "./Header";
import { ReactNode } from "react";

interface LayoutProps{
  children:ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
