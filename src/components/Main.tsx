import { Headline } from "@/components/Headline";
import { NextLogo } from "@/components/NextLogo";
import { Links } from "@/components/Links";

interface Props {
  page: string;
}

export const Main: React.FC<Props> = (props) => {
  const { page } = props;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Headline>
        <code className="font-mono font-bold">{`src/app/${page}.tsx`}</code>
      </Headline>
      <NextLogo />
      <Links />
    </main>
  );
};
