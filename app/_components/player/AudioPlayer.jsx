"use client";
import {
  Play,
  SpeakerHigh,
  SpeakerX,
  Stop,
} from "@phosphor-icons/react/dist/ssr";
import React, { useRef, useState, useEffect } from "react";

const AudioPlayer = ({ audioFile }) => {
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
    <div className="text-stone-200 rounded-lg w-full">
      <audio ref={audioRef} preload="auto" />
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={handlePlayPause}
          className="bg-stone-800 hover:bg-stone-700 font-bold py-2 px-4 rounded"
        >
          {playing ? <Stop weight="fill" /> : <Play weight="fill" />}
        </button>
        <div className="flex items-center space-x-4">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-24"
            disabled={muted}
          />
          <button
            onClick={handleMute}
            className="bg-stone-800 hover:bg-stone-700 font-bold py-2 px-4 rounded"
          >
            {muted ? <SpeakerX weight="fill" /> : <SpeakerHigh weight="fill" />}
          </button>
        </div>
      </div>
      <div className="relative w-full h-2 bg-stone-800 mt-4 rounded">
        <input
          ref={progressRef}
          type="range"
          min="0"
          max="100"
          step="0.1"
          defaultValue="0"
          onClick={handleProgressClick}
          className="absolute top-0 left-0 w-full h-2 opacity-0 cursor-pointer"
        />
        <div
          className="absolute top-0 left-0 h-2 bg-blue-500 rounded"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        ></div>
      </div>
      <div className="flex mt-4 text-sm">
        <div>{formatTime(currentTime)}</div>
        <div className="ml-auto">{formatTime(duration)}</div>
      </div>
    </div>
  );
};

export default AudioPlayer;
