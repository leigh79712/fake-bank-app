/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const languages = {
  "en-US": "English",
  "zh-TW": "繁體中文",
};

const Languages = () => {
  const router = useRouter();
  const [isShow, setIsShow] = useState(false);

  const handlerList = () => {
    setIsShow(!isShow);
  };

  const renderLanguage = () => {
    const Lists = [];
    for (const key in languages) {
      if (Object.hasOwnProperty.call(languages, key)) {
        const element = languages[key];
        Lists.push(
          <li key={key} onClick={() => setIsShow(false)}>
            <Link href="/" locale={key}>
              {element}
            </Link>
          </li>
        );
      }
    }
    return Lists;
  };

  return (
    <div>
      <p
        onClick={handlerList}
        css={css`
          cursor: pointer;
        `}
      >
        {languages[router.locale]}
      </p>
      {isShow && (
        <ul
          css={css`
            list-style: none;
            margin: 0;
            padding: 0;
            position: absolute;
          `}
        >
          {renderLanguage()}
        </ul>
      )}
    </div>
  );
};

export default Languages;
