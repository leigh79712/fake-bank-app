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
          <Link href={`/${data._id}/bankapp`}>{myApp}</Link>
        ) : (
          <Link href="/register">{joinUs}</Link>
        )}
      </div>
    </div>
  );
};

export default JoinToday;
