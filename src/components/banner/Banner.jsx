import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/img/hero.png"
const Banner = () => {
  return (
    <div className="my-10 space-y-8 min-h-[60%]">
      <h2 className="text-6xl font-bold text-center">
        We Build <br />
        <span className="text-purple-500">Productive </span>
        Apps
      </h2>
      <p className="text-gray-600 max-w-[50%] mx-auto text-center">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      <div className="flex gap-2 items-center justify-center">
        <button className="btn">Play Store</button>
        <button className="btn">App Store</button>
      </div>
      <Image loading="eager" src={bannerImg} alt="this is the banner image" className="mx-auto"></Image>
    </div>
  );
};

export default Banner;
