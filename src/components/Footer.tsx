/** @jsxImportSource @emotion/react */
"use client";

import React from "react";
import { css } from "@emotion/react";

const Footer: React.FC = () => {
  return (
    <footer css={footerStyle}>
      <p>フッター</p>
    </footer>
  );
};

const footerStyle = css`
  background-color: teal;
  color: #fff;
`;

export default Footer;
