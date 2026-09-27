import React from "react";
import TrandingAppsCard from "../trandingAppsCard/TrandingAppsCard";

const fetchApps = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  console.log(data);
  return data;
};

const TrandingApps = async () => {
  const apps = await fetchApps();
  console.log(apps);
  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center">Trending apps</h2>
      <p className="text-center text-gray-600">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia quaerat
        soluta consectetur culpa ipsa voluptatum modi, odit reiciendis id
        dignissimos!
      </p>
      <div className="grid grid-cols-3 gap-5 my-10 place-items-center">
        {
          apps.slice(0,9).map((app)=>(<TrandingAppsCard key={app.id} app={app}></TrandingAppsCard>))
        }
      </div>
    </div>
  );
};

export default TrandingApps;
