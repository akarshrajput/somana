"use client";
import React, { createContext, useState, useContext, useEffect } from "react";

const MusicPlayerContext = createContext({
  track: null,
  setTrack: () => {},
  tracksQueue: [], // To keep track of all the songs
  setTracksQueue: () => {},
});

export function MusicPlayerProvider({ children }) {
  const [track, setTrack] = useState(null);
  const [tracksQueue, setTracksQueue] = useState([]); // Store the list of tracks
  const [audio, setAudio] = useState(null);

  // Play the selected track
  useEffect(() => {
    if (track) {
      if (audio) {
        audio.pause(); // Pause the previous track
      }

      const newAudio = new Audio(track.url); // Create a new audio object
      setAudio(newAudio);
      newAudio.play();

      // When the current track ends, move to the next one
      newAudio.addEventListener("ended", handleTrackEnd);

      return () => {
        newAudio.removeEventListener("ended", handleTrackEnd);
      };
    }
  }, [track]);

  // Handle the end of the current track
  const handleTrackEnd = () => {
    const currentIndex = tracksQueue.findIndex((t) => t._id === track._id);
    const nextTrack = tracksQueue[currentIndex + 1];

    if (nextTrack) {
      setTrack(nextTrack); // Automatically set and play the next track
    }
  };

  return (
    <MusicPlayerContext.Provider
      value={{ track, setTrack, tracksQueue, setTracksQueue }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
}

export function useMusicPlayer() {
  return useContext(MusicPlayerContext);
}
