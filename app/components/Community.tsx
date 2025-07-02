import React from "react";
import CommunityLogos from "./CommunityLogos";

const Community = () => {
  return (
    <div className="mt-25">
      <h1 className="flex justify-center wrap-anywhere text-3xl">
        Manage your entire community in a single system
      </h1>
      <h5 className="flex justify-center">Who is Nextcent suitable for?</h5>
      <CommunityLogos />
    </div>
  );
};

export default Community;
