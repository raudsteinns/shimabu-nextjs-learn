"use client";

import { useEffect, useRef } from "react";

export const useBgLightblue = () => {
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
    }, []);
  };