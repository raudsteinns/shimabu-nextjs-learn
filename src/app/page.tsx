"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { useEffect, useRef, useState } from "react";

const Index: React.FC = () => {
  const [count, setCount] = useState(1);

  const bodyRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    bodyRef.current = document.body;
    const body = bodyRef.current;
    // console.log("マウント時");
    if (body) {
      body.style.backgroundColor = "lightblue";
    }

    return () => {
      // console.log("アンマウント時");
      if (body) {
        body.style.backgroundColor = "";
      }
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Main page="index" />
      <Footer />
    </>
  );
};

export default Index;
