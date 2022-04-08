/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, SectionHeader } from "components/Common";
import { useRouter } from "next/router";
import Content from "./Content.json";
const JoinToday = () => {
  const router = useRouter();
  const { joinTodayHeader, joinUs } = Content[router.locale];
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
        `}
      >
        <Button
          css={css`
            margin: 2em;
            font-size: 1.5em;
            border-radius: 50px;
          `}
        >
          {joinUs}
        </Button>
      </div>
    </div>
  );
};

export default JoinToday;
