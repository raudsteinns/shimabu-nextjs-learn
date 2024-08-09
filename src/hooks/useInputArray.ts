"use client";

import { useCallback, useState } from "react";

export const useInputArray = (): [
  string,
  string[],
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  () => void
] => {
  const [text, setText] = useState("");
  const [array, setArray] = useState<string[]>([]); // 空の配列として初期化

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue.length > 5) {
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        console.log("既に存在します");
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);

  return [text, array, handleChange, handleAdd];
};
