import { motion } from "framer-motion";
import Image from "next/image";
import { FaMedal } from "react-icons/fa";
import { FaComputer, FaGift } from "react-icons/fa6";

const Homee = () => {
  return (
    // sm:h-[200px] sm:w-[70%] lg:h-[400px] lg:w-[50%]
    <div className="container m-auto grid">
      <div
        className="mx-5 inline-block h-[150px] w-[350px] rounded-3xl bg-cover bg-center md:relative md:mx-auto md:h-[300px] md:w-[60%] md:xl:w-[1200px]"
        style={{ backgroundImage: "url('images/HeaderWebSO.jpg')" }}
      ></div>

      <div className="m-5 grid w-[350px] items-center justify-center space-y-5 md:m-10 md:w-[1200px]">
        <motion.h1
          className="mx-auto w-[350px] text-center text-2xl font-semibold md:inline-block md:w-[1200px] md:font-bold"
          initial={{ y: "100%" }} // Memulai dari luar layar di kanan
          animate={{ y: "0%" }} // Bergerak ke posisi asli
          exit={{ y: "-100%" }} // Keluar ke luar layar di kiri
          transition={{ duration: 2 }} // Durasi pergerakan
        >
          KOMPETISI OLIMPIADE SAINS NASIONAL
        </motion.h1>
        <motion.p
          className="mx-auto w-[350px] text-center text-xl md:inline-block md:w-[1200px]"
          initial={{ y: "100%" }} // Memulai dari luar layar di kanan
          animate={{ y: "0%" }} // Bergerak ke posisi asli
          exit={{ y: "-100%" }} // Keluar ke luar layar di kiri
          transition={{ duration: 2 }} // Durasi pergerakan
        >
          Pada Tingkat SD, SMP, SMA, Mahasiswa, dan Guru Tingkat Nasional DAFTAR
          & UJIAN PRAKTIS dengan sistem yang terintegrasi
        </motion.p>

        <div className="flex flex-col items-center text-center text-sm md:w-[1200px] md:flex-row md:justify-center md:space-x-4 md:px-4 md:text-xl">
          <div className="relative h-[40px] w-[40px] md:h-[70px] md:w-[70px]">
            <Image
              src="/images/CaraDaftarGratis.png"
              alt=""
              fill
              className="bg-cover"
            />
          </div>
          <h1 className="text-lg font-bold">DOORPRIZE: 1 Unit NOTEBOOK</h1>
        </div>

        <div className="flex flex-col items-center justify-center space-y-3 md:m-auto md:flex-row md:items-start md:justify-start md:space-x-5 md:space-y-0">
          <div className="relative my-auto h-[40px] w-[40px] md:h-[70px] md:w-[70px]">
            <Image
              src="/images/Hadiah.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="max-w-md text-center md:text-left">
            <h1 className="text-xl font-bold">HADIAH:</h1>
            <ul className="list-disc space-y-4 pl-5 text-lg font-bold">
              <li>Medali Penghargaan</li>
              <li>Piagam Penghargaan</li>
              <li>Sertifikat Penghargaan</li>
              <li>Akses Soal dan Pembahasan</li>
              <li>Kaos Eksklusif</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img
            src="/images/Daftar.png"
            alt=""
            onClick={() =>
              window.open("https://sentralolimpiade.id/", "_blank")
            }
            className="h-[50px] w-[250px] cursor-pointer bg-cover md:h-[100px] md:w-[500px]"
          />
        </div>

        {/* card */}

        <div className="grid-row grid justify-items-center gap-4 p-5 sm:grid-cols-2 md:p-10">
          <div className="grid gap-5">
            {/* Card 1 */}
            <motion.div
              className="h-auto w-[250px] rounded-lg bg-[#FF0000] p-5 text-white shadow-lg sm:h-[100px] sm:w-[100px] md:h-[250px] md:w-auto" // Mengatur ukuran kartu
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center text-center">
                <FaMedal color="gold" size={30} />
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-2xl font-thin text-orange-100 sm:text-3xl">
                  Tingkat SD/MI
                </p>
                <p className="text-sm font-thin text-orange-100 sm:text-xl">
                  Matematika, IPAS, PKN, Bahasa Indonesia, Bahasa Arab, dan
                  Bahasa Inggris.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="h-auto w-[250px] rounded-lg bg-[#1E90FF] p-5 text-white shadow-lg sm:h-[100px] sm:w-[100px] md:h-[250px] md:w-auto"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center text-center">
                <FaMedal color="gold" size={30} />
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-2xl font-thin text-orange-100 sm:text-3xl">
                  Tingkat SMP/MTs
                </p>
                <p className="text-sm font-thin text-orange-100 sm:text-xl">
                  Matematika, IPA, IPS, PKN, Informatika, Fisika Terpadu, Kimia
                  Terpadu, Biologi Terpadu, Bahasa Indonesia, Bahasa Arab, dan
                  Bahasa Inggris.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid gap-5">
            {/* Card 3 */}
            <motion.div
              className="h-auto w-[250px] rounded-lg bg-gray-500 p-5 text-white shadow-lg sm:h-[100px] sm:w-[100px] md:h-[250px] md:w-auto"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center text-center">
                <FaMedal color="gold" size={30} />
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-2xl font-thin text-orange-100 sm:text-3xl">
                  Tingkat SMA/MA/SMK
                </p>
                <p className="text-sm font-thin text-orange-100 sm:text-xl">
                  Akuntansi, Astronomi, Biologi, Ekonomi, Fisika, Geografi,
                  Kebumian, Kedokteran Dasar, Kimia, Informatika, Matematika,
                  Sejarah, PKN, Sosiologi, Bahasa Indonesia, Bahasa Arab, dan
                  Bahasa Inggris.
                </p>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              className="h-auto w-[250px] rounded-lg bg-[#00008B] p-5 text-white shadow-lg sm:h-[100px] sm:w-[100px] md:h-[250px] md:w-auto"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center text-center">
                <FaMedal color="gold" size={30} />
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-2xl font-thin text-orange-100 sm:text-3xl">
                  Tingkat Mahasiswa
                </p>
                <p className="text-sm font-thin text-orange-100 sm:text-xl">
                  Akuntansi, Biologi, Ekonomi, Fisika, Kimia, Matematika,
                  Sejarah, Bahasa Indonesia, dan Bahasa Inggris.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-5 md:space-y-10">
          <div className="flex items-center justify-center">
            <img
              src="/images/Unduh.png"
              alt=""
              onClick={() =>
                window.open(
                  "https://drive.google.com/drive/folders/180AwEh5PajtqtPU008yCpU6Jr15nsVau",
                  "_blank",
                )
              }
              className="h-[40px] w-[250px] cursor-pointer bg-cover md:h-[100px] md:w-[500px]"
            />
          </div>

          <div className="flex items-center justify-center">
            <img
              src="/images/Telegram.png"
              alt=""
              onClick={() => window.open("https://t.me/NSO_SENTRAL", "_blank")}
              className="h-[50px] w-[250px] cursor-pointer bg-cover md:h-[100px] md:w-[500px]"
            />
          </div>
        </div>
        <div
          className="container relative mx-auto grid md:h-full  md:w-[1200px] items-center justify-center rounded-3xl bg-cover bg-center"
          style={{ backgroundImage: "url('images/books.jpg')" }}
        >
          <Image
            src="/images/NSO.jpeg"
            alt=""
            width={500}
            height={250}
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Homee;
