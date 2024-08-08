"use client";
import React, { createContext, useState, useContext } from "react";

const MusicPlayerContext = createContext({
  track: {
    audioLink:
      "https://qqbscpfkecykuadtjgsv.supabase.co/storage/v1/object/public/audio-tracks/0.29068482073277346-1720919427571-Isabel-Larosa-Favorite(PagalWorld).mp3",
    // You can add more default properties like musicName, credits, etc.
  },
  setTrack: () => {},
});

export function MusicPlayerProvider({ children }) {
  const [track, setTrack] = useState({
    audioLink:
      "https://qqbscpfkecykuadtjgsv.supabase.co/storage/v1/object/public/audio-tracks/0.29068482073277346-1720919427571-Isabel-Larosa-Favorite(PagalWorld).mp3",
    // Initialize other properties as needed
  });

  return (
    <MusicPlayerContext.Provider value={{ track, setTrack }}>
      {children}
    </MusicPlayerContext.Provider>
  );
}

export function useMusicPlayer() {
  return useContext(MusicPlayerContext);
}
