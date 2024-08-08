"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { useCallback, useEffect, useRef, useState } from "react";

const Index: React.FC = () => {
  const [count, setCount] = useState(1);

  const bodyRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    console.log("foo");

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
  }, [count]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (count < 10) {
        setCount((prevCount) => prevCount + 1);
      }
    },
    [count]
  );

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
