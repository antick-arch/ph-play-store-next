import Image from "next/image";
import Link from "next/link";
import React from "react";
const fetchApps = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  return data;
};
const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const apps = await fetchApps();
  const app = apps.find((item) => String(item.id) === String(id));
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
          <h2 className="font-bold text text-gray-500">
            Size: {app.size}
          </h2>
        </div>
        <p className="text-justify">{app.description}</p>
        <div className="flex justify-end">
          <Link href={"/"} className="btn btn-primary">Install Now</Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
