'use client'

import { useEffect, useRef } from 'react'

function Video({ name }: { name: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const videoElement = videoRef.current

    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      if (!videoElement || !videoElement.duration) return

      isIntersecting ? videoElement.play() : videoElement.pause()
    })

    if (!videoElement) return
    observer.observe(videoElement)

    return () => observer.disconnect()
  }, [videoRef])

  return (
    <video
      ref={videoRef}
      className="h-full w-full object-cover object-center"
      loop
      muted
    >
      <source src={`videos/${name}.webm`} type="video/webm" />
      Your browser does not support the videos.
    </video>
  )
}

export default Video
