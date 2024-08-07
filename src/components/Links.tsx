import React from "react";

interface Items {
  href: string;
  title: string;
  description: string;
}

const ITEMS: Items[] = [
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title: "Docs",
    description: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    title: "Learn",
    description: "Learn about Next.js in an interactive course with quizzes!",
  },
  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title: "Templates",
    description: "Explore starter templates for Next.js.",
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title: "Deploy",
    description:
      "Instantly deploy your Next.js site to a shareable URL with Vercel.",
  },
];

export const Links: React.FC = () => {
  return (
    <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
      {ITEMS.map((item, i) => (
        <a
          key={i}
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
  );
};
