import React, { useState } from "react";
import Link from "next/link";

interface DropdownProps {
  selected: string | JSX.Element;
  items: any[];
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ selected, items, className }) => {
  const [show, setShow] = useState(false);

  const handleDropdown = () => {
    setShow(!show);
  };

  return (
    <div className={`relative${className ? ` ${className}` : ""}`}>
      <span className="cursor-pointer" onClick={handleDropdown}>
        {selected}
      </span>
      {show ? (
        <ul className="mt-1 whitespace-nowrap text-left pointer-events-auto space-y-1 rounded-lg bg-white dark:bg-slate-900 p-3 text-[0.8125rem] font-medium leading-6 text-slate-700 shadow-xl shadow-black/5 ring-1 ring-slate-700/10 absolute left-1/2 -translate-x-1/2">
          {items.map((item) => (
            <li
              key={item.text}
              className="text-black dark:text-white cursor-pointer flex"
              onClick={() => {
                if (item.event) {
                  item.event();
                }
                handleDropdown();
              }}
            >
              {item.Icon ? (
                <div className="flex items-center bg-white dark:bg-slate-900 mr-3">
                  <item.Icon className="w-4 h-4 fill-slate-900 dark:fill-white" />
                </div>
              ) : null}
              {item.link ? <LinkLocale {...item} /> : <div>{item.text}</div>}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

interface LinkLocaleProps {
  link: string;
  text: string;
  locale?: string;
}

const LinkLocale: React.FC<LinkLocaleProps> = ({ link, text, locale }) =>
  locale ? (
    <Link href={link} locale={locale}>
      {text}
    </Link>
  ) : (
    <Link href={link}>{text}</Link>
  );

export default Dropdown;
