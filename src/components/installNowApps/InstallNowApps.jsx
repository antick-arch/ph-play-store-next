"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { InstallAppsContext } from "@/context/InstallAppsCreateContext";
import { toast } from "react-toastify";
const InstallNowApps = ({ app }) => {
  const {installNowApps,setinstallNowApps} = useContext(InstallAppsContext);
  const handleInstallApps = () => {
    setinstallNowApps([...installNowApps, app]);
    toast.success("Added to installed section");
  };
  console.log(installNowApps);
  return (
    <div className="flex justify-end">
      <Link
        href={`/apps/${app.id}`}
        className="btn btn-primary"
        onClick={handleInstallApps}
      >
        Install Now
      </Link>
    </div>
  );
};

export default InstallNowApps;
