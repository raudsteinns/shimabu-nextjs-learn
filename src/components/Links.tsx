import React, { useCallback, useState } from "react";

interface Items {
  href: string;
  title: string;
  description: string;
}

interface LinksProps {
  items: Items[];
  handleReduce: () => void;
}

export const Links: React.FC<LinksProps> = (props) => {
  const { items, handleReduce } = props;
  return (
    <>
      <button onClick={handleReduce}>減らす</button>
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              {item.title}{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              {item.description}
            </p>
          </a>
        ))}
      </div>
    </>
  );
};
