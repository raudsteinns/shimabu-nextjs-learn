"use client";

import { Inter } from "next/font/google";
import "@/app/globals.css";
import React from "react";

import { useBgLightblue } from "@/hooks/useBgLightblue";
import { useCounter } from "@/hooks/useCounter";
import { useInputArray } from "@/hooks/useInputArray";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgLightblue();

  return (
    <html lang="ja">
      <body>
        {React.cloneElement(children as React.ReactElement, {
          counter,
          inputArray,
        })}
      </body>
    </html>
  );
}
