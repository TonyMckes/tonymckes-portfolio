"use client";

import { useEffect, useRef } from "react";
import { ProjectData } from "types/projects-types";
import styles from "./Project.module.css";
import Tag from "./Tag";

export function Project({
  id,
  name,
  topics,
  description,
  homepageUrl,
  url,
}: ProjectData) {
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
    <li key={id} className={styles.item}>
      <h3 className={styles.title}>{name.replace(/-/g, " ")}</h3>
      <video ref={videoRef} className={styles.media} loop muted>
        <source src={`videos/${name}.webm`} type="video/webm" />
        Your browser does not support the videos.
      </video>
      <p className={styles.description}>
        {description || "No description available."}
      </p>
      <ul className={styles.techList}>
        {topics.map(({ id, name }) => (
          <Tag key={id} id={id} name={name} />
        ))}
      </ul>
      <div className={styles.links}>
        <a className={styles.link} href={url} rel="noreferrer" target="_blank">
          Source Code
        </a>
        <a
          className={styles.link}
          href={homepageUrl}
          rel="noreferrer"
          target="_blank"
        >
          Website
        </a>
      </div>
    </li>
  );
}
