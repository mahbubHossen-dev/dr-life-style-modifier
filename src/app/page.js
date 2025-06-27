
import Banner from "@/components/homeComponents/Banner";
import LifeStyle from "@/components/homeComponents/LifeStyle";
import Navbar from "@/shared/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <LifeStyle />
    </div>
  );
}
