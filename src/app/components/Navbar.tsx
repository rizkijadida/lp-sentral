import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="container mx-auto my-10 space-y-12 bg-white">
      <Image
        src="/images/LogoSO.png"
        alt="Olimpiade Logo"
        width={200}
        height={200}
        className="ml-10 cursor-pointer sm:ml-10 md:ml-20 lg:ml-40" // Responsif tanpa mengganggu pengaturan desktop
      />
      <Separator className="my-4" />
    </nav>
  );
};

export default Navbar;
