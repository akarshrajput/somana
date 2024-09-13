import axios from "axios";
import { NextResponse } from "next/server";

// Function to get the location based on IP address
const getLocationFromIP = async (ip) => {
  try {
    // Make a request to an IP geolocation API
    const response = await axios.get(`http://ip-api.com/json/${ip}`);
    // Extract relevant location information from the response
    const { country, city, latitude, longitude } = response.data;
    return { country, city, latitude, longitude };
  } catch (error) {
    console.error("Error fetching location:", error);
    return null; // Return null if there's an error fetching the location
  }
};

// Handler for the GET request
export async function GET(request) {
  try {
    // Get the IP address from the client's request headers
    let clientIP =
      request.headers.get("x-forwarded-for") || request.headers.get("host");

    if (clientIP && clientIP.includes(",")) {
      clientIP = clientIP.split(",")[0];
    }

    const location = await getLocationFromIP(clientIP);

    if (location) {
      return NextResponse.json({ ip: clientIP, location }, { status: 200 });
    } else {
      return NextResponse.json(
        { ip: clientIP, location: "Location unavailable" },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Error getting geolocation:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
