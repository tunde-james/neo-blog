import HeroSection from "./home/hero-section";
import Posts from "./home/posts";
import CalloutSection from "./home/callout-section";

export default function Home() {
  return (
    <>
      <div className="container">
        <HeroSection />
        <Posts />
      </div>
      <CalloutSection />
    </>
  );
}
