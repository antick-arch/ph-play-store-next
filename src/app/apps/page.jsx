import TrandingApps from "@/components/trandingApps/TrandingApps";
import TrandingAppsCard from "@/components/trandingAppsCard/TrandingAppsCard";
import apps from "@/data/apps";
import React from "react";
const AllApps = async() => {
  return (
    <div className="my-5">
      <div className="container mx-auto mb-5">
        <h2 className="text-4xl font-bold text-center">Trending apps</h2>
        <p className="text-center text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia quaerat
          soluta consectetur culpa ipsa voluptatum modi, odit reiciendis id
          dignissimos!
        </p>
        <div className="grid grid-cols-3 gap-5 my-10 place-items-center">
          {apps.map((app) => (
            <TrandingAppsCard key={app.id} app={app}></TrandingAppsCard>
          ))}
        </div>
        <div className="flex items-center justify-center">
        </div>
      </div>
    </div>
  );
};

export default AllApps;
