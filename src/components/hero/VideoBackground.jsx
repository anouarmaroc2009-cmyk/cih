import { useState, useEffect } from 'react';

export default function VideoBackground() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="absolute inset-0 mesh-gradient">
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/70 via-navy-900/30 to-transparent" />
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.06) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(212, 175, 55, 0.04) 0%, transparent 50%)'
      }} />
    </div>
  );
}