import React from "react";
import Link from "next/link";
import Image from "next/image";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="mt-10">
      <div className="container mx-auto text-center">
        {/* <nav>
          <Link className="mx-5" href="/about">
            About
          </Link>
          <Link className="mx-5" href="/pricing">
            Pricing
          </Link>
          <Link className="mx-5" href="/terms-of-use">
            Terms of Use
          </Link>
          <Link className="mx-5" href="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className="mx-5" href="/careers">
            Careers
          </Link>
          <Link className="mx-5" href="/blog">
            Blog
          </Link>
          <Link className="mx-5" href="/contact-us">
            Contact Us
          </Link>
        </nav>
        <Image
          className="inline my-10"
          src={`/images/logo-light.svg`}
          alt="Petit Bank"
          width={200}
          height={40}
        /> */}
        <p className="text-sm font-mono">
          © Copyright by Jie Lin Yang and Jerry Tsai.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
