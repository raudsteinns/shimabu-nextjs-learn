"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";

const About: React.FC = () => {
  return (
    <>
      <Header />
      <Main page="about" />
      <Footer />
    </>
  );
};

export default About;
