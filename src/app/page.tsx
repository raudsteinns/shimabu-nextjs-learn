"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";

const Index: React.FC = () => {
  return (
    <>
      <Header />
      <Main page="index" />
      <Footer />
    </>
  );
};

export default Index;
