"use client";

import { useEffect, useRef } from "react";
import { ProjectData } from "types/projects-types";
import Tag from "./Tag";

export function Project({
  name,
  topics,
  description,
  homepageUrl,
  url,
}: Omit<ProjectData, "id">) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver((entries) => {
      const [{ isIntersecting }] = entries;
      const videoElement = videoRef.current;

      if (!videoElement || !videoElement.duration) return;

      isIntersecting ? videoElement.play() : videoElement.pause();
    });

    if (videoRef.current === null) return;
    observer.observe(videoRef.current);
  }, [videoRef]);

  return (
    <li className="relative grid bg-white md:bg-transparent lg:bg-white drop-shadow-2xl gap-x-2 rounded-xl project__item">
      <h3 className="m-2 text-lg font-semibold capitalize md:[grid-area:title]">
        {name.replace(/-/g, " ")}
      </h3>

      <video
        className="aspect-video md:self-center md:[grid-area:media]"
        loop
        muted
      >
        <source src={`videos/${name}.webm`} type="video/webm" />
        Your browser does not support the videos.
      </video>

      <p className="m-2 md:[grid-area:description]">
        {description || "No description available."}
      </p>
      <div className=""></div>
      <ul className="flex items-center px-2 py-6 overflow-x-auto overflow-y-hidden gap-x-2 md:flex-wrap md:py-0 md:overflow-visible gap-y-1 md:[grid-area:tech-list]">
        {topics.map(({ id, name }) => (
          <Tag key={id} name={name} />
        ))}
      </ul>

      <div className="m-2 space-x-2 font-semibold place-self-end md:[grid-area:links]">
        <a
          className="inline-block px-4 py-2 bg-white rounded-lg text-primary-600 ring-primary-200 hover:ring-primary-600 ring-1"
          href={url}
          rel="noreferrer"
          target="_blank"
        >
          Source Code
        </a>
        <a
          className="inline-block px-4 py-2 text-white rounded-lg bg-primary-600 hover:bg-primary-500"
          href={homepageUrl}
          rel="noreferrer"
          target="_blank"
        >
          Visit Site
        </a>
      </div>
    </li>
  );
}
