
import AppointSection from "@/components/homeComponents/AppointSection";
import Banner from "@/components/homeComponents/Banner";
import LifeStyle from "@/components/homeComponents/LifeStyle";
import OurServices from "@/components/homeComponents/OurServices";
import Testimonial from "@/components/homeComponents/Testimonial";
import YoutubeSection from "@/components/homeComponents/YoutubeSection";
import Navbar from "@/shared/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <LifeStyle />
      <AppointSection />
      <OurServices />
      <YoutubeSection />
      <Testimonial />
    </div>
  );
}












