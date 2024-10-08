import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Home1 = () => {
  return (
    <div
      className="container relative mx-auto flex min-h-screen w-[350px] max-w-[1200px] items-center justify-center rounded-3xl bg-cover bg-center p-5 sm:w-[600px] md:h-full md:w-[800px] lg:w-[1000px] xl:w-[1200px]"
      style={{ backgroundImage: "url('images/books.jpg')" }}
    >
      <div className="grid gap-5 text-center md:gap-10">
        <h1 className="text-2xl font-bold text-white md:text-4xl">
          Jadwal Pelaksanaan:
        </h1>
        <div className="grid items-center justify-center gap-5">
          <motion.div
            className="text- flex h-auto w-[300px] items-center justify-center rounded-xl bg-white p-5 text-black shadow-lg md:w-auto" // Mengatur ukuran kartu
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center justify-center text-center md:text-left">
              <Image
                src="/images/Hari_tgl.png"
                alt="Icon Hari Tanggal"
                width={50}
                height={50}
                className="bg-cover"
              />
              <p className="mt-2 text-xl font-thin md:ml-4 md:mt-0">
                Hari, Tanggal: Minggu, 24 November 2024
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex h-auto w-[300px] items-center justify-center rounded-xl bg-white p-5 text-black shadow-lg md:w-auto" // Mengatur ukuran kartu
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center justify-center text-center">
              <Image
                src="/images/Website.png"
                alt=""
                width={50}
                height={50}
                className=""
              />
              <p className="text-xl font-thin">
                Tempat: Online melalui http://sentralolimpiade.id
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bagian gambar sentral */}
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center">
            <img
              src="/images/Sentral.png"
              alt=""
              className="mx-auto h-[40px] w-[250px] cursor-pointer bg-cover md:h-[100px] md:w-[500px]"
              onClick={() => window.open("https://sentralolimpiade.id/")}
            />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-white md:text-4xl">
          Pendaftaran:
        </h1>
        <div className="w-relative grid gap-5">
          <motion.div
            className="flex h-auto w-[300px] items-center justify-center rounded-xl bg-white p-5 text-black shadow-lg md:w-auto" // Mengatur ukuran kartu
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center justify-center text-center gap-3">
              <img
                src="/images/Hari_tgl.png"
                alt=""
                className="h-[50px] w-[50px]"
              />
              <p className="text-xl font-thin text-left">
                Gratis dengan syarat/ketentuan Benefit : <br /> Medali Predikat,
                Piagam Predikat & Sertifikat Partisipasi atau,
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex h-auto w-[300px] items-center justify-center rounded-xl bg-white p-5 text-black shadow-lg md:w-auto" // Mengatur ukuran kartu
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center justify-center text-center gap-3">
              <Image
                src="/images/Website.png"
                alt=""
                width={50}
                height={50}
                className=""
              />
              <p className="text-xl font-thin text-left">
                Member VIP dengan Biaya Rp. 50.000 dengan ketentuan Benefit : <br />
                Medali Predikat, Piagam Predikat, Sertifikat Partisipasi, Akses
                Soal & Pembahasan
              </p>
            </div>
          </motion.div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/images/Whatsapp.png"
            alt=""
            className="mx-auto h-[40px] w-[250px] cursor-pointer bg-cover md:h-[100px] md:w-[500px]"
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send/?phone=%2B6281353000052&text&type=phone_number&app_absent=0",
              )
            }
          />
        </div>
        <motion.div
          className="h-relative mx-auto w-[300px] rounded-lg bg-orange-500 p-5 text-white shadow-lg md:w-[800px]" // Mengatur ukuran kartu
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex md:flex-row flex-col items-center justify-center md:gap-10  text-center">
            <Image
              src="/images/Fasilitas.png"
              alt="fasilitas"
              width={100}
              height={50}
            />
            <div className="max-w-md space-y-5 text-lg font-bold">
              <h1>Fasilitas</h1>
              <ul className="list-disc space-y-4 pl-5">
                <li>Medali Penghargaan</li>
                <li>Piagam Penghargaan</li>
                <li>Sertifikat Penghargaan</li>
                <li>Akses Soal dan Pembahasan</li>
                <li>Kaos Eksklusif</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="h-relative mx-auto w-[300px] rounded-lg bg-orange-500 p-5 text-white shadow-lg md:w-[800px]" // Mengatur ukuran kartu
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex md:flex-row flex-col items-center justify-center md:gap-10 text-center">
            <Image
              src="/images/CaraDaftarGratis.png"
              alt="CaraDFaftarGratis"
              width={100}
              height={50}
            />
            <p className="text-lg font-bold text-center">DOORPRIZE : <br /> 1 Unit NOTEBOOK</p>
          </div>
        </motion.div>

        <motion.div
          className="h-relative mx-auto md:w-[800px] w-[300px] rounded-lg bg-orange-500 p-5 text-white shadow-lg" // Mengatur ukuran kartu
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex md:flex-row flex-col items-center justify-center md:ap-10 text-center">
            <Image
              src="/images/Fasilitas.png"
              alt="fasilitas"
              width={100}
              height={50}
            />
            <div className="max-w-md space-y-5 text-lg font-bold">
              <h1 className="">Hadiah:</h1>
              <ul className="list-disc space-y-4 pl-5">
                <li>Medali Penghargaan</li>
                <li>Piagam Penghargaan</li>
                <li>Sertifikat Penghargaan</li>
                <li>Akses Soal dan Pembahasan</li>
                <li>Kaos Eksklusif</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col space-y-5 font-semibold text-white">
          <h1>Periode Pendaftaran :</h1>
          <h1>17 Sep – 23 Nov 2024 Online melalui </h1>
          <Link href="https://sentralolimpiade.id/" className="underline">
            http://sentralolimpiade.id
          </Link>

          <div className="flex items-center justify-center">
            <img
              src="/images/Sentral.png"
              alt=""
              className="mx-auto h-[40px] w-[250px] cursor-pointer bg-cover md:h-[100px] md:w-[500px]"
              onClick={() => window.open("https://sentralolimpiade.id/")}
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-y-14">
          <motion.div
            className="relative h-auto w-[300px] rounded-xl bg-white p-5 text-black shadow-lg md:w-[800px]" // Mengatur ukuran kartu
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="items-center justify-center space-x-7 text-left">
              <p className="md:text-xl font-bold">Cara Pendaftaran Gratis :</p>
              <p className="text-xs">
                1. Follow Instagram @sentralolimpiade <br />
                2. Follow Instagram @eventindo.co <br />
                3. Komen pendapat positif kamu tentang sentralolimpiade dan tag
                5 teman kamu di postingan ini. <br />
                4. Buat screenshot poin 1 s/d 3 <br />
                5. Sign up dan isi data diri kamu kemudian upload formulir
                pendaftaran di http://sentralolimpiade.id <br />
                ​6. Pilih Event NSO <br />
                7. Pilih Bidang Studi yang diminati maximal 5 (lima) <br />
                ​8. Pilih Opsi Gratis
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative h-auto w-[300px] rounded-xl bg-white p-5 text-black shadow-lg md:w-[800px]" // Mengatur ukuran kartu
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="items-center justify-center space-x-7 text-left">
              <p className="md:text-xl font-bold">Cara Pendaftaran Gratis :</p>
              <p className="text-xs">
                1. Follow Instagram @sentralolimpiade <br />
                2. Follow Instagram @eventindo.co <br />
                3. Komen pendapat positif kamu tentang sentralolimpiade dan tag
                5 teman kamu di postingan ini. <br />
                4. Buat screenshot poin 1 s/d 3 <br />
                5. Sign up dan isi data diri kamu kemudian upload formulir
                pendaftaran di http://sentralolimpiade.id <br />
                ​6. Pilih Event NSO <br />
                7. Pilih Bidang Studi yang diminati maximal 5 (lima) <br />
                ​8. Pilih Opsi Gratis
              </p>
            </div>
          </motion.div>

          <div className="flex items-center justify-center">
            <img
              src="/images/Unduh.png"
              alt="fasilitas"
              onClick={() =>
                window.open(
                  "https://drive.google.com/drive/folders/180AwEh5PajtqtPU008yCpU6Jr15nsVau",
                )
              }
              className="mx-auto h-[40px] w-[250px] cursor-pointer bg-cover md:h-[100px] md:w-[500px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home1;
