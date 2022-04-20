/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SectionHeader } from "components/Common";
import { useRouter } from "next/router";
import Content from "./Content.json";
import Link from "next/link";

const JoinToday = ({ loggedIn, data }) => {
  const router = useRouter();
  const { joinTodayHeader, joinUs, myApp } = Content[router.locale];

  return (
    <div
      css={css`
        margin: 6em 0;
      `}
    >
      <SectionHeader>{joinTodayHeader}</SectionHeader>
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
              {myApp}
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
              {joinUs}
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default JoinToday;
