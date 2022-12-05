import React from "react";
import Link from "next/link";
import Image from "next/image";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="mt-10 py-3 text-sm font-mono text-center">
      © Copyright by Jie Lin Yang and Jerry Tsai.
    </footer>
  );
};

export default Footer;
