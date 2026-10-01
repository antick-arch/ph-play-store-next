import React from "react";
import TrandingAppsCard from "../trandingAppsCard/TrandingAppsCard";
import Link from "next/link";
import apps from "@/data/apps";

const TrandingApps = async () => {
  return (
    <div className="container mx-auto mb-5">
      <h2 className="text-4xl font-bold text-center">Trending apps</h2>
      <p className="text-center text-gray-600">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia quaerat
        soluta consectetur culpa ipsa voluptatum modi, odit reiciendis id
        dignissimos!
      </p>
      <div className="grid lg:grid-cols-3 gap-5 my-10 place-items-center p-5 lg:p-0">
        {
          apps.slice(0,6).map((app)=>(<TrandingAppsCard key={app.id} app={app}></TrandingAppsCard>))
        }
      </div>
      <div className="flex items-center justify-center">
      <Link href={"/apps"} className="btn btn-primary">Show All</Link>
      </div>
    </div>
  );
};

export default TrandingApps;
