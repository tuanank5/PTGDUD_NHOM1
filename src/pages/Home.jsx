//

import Header from "../components/Header";
import Menu from "../components/Menu";
import Slider from "../components/home/Slider";
import ProductSection from "../components/home/ProductSection";
import Banner from "../components/home/Banner";
import Category from "../components/home/Category";
import WhyUs from "../components/home/WhyUs";
import Review from "../components/home/Review";
export default function Home() {
  return (
    <div>
      <Header />
      <Menu />
      <Slider />
      <ProductSection />
      <Banner />
      <Category />
      <WhyUs />
      <Review />
    </div>
  );
}