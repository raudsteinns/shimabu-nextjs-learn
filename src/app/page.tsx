"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { useCallback } from "react";

const Index: React.FC = () => {
  const foo = 1;
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      console.log((e.target as HTMLAnchorElement).href);
      e.preventDefault();
      alert(foo);
    },
    []
  );

  return (
    <>
      <Header />
      <a href="/about" onClick={handleClick}>
        ボタン
      </a>
      <Main page="index" />
      <Footer />
    </>
  );
};

export default Index;
