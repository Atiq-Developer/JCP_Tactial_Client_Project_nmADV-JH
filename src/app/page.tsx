import ImageSlider from "./components/Courasel/Slider/ImageSlider";
import ExploreCategories from "./components/ExploringNewStyles";
import Footer from "./components/footer";
import HeroSection from "./components/HeroSection/Hero";
import TopCategories from "./components/TopCategories";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ImageSlider />
      <TopCategories />
      <ExploreCategories />
      <Footer />
    </>
  );
}
