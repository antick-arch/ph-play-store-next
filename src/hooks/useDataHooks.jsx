'use client';
import { useEffect, useState } from "react";

export const useApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const res = await fetch("/data.json");

        if (!res.ok) {
          throw new Error("Failed to fetch apps");
        }

        setApps(await res.json());
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchApps();
  }, []);

  return { apps, loading, error };
};