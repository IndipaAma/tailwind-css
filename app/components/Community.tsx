import React from "react";
import CommunityLogos from "./CommunityLogos";

const Community = () => {
  return (
    <div className="mt-25">
      <h1 className="text-center text-3xl font-semibold">
        Manage your entire community in a single system
      </h1>
      <h5 className="flex justify-center text-[#89939E] font-light">
        Who is Nextcent suitable for?
      </h5>
      <CommunityLogos />
    </div>
  );
};

export default Community;
