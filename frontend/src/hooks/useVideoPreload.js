import { useState, useEffect, useRef } from 'react';

export default function useVideoPreload(src) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!src) return;
    const video = document.createElement('video');
    videoRef.current = video;
    video.preload = 'metadata';
    video.muted = true;
    video.onloadeddata = () => setLoaded(true);
    video.onerror = () => setError('Failed to load video');
    video.src = src;
    video.load();
    return () => {
      video.pause();
      video.removeAttribute('src');
      video.load();
    };
  }, [src]);

  return { loaded, error, videoRef };
}