import Footer from "@/components/Footer";
import Guide from "@/components/Guide";
import Links from "@/components/Links";
import NextLogo from "@/components/NextLogo";

const Home: React.FC = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Guide>about</Guide>
        <NextLogo />
        <Links />
      </main>
      <Footer />
    </>
  );
};

export default Home;
