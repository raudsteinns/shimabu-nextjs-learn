import { Headline } from "@/components/Headline";
import { NextLogo } from "@/components/NextLogo";
import { Links } from "@/components/Links";
import { useCallback, useState } from "react";

interface Props {
  page: string;
}

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

export const Main: React.FC<Props> = (props) => {
  const { page } = props;
  const [items, setItems] = useState(ITEMS);
  const handleReduce = useCallback(() => {
    setItems((prevItems) => prevItems.slice(0, prevItems.length - 1));
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Headline>
        <code className="font-mono font-bold">{`src/app/${page}.tsx`}</code>
      </Headline>
      <NextLogo />
      <Links items={items} handleReduce={handleReduce} />
    </main>
  );
};
