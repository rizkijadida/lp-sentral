import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="container bg-white text-black">
      <div className="flex justify-center">
        <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl">
          We Would Love to Have You Visit Soon!
        </h1>
      </div>
      <div className="m-10 flex flex-col items-center justify-center gap-10 md:flex-row md:gap-44">
        <div className="text-center md:text-left">
        <Image
            src="/images/LogoSO.png"
            alt=""
            width={80}
            height={80}
          />
          <h1 className="text-xl font-bold">Sentral Olimpiade</h1>
          <Link
            href="https://sentralolimpiade.id/"
            className="text-gray-700 underline"
          >
            https://sentralolimpiade.id/
          </Link>
          <h1 className="text-gray-500">#Bersaing dan Berprestasi</h1>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-white">logo</h1>
          <h1 className="text-xl font-bold">Social Media</h1>
          <div className="flex flex-col underline">
            <Link href="https://www.facebook.com/sentralolimpiade/">
              www.facebook.com/sentralolimpiade/
            </Link>
            <Link href="https://www.instagram.com/sentralolimpiade/">
              www.instagram.com/sentralolimpiade/
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
