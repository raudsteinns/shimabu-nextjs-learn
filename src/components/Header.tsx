/** @jsxImportSource @emotion/react */
"use client";

import React from "react";
import { css } from "@emotion/react";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header css={headerStyle}>
      <Link href="/">Index</Link>
      <Link href="/about">About</Link>
    </header>
  );
};

const headerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  height: 100px;
  border-bottom: 1px solid #eaeaea;
  a {
    font-size: 1.2rem;
    &:hover,
    &:focus,
    &:active {
      color: #0070f3;
    }
  }
`;
