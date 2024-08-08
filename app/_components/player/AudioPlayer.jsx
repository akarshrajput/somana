"use client";
import {
  Play,
  SpeakerHigh,
  SpeakerX,
  Stop,
} from "@phosphor-icons/react/dist/ssr";
import React, { useRef, useState, useEffect } from "react";

const AudioPlayer = ({ audioFile }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeClass = document.documentElement.classList.contains("dark");
    setIsDarkMode(darkModeClass);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const darkModeClass =
            document.documentElement.classList.contains("dark");
          setIsDarkMode(darkModeClass);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const audioRef = useRef(null);
  const progressRef = useRef(null);

  const [playing, setPlaying] = useState(true); // Set default to true to start playing
  const [volume, setVolume] = useState(1);
  const [previousVolume, setPreviousVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.src = audioFile;
      audio.addEventListener("loadedmetadata", () => {
        setDuration(audio.duration);
        audio.play(); // Play the audio once metadata is loaded
      });

      audio.addEventListener("timeupdate", () => {
        setCurrentTime(audio.currentTime);
        if (progressRef.current) {
          progressRef.current.value =
            (audio.currentTime / audio.duration) * 100;
        }
      });

      audio.addEventListener("ended", () => {
        setPlaying(false);
        setCurrentTime(0);
        if (progressRef.current) {
          progressRef.current.value = 0;
        }
      });

      audio.volume = volume;
    }

    return () => {
      if (audio) {
        audio.pause();
        audio.src = "";
        audio.removeEventListener("loadedmetadata", () => {});
        audio.removeEventListener("timeupdate", () => {});
        audio.removeEventListener("ended", () => {});
      }
    };
  }, [audioFile]);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (audio) {
      if (playing) {
        audio.pause();
      } else {
        audio.play();
      }
      setPlaying(!playing);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleMute = () => {
    if (audioRef.current) {
      if (muted) {
        audioRef.current.volume = previousVolume;
      } else {
        setPreviousVolume(volume);
        audioRef.current.volume = 0;
      }
      setMuted(!muted);
    }
  };

  const handleProgressClick = (e) => {
    const progress = progressRef.current;
    if (progress && audioRef.current) {
      const rect = progress.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const newTime = (offsetX / rect.width) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="text-stone-200 text-[12px] rounded-lg w-full">
      <audio ref={audioRef} preload="auto" />

      <div className="flex items-center gap-2">
        {isDarkMode ? (
          <>
            <button
              onClick={handlePlayPause}
              className="font-bold py-2 px-4 rounded text-stone-200 text-base"
            >
              {playing ? <Stop weight="fill" /> : <Play weight="fill" />}
            </button>
            <div className="text-stone-200">{formatTime(currentTime)}</div>
          </>
        ) : (
          <>
            <button
              onClick={handlePlayPause}
              className="font-bold py-2 px-4 rounded text-stone-600 text-base"
            >
              {playing ? <Stop weight="fill" /> : <Play weight="fill" />}
            </button>
            <div className="text-stone-800">{formatTime(currentTime)}</div>
          </>
        )}
        <div className="relative w-full h-1 bg-stone-700 mt-4 rounded">
          <input
            ref={progressRef}
            type="range"
            min="0"
            max="100"
            step="0.1"
            defaultValue="0"
            onClick={handleProgressClick}
            className="absolute top-0 left-0 h-1 w-full opacity-0 cursor-pointer"
          />
          <div
            className="absolute top-0 left-0 h-1 bg-blue-500 rounded"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
        {isDarkMode ? (
          <div className="text-stone-200 ml-auto">{formatTime(duration)}</div>
        ) : (
          <div className="text-stone-800 ml-auto">{formatTime(duration)}</div>
        )}
      </div>
    </div>
  );
};

export default AudioPlayer;
