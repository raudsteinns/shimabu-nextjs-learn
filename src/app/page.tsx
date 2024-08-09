"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { useBgLightblue } from "@/hooks/useBgLightblue";
import { useCounter } from "@/hooks/useCounter";
import { useInputArray } from "@/hooks/useInputArray";

const Index: React.FC = () => {
  const [count, isShow, handleClick, handleDisplay] = useCounter();
  const [text, array, handleChange, handleAdd] = useInputArray();
  useBgLightblue();

  return (
    <>
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array && array.length > 0 ? (
          array.map((item, i) => <li key={i}>{item}</li>)
        ) : (
          <li>No items found</li>
        )}
      </ul>
      <Main page="index" />
      <Footer />
    </>
  );
};

export default Index;
