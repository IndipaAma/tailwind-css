import React from "react";
import ClientLogos from "./ClientLogos";

const Clients = () => {
  return (
    <div className="mt-10 ">
      <h1 className="flex justify-center text-2xl font-semibold">
        Our Clients
      </h1>
      <h5 className="flex justify-center py-5 text-[#4D4D4D]">
        We have been working with some Fortune 500+ clients
      </h5>
      <ClientLogos />
    </div>
  );
};

export default Clients;
