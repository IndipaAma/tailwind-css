import React from "react";
import Image from "next/image";
import Icon1 from "../../public/Icon.svg";
import Icon2 from "../../public/Icon (1).svg";
import Icon3 from "../../public/Icon (2).svg";

const CommunityLogos = () => {
  return (
    <div className="flex justify-evenly my-10">
      <Image src={Icon1} alt="Icon1"></Image>
      <Image src={Icon2} alt="Icon2"></Image>
      <Image src={Icon3} alt="Icon3"></Image>
    </div>
  );
};

export default CommunityLogos;
