"use client";
import {
  Play,
  SpeakerHigh,
  SpeakerX,
  Stop,
} from "@phosphor-icons/react/dist/ssr";
import React, { useRef, useState, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";

const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: "#93c5fd",
  progressColor: "#60a5fa",
  cursorColor: "transparent",
  responsive: true,
  height: 30,
  normalize: true,
  backend: "WebAudio",
  barWidth: 3,
  barGap: 2,
});

const AudioPlayer = ({ audioFile }) => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [previousVolume, setPreviousVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (waveformRef.current && !wavesurfer.current) {
      wavesurfer.current = WaveSurfer.create(
        formWaveSurferOptions(waveformRef.current)
      );

      wavesurfer.current.load(audioFile);

      wavesurfer.current.on("ready", () => {
        setDuration(wavesurfer.current.getDuration());
        wavesurfer.current.play();
        setPlaying(true);
      });

      wavesurfer.current.on("audioprocess", () => {
        setCurrentTime(wavesurfer.current.getCurrentTime());
      });

      wavesurfer.current.on("finish", () => {
        setPlaying(false);
        setCurrentTime(0);
      });

      wavesurfer.current.setVolume(volume);
    }

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
        wavesurfer.current = null;
      }
    };
  }, [audioFile]);

  const handlePlayPause = () => {
    if (wavesurfer.current) {
      wavesurfer.current.playPause();
      setPlaying(!playing);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (wavesurfer.current) {
      wavesurfer.current.setVolume(newVolume);
    }
  };

  const handleMute = () => {
    if (wavesurfer.current) {
      if (muted) {
        wavesurfer.current.setVolume(previousVolume);
      } else {
        setPreviousVolume(volume);
        wavesurfer.current.setVolume(0);
      }
      setMuted(!muted);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="text-stone-200 rounded-lg w-full">
      <div ref={waveformRef} className="w-full" />
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
      <div className="flex mt-4 text-sm">
        <div>{formatTime(currentTime)}</div>
        <div className="ml-auto">{formatTime(duration)}</div>
      </div>
    </div>
  );
};

export default AudioPlayer;
