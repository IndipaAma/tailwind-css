import React from "react";
import Image from "next/image";
import mainImage2 from "../../public/Frame 35.svg";

const UnlockSection = () => {
  return (
    <div className="flex justify-evenly">
      <div>
        <Image
          src={mainImage2}
          alt="Main-Image 2"
          className="w-[750px]"
        ></Image>
      </div>
      <div className="content-center">
        <h1 className="text-3xl font-semibold">
          The unseen of spending three years at Pixelgrade
        </h1>
        <p className="text-[#89939E] font-light py-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <button className="bg-[#43A046] py-3.5 px-5 rounded-md">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default UnlockSection;
