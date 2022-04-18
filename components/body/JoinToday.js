/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import Link from "next/link";
import SectionHeader from "./components/SectionHeader";

import { useRouter } from "next/router";
import Content from "../Header/Content.json";
const JoinToday = ({ loggedIn, data }) => {
  const router = useRouter();
  const { jointodayheader, joinus, myapp } = Content[router.locale];
  return (
    <div
      css={css`
        margin: 6em 0;
      `}
    >
      <SectionHeader>{jointodayheader}</SectionHeader>
      <div
        css={css`
          text-align: center;
          margin: 5em;
        `}
      >
        {loggedIn ? (
          <Link href={`/${data._id}/bankapp`}>
            <a
              css={css`
                font-size: 1.5em;
                border-radius: 50px;
                background-color: #2ec4b6;
                padding: 1em 3em;
                color: #fff;
                text-decoration: none;
                cursor: pointer;
              `}
            >
              {myapp}
            </a>
          </Link>
        ) : (
          <Link href="/register">
            <a
              css={css`
                font-size: 1.5em;
                border-radius: 50px;
                background-color: #2ec4b6;
                padding: 1em 3em;
                color: #fff;
                text-decoration: none;
                cursor: pointer;
              `}
            >
              {joinus}
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default JoinToday;
