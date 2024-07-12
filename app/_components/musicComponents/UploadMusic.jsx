"use client";
import supabase from "@/app/_lib/supabase";
import { Info, Upload } from "@phosphor-icons/react/dist/ssr";
import React, { useState } from "react";
import toast from "react-hot-toast";
import LoaderSmall from "../main/LoaderSmall";
import axios from "axios";

const UploadMusic = ({ supabaseURL, session, hostname }) => {
  const [musicName, setMusicName] = useState("");
  const [musicType, setMusicType] = useState("Music");
  const [releaseDate, setReleaseDate] = useState("");
  const [audioLink, setAudioLink] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [credits, setCredits] = useState("");
  const [album, setAlbum] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [isLoading, setIsLoading] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !musicName ||
      !musicType ||
      !releaseDate ||
      !audioLink ||
      !featuredImage ||
      !credits ||
      !album
    ) {
      toast.error("Please fill all fields");
      return;
    }

    if (audioLink.type.split("/")[0] !== "audio") {
      toast.error("Only audio files are allowed");
      return;
    }

    if (featuredImage.type.split("/")[0] !== "image") {
      toast.error("Only image files are allowed");
      return;
    }

    try {
      setIsLoading(true);
      const imageName = `${Math.random()}-${Date.now()}-${featuredImage?.name}`;
      const imagePath = `${supabaseURL}/storage/v1/object/public/audio-track-images/${imageName}`;
      const audioName = `${Math.random()}-${Date.now()}-${audioLink?.name}`;
      const audioPath = `${supabaseURL}/storage/v1/object/public/audio-tracks/${audioName}`;

      const musicData = {
        musicName: musicName,
        musicType: musicType,
        releaseDate: releaseDate,
        audioLink: audioPath,
        featuredImage: imagePath,
        credits: credits,
        album: album,
        lyrics: lyrics,
        author: session.user.userId,
      };

      const avatarImage = featuredImage;
      await supabase.storage
        .from("audio-track-images")
        .upload(imageName, avatarImage);

      const avatarAudio = audioLink;
      await supabase.storage
        .from("audio-tracks")
        .upload(audioName, avatarAudio);

      const response = await axios.post(`/api/v1/music`, musicData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // const slug = response?.data?.data?.newBlog?.slug;
      toast.success("Music Uploaded Success!");
      // router.push(`/music`);
      // console.log(response);
      setMusicName("");
      setMusicType("");
      setAudioLink("");
      setFeaturedImage("");
      setReleaseDate("");
      setLyrics("");
      setCredits("");
      setAlbum("");
    } catch (error) {
      toast.error("Error posting Blog, Server Error");
      console.log("Error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="rounded-md flex flex-col gap-4 p-4 overflow-hidden border-2 bg-stone-100 border-stone-300"
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <label>Song name :</label>
            <input
              value={musicName}
              onChange={(e) => setMusicName(e.target.value)}
              placeholder="Song name"
              className="border border-stone-300 bg-stone-200 placeholder-stone-600 outline-none py-1 px-2 w-64 rounded-md"
            />
          </div>
          <div className="flex items-center gap-1">
            <label>Type :</label>
            <div>
              <select
                className="border border-stone-300 bg-stone-200 placeholder-stone-600 outline-none py-1 px-2 w-64 rounded-md"
                value={musicType}
                onChange={(e) => setMusicType(e.target.value)}
              >
                <option value="Music">Music</option>
                <option value="Rap">Rap</option>
                <option value="Devotional">Devotional</option>
                <option value="Funk">Funk</option>
                <option value="Instrumental">Instrumental</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <label>Release Date :</label>
            <input
              value={releaseDate}
              onChange={(e) => setReleaseDate(e.target.value)}
              className="border border-stone-300 bg-stone-200 placeholder-stone-600 outline-none py-1 px-2 w-64 rounded-md"
              type="date"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <label>Add music file :</label>
            <input
              onChange={(e) => setAudioLink(e.target.files[0])}
              className="border border-stone-300 bg-stone-200 placeholder-stone-600 outline-none py-1 px-2 w-64 rounded-md"
              type="file"
            />
          </div>
          <div className="flex items-center gap-1">
            <label>Featured Image : </label>
            <input
              onChange={(e) => setFeaturedImage(e.target.files[0])}
              className="border border-stone-300 bg-stone-200 placeholder-stone-600 outline-none py-1 px-2 w-64 rounded-md"
              type="file"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <label>Credits (artist names) : </label>
            <input
              value={credits}
              onChange={(e) => setCredits(e.target.value)}
              className="border border-stone-300 bg-stone-200 placeholder-stone-600 outline-none py-1 px-2 w-96 rounded-md"
            />
          </div>
          <div className="flex items-center gap-1">
            <label>Album :</label>
            <input
              value={album}
              onChange={(e) => setAlbum(e.target.value)}
              className="border border-stone-300 bg-stone-200 placeholder-stone-600 outline-none py-1 px-2 w-64 rounded-md"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex flex-col w-full gap-1">
            <label>Lyrics (optional) : </label>
            <textarea
              value={lyrics}
              onChange={(e) => setLyrics(e.target.value)}
              rows={10}
              className="border border-stone-300 w-full resize-none bg-stone-200 placeholder-stone-600 outline-none py-1 px-2 rounded-md"
            />
          </div>
        </div>
        {isLoading ? (
          <p className="flex text-sm my-2 items-center gap-1 text-yellow-600">
            <Info /> Please do not close window while posting
          </p>
        ) : (
          ""
        )}

        <button
          disabled={isLoading}
          className="bg-emerald-600 w-fit text-stone-50 flex items-center gap-1 py-1 px-2 rounded-md"
        >
          {isLoading ? (
            <LoaderSmall />
          ) : (
            <div className="flex items-center gap-1">
              <p>Post</p>
              <Upload className="size-4" weight="bold" />
            </div>
          )}
        </button>
      </form>
    </div>
  );
};

export default UploadMusic;
