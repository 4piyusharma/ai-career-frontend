import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import CTABanner from "../components/ctabanner";
import Features from "../components/features";

const Home = () => {
  return (
    <div className=" bg-page min-h-screen mt-16">
      <Hero />
      <Features />
      <Pricing />
      <CTABanner />
    </div>
  );
};

export default Home;
