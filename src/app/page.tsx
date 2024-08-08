"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { useCallback, useEffect, useRef, useState } from "react";

const Index: React.FC = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

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

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [count]);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, [setIsShow]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue.length > 5) {
      return;
    }
    setText(e.target.value.trim());
  }, []);

  return (
    <>
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
      <Main page="index" />
      <Footer />
    </>
  );
};

export default Index;
