import { useState, useEffect } from "react";

const useGetIp = () => {
  const [ip, setIp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getIp = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        if (!response.ok) {
          throw new Error("Failed to fetch IP address");
        }
        const data = await response.json();
        setIp(data.ip);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getIp();
  }, []); // Empty array means this effect will run once after the first render

  return { ip, loading, error };
};

export default useGetIp;
