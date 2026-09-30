"use client";
import React, { useContext } from "react";
import { InstallAppsContext } from "@/context/InstallAppsCreateContext";
import { toast } from "react-toastify";
const InstallNowApps = ({ app }) => {
  const { installNowApps, setinstallNowApps } = useContext(InstallAppsContext);

  const handleInstallApps = () => {
    const alreadyInstalled = installNowApps.some(
      (installedApp) => installedApp.id === app.id
    );

    if (alreadyInstalled) {
      toast.info("App is already installed");
      return;
    }

    setinstallNowApps((previousApps) => [...previousApps, app]);
    toast.success("Added to installed section");
  };

  return (
    <div className="flex justify-end">
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleInstallApps}
      >
        Install Now
      </button>
    </div>
  );
};

export default InstallNowApps;
