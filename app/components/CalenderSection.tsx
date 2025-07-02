import React from "react";
import mainImage3 from "../../public/pana.svg";
import Image from "next/image";

const CalenderSection = () => {
  return (
    <div className=" flex justify-center my-10 px-20 gap-10">
      <div>
        <Image src={mainImage3} alt="Main Image3" width={1050} />
      </div>
      <div className="content-center">
        <h1 className="text-3xl font-semibold">
          How to design your site footer like we did
        </h1>
        <p className="py-7">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <button className="bg-[#66BB69] px-10 py-3 rounded-md">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default CalenderSection;
