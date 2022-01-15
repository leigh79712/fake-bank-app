/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";

const SectionTitle = (props) => {
  <div
    css={css`
      font-size: 1.8rem;
      font-weight: 600;
      text-transform: uppercase;
      color: var(--color-primary);
      margin-bottom: 1rem;
    `}
  >
    props.children
  </div>;
};

export default SectionTitle;
