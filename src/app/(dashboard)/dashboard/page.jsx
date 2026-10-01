"use client";
import { InstallAppsContext } from "@/context/InstallAppsCreateContext";
import { useApps } from "@/hooks/useDataHooks";
import React, { useContext } from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const Dashboard = () => {
  const { apps, loading } = useApps();
  const { installNowApps } = useContext(InstallAppsContext);

  const installedIds = new Set(installNowApps.map((app) => app.id));
  const installedCount = apps.filter((app) => installedIds.has(app.id)).length;
  const notInstalledCount = Math.max(apps.length - installedCount, 0);
  const chartData = [
    { name: "Installed", value: installedCount },
    { name: "Not Installed", value: notInstalledCount },
  ];
  const colors = ["#22c55e", "#e5e7eb"];

  return (
    <div className="mx-auto w-full max-w-3xl p-5">
      <h1 className="mb-5 text-2xl font-bold">App Installation Status</h1>

      {loading ? (
        <p>Loading chart...</p>
      ) : (
        <ResponsiveContainer height={500} width="100%">
          <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            data={chartData}
            dataKey="value"
            innerRadius={60}
            label={({ name, value }) => `${name}: ${value}`}
            outerRadius={80}
          >
            {chartData.map((entry, index) => (
              <Cell key={entry.name} fill={colors[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default Dashboard;
