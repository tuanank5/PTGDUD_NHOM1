import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Banner from "../../components/home/Banner";
import Category from "../../components/home/Category";
import ProductSection from "../../components/home/ProductSection";
import Review from "../../components/home/Review";
import Slider from "../../components/home/Slider";
import WhyUs from "../../components/home/WhyUs";
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
