"use client";
import { InstallAppsContext } from "@/context/InstallAppsCreateContext";
import { useApps } from "@/hooks/useDataHooks";
import Image from "next/image";
import React, { useContext } from "react";

const InstallationPage = () => {
  const apps = useApps();
  const { installNowApps, setinstallNowApps } = useContext(InstallAppsContext);
  console.log(installNowApps);
  return (
    <div className="container mx-auto space-y-5 my-5">
      {installNowApps.map((app) => (
        <div key={app.id} className="flex justify-between items-center bg-gray-100 shadow p-5 rounded-lg">
          <div className="flex justify-center items-center gap-2 ">
            <Image src={app.image} width={60} height={60} alt={app.title}></Image>
            <h2 className="text-xl font-semibold">{app.title}</h2>
          </div>
          <button className="btn btn-primary">Remove</button>
        </div>
      ))}
    </div>
  );
};

export default InstallationPage;
