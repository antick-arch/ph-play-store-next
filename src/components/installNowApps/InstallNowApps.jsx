'use client'
import React from "react";
import Link from "next/link";
const InstallNowApps = ({app}) => {
  const handleInstallApps = () => {
    console.log("install btn clicked");
  };
  return (
    <div className="flex justify-end">
      <Link href={`/apps/${app.id}`} className="btn btn-primary" onClick={handleInstallApps}>
        Install Now
      </Link>
    </div>
  );
};

export default InstallNowApps;
