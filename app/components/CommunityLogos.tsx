import React from "react";
import Image from "next/image";
import Icon1 from "../../public/Icon.svg";
import Icon2 from "../../public/Icon (1).svg";
import Icon3 from "../../public/Icon (2).svg";

const LogoArray = [
  {
    icon: Icon1,
    title: "Membership Organizations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    icon: Icon2,
    title: "National Association",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    icon: Icon3,
    title: "Clubs and Groups",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
];

const CommunityLogos = () => {
  return (
    <div className="flex justify-evenly my-10">
      {LogoArray.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-10"
        >
          <Image src={item.icon} alt={item.title}></Image>
          <h1 className="mt-3">{item.title}</h1>
          <p className="mt-3.5">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CommunityLogos;
