import { useState, useEffect } from 'react';
import VIDEOS from '../../data/videoManifest';

function getSrc() {
  const w = window.innerWidth;
  if (w < 640) return VIDEOS.hero["480p"];
  if (w < 1024) return VIDEOS.hero["720p"];
  return VIDEOS.hero["1080p"];
}

export default function VideoBackground() {
  const [reduced, setReduced] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [src, setSrc] = useState('');

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const h = (e) => setReduced(e.matches);
    mq.addEventListener('change', h);
    return () => mq.removeEventListener('change', h);
  }, []);

  useEffect(() => {
    setSrc(getSrc());
    const onResize = () => setSrc(getSrc());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  if (reduced) {
    return (
      <div className="absolute inset-0">
        <img src={VIDEOS.hero.poster} alt="" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/40 to-transparent" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0">
      <video
        autoPlay muted loop playsInline preload="metadata"
        poster={VIDEOS.hero.poster}
        onLoadedData={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <source src={VIDEOS.hero.webm} type="video/webm" />
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/40 to-transparent" />
    </div>
  );
}