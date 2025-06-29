
import AboutUs from "@/components/homeComponents/AboutUs";
import AppointSection from "@/components/homeComponents/AppointSection";
import Banner from "@/components/homeComponents/Banner";
import BookAppoint from "@/components/homeComponents/BookAppoint";
import LifeStyle from "@/components/homeComponents/LifeStyle";
import Map from "@/components/homeComponents/Map";
import OurServices from "@/components/homeComponents/OurServices";
import SearchForm from "@/components/homeComponents/SearchForm";
import Testimonial from "@/components/homeComponents/Testimonial";
import YoutubeSection from "@/components/homeComponents/YoutubeSection";


export default function Home() {


  return (
    <div>
      <Banner />
      <LifeStyle />
      <AppointSection />
      <OurServices />
      <YoutubeSection />
      <Testimonial />
      <AboutUs />
      <BookAppoint />
      <SearchForm />
      <Map />

    </div>
  );
}












