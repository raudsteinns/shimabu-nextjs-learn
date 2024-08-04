import { Footer } from "@/components/Footer";
import { Guide } from "@/components/Guide";
import { Links } from "@/components/Links";
import { NextLogo } from "@/components/NextLogo";

export const Home: React.FC = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Guide title="about" />
        <NextLogo />
        <Links />
      </main>
      <Footer />
    </>
  );
};
