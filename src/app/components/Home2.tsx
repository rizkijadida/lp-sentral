import Image from "next/image";
import React from "react";

const Home2 = () => {
  return (
    <div
      className="container relative mx-auto flex min-h-screen w-[350px] max-w-[1200px] items-center justify-center rounded-3xl bg-cover bg-center p-5 sm:w-[600px] md:h-full md:w-[800px] lg:w-[1000px] xl:w-[1200px]"
      style={{ backgroundImage: "url('images/home2bg.jpg')" }}
    >
      <div className="flex flex-col items-center justify-center space-y-10 text-center font-bold text-white">
        <div className="w-[300px]">
          <p className="font-roboto text-center text-xl italic">
            {" "}
            {/* Menambahkan class text-center */}
            Perlombaan edukasi adalah platform penting untuk mengembangkan
            kemampuan dan potensi peserta di berbagai tingkat pendidikan, mulai
            dari siswa hingga guru.
          </p>
        </div>

        <Image
          src="/images/NSO.jpeg"
          alt=""
          width={500}
          height={250}
          className="rounded-2xl"
        />

        <Image
          src="/images/Whatsapp.png"
          alt=""
          width={500}
          height={250}
          className="cursor-pointer rounded-2xl"
          onClick={() =>
            window.open(
              "https://api.whatsapp.com/send/?phone=%2B6281353000052&text&type=phone_number&app_absent=0",
            )
          }
        />
        <Image
          src="/images/Daftar.png"
          alt=""
          width={500}
          height={250}
          className="cursor-pointer rounded-2xl"
          onClick={() => window.open("https://sentralolimpiade.id/")}
        />
        <Image
          src="/images/Instagram.png"
          alt=""
          width={500}
          height={250}
          className="cursor-pointer rounded-2xl"
          onClick={() =>
            window.open("https://www.instagram.com/sentralolimpiade/")
          }
        />
      </div>
    </div>
  );
};

export default Home2;
