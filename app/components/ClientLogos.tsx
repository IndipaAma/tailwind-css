import React from "react";
import Image from "next/image";
import Logo1 from "../../public/Logo (1).svg";
import Logo2 from "../../public/Logo (2).svg";
import Logo3 from "../../public/Logo (3).svg";
import Logo4 from "../../public/Logo (4).svg";
import Logo5 from "../../public/Logo (5).svg";
import Logo6 from "../../public/Logo (6).svg";
import Logo7 from "../../public/Logo (7).svg";

const ClientLogos = () => {
  return (
    <div className="flex justify-evenly my-8">
      <Image src={Logo1} alt="Logo1"></Image>
      <Image src={Logo2} alt="Logo2"></Image>
      <Image src={Logo3} alt="Logo3"></Image>
      <Image src={Logo4} alt="Logo4"></Image>
      <Image src={Logo5} alt="Logo5"></Image>
      <Image src={Logo6} alt="Logo6"></Image>
      <Image src={Logo7} alt="Logo7"></Image>
    </div>
  );
};

export default ClientLogos;
