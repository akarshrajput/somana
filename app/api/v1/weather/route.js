import axios from "axios";
import { NextResponse } from "next/server";

// Function to get weather based on latitude and longitude
const getWeather = async (latitude, longitude) => {
  try {
    // Make a request to the OpenWeatherMap API using the provided latitude and longitude
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=8ee15bc6d64b03e75bebf3358a43a254`
    );

    // Extract and return the weather data
    return response.data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    return null; // Return null if there's an error fetching the weather
  }
};

// Handler for the GET request
export async function GET(request) {
  try {
    // Extract latitude and longitude from query parameters
    const { searchParams } = new URL(request.url);
    const latitude = searchParams.get("lat");
    const longitude = searchParams.get("lon");

    // Check if latitude and longitude are provided
    if (!latitude || !longitude) {
      return NextResponse.json(
        { error: "Latitude and longitude are required" },
        { status: 400 }
      );
    }

    // Fetch the weather data
    const data = await getWeather(latitude, longitude);

    if (data) {
      // Return the weather data as JSON
      return NextResponse.json({ data }, { status: 200 });
    } else {
      return NextResponse.json(
        { data: "Weather data unavailable" },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Error getting weather data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
