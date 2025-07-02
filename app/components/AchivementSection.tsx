import React from "react";
import Icon3 from "../../public/Icon (3).svg";
import Icon4 from "../../public/Icon (4).svg";
import Icon5 from "../../public/Icon (5).svg";
import Icon6 from "../../public/Icon (6).svg";
import Image from "next/image";

interface Achievement {
  title: string;
  icon: any;
  value: string | number;
}
const achievements: Achievement[] = [
  { title: "Members", value: "2,245,341", icon: Icon3 },
  { title: "Clubs", value: "46,328", icon: Icon4 },
  { title: "Events", value: "828,867", icon: Icon5 },
  { title: "Payments", value: "1,926,436", icon: Icon6 },
];

const AchivementSection = () => {
  return (
    <div className=" flex bg-[#F5F7FA] justify-evenly py-10 px-20 gap-10">
      <div className="content-center">
        <h1 className="text-3xl font-semibold">Helping a Local </h1>
        <h1 className="text-3xl font-semibold text-[#43A046]">
          business reinvent itself
        </h1>
        <h5 className="pt-5">
          We reached here with our hard work and dedication
        </h5>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {achievements.map((item, index) => (
          <div key={index} className="flex gap-3.5">
            <div className="content-center ">
              <Image src={item.icon} alt={item.title} width={40} />
            </div>
            <div className="content-center">
              <h1 className="font-bold">{item.value}</h1>
              <p className="font-light text-[#ABBED1] text-sm">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchivementSection;
