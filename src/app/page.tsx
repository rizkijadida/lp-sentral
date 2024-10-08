"use client";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homee from "./components/Homee";
import Home1 from "./components/Home1";
import Home2 from "./components/Home2";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col space-y-10 ">
      {/* Header di bagian atas */}
      <Navbar />

      {/* Home1 sebagai konten utama */}
      <div className="flex-grow">
        <Homee />
      </div>

      <Home1 />

      <Home2 />

      <div className="flex items-center justify-center md:m-10">
      <div>
  <Image
    src="/images/HeaderWebSO.jpg"
    alt=""
    width={500}
    height={500}
    className="flex mx-auto cursor-pointer p-5 md:p-0 rounded-none sm:rounded-xl"
  />
</div>

        </div>
        

      {/* Footer di bagian bawah */}
      <Footer />
    </div>
  );
}
