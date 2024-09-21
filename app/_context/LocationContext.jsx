"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Context for IP and Location information
const LocationContext = createContext();

export const useLocationInfo = () => useContext(LocationContext);

export const LocationInfoProvider = ({ children }) => {
  const [ip, setIP] = useState("");
  const [location, setLocation] = useState("");
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");
  const [org, setOrg] = useState("");
  const [postal, setPostal] = useState("");
  const [timezone, setTimezone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSystemIp = async () => {
      setIsLoading(true);
      setError(null); // Reset error state before fetching

      try {
        const response = await axios.get(`/api/v1/geo`); // Assuming this is the correct API route
        if (response?.data) {
          setIP(response.data.data.ip || "IP not found");
          setLocation(response.data.data.loc || "Cooordinates not found");
          setRegion(response.data.data.region || "Region not found");
          setCountry(response.data.data.country || "Country not found");
          setOrg(response.data.data.org || "Service not found");
          setPostal(response.data.data.postal || "Postal not found");
          setTimezone(response.data.data.timezone || "Timezone not found");
          //   console.log("IP:", response.data.ip);
        } else {
          throw new Error("Invalid response structure");
        }
      } catch (error) {
        // console.error("Error fetching IP:", error);
        setError("Failed to fetch IP and location");
      } finally {
        setIsLoading(false);
      }
    };

    getSystemIp();
  }, []);

  return (
    <LocationContext.Provider
      value={{
        ip,
        setIP,
        location,
        setLocation,
        isLoading,
        setIsLoading,
        error,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
