import Image from "next/image";
import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";

const TrandingAppsCard = ({ app }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <Image
          src={app.image}
          alt={app.title}
          width={200}
          height={200}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {app.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-between">
          <div className="bg-green-100 text-green-500 border-none py-1 px-2 font-semibold rounded-[5px] flex justify-center items-center gap-1"><FaDownload />Fashion</div>
          <div className="bg-orange-100 text-orange-500 border-none py-1 px-2 font-semibold rounded-[5px] flex justify-center items-center gap-1"><FaStar />{app.ratingAvg}</div>
        </div>
      </div>
    </div>
  );
};

export default TrandingAppsCard;
