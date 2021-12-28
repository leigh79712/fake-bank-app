/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <a
            css={css`
              width: 150px;
              height: 45px;
              display: inline-block;
              background-image: url("/images/logo.png");
              background-size: contain;
              background-repeat: no-repeat;
            `}
          />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
