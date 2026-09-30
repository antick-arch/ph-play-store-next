"use client";
import { InstallAppsContext } from "@/context/InstallAppsCreateContext";
import Image from "next/image";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const InstallationPage = () => {
  const { installNowApps, setinstallNowApps } = useContext(InstallAppsContext);

  const handleRemove = (app) => {
    setinstallNowApps((previousApps) =>
      previousApps.filter((installedApp) => installedApp.id !== app.id)
    );
    toast.success("App uninstalled successfully");
  };

  return (
    <div className="container mx-auto space-y-5 my-5">
      {installNowApps.length === 0 ? (
        <div className="rounded-lg bg-gray-100 p-5 text-center shadow">
          <h2 className="text-xl font-semibold">Please install apps first</h2>
          <p className="text-gray-600">This is the installation page</p>
        </div>
      ) : (
        installNowApps.map((app) => (
          <div
            key={app.id}
            className="flex justify-between items-center bg-gray-100 shadow p-5 rounded-lg"
          >
            <div className="flex justify-center items-center gap-2">
              <Image src={app.image} width={60} height={60} alt={app.title}></Image>
              <h2 className="text-xl font-semibold">{app.title}</h2>
            </div>
            <button className="btn btn-primary" onClick={() => handleRemove(app)}>
              Uninstall
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default InstallationPage;
