import InstallNowApps from "@/components/installNowApps/InstallNowApps";
import apps from "@/data/apps";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const app = apps.find((item) => String(item.id) === String(id));
  if(!app){
    notFound();
  }

  return (
    <div className="container mx-auto my-5 ">
      <div className="max-w-[30%] mx-auto space-y-5">
        <div className="flex flex-col justify-center items-center">
          <Image
            width={200}
            height={40}
            src={app.image}
            alt={app.title}
            className="h-auto"
          />
          <h2 className="font-bold text-2xl">{app.title}</h2>
        </div>
        <div className="flex justify-between">
          <h2 className="font-bold text text-gray-500">
            Review: {app.reviews}
          </h2>
          <h2 className="font-bold text text-gray-500">Size: {app.size}</h2>
        </div>
        <p className="text-justify">{app.description}</p>
        <InstallNowApps app={app}></InstallNowApps>
      </div>
    </div>
  );
};

export default DetailsPage;
