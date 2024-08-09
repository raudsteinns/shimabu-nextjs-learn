"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";

interface LayoutProps {
  count: number;
  isShow: boolean;
  handleClick: () => void;
  handleDisplay: () => void;
  text: string;
  array: string[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAdd: () => void;
}

const About: React.FC<LayoutProps> = (props) => {
  const { count, isShow, handleClick, handleDisplay, text, array, handleChange, handleAdd } = props;

  return (
    <>
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <Main page="about" />
      <Footer />
    </>
  );
};

export default About;
