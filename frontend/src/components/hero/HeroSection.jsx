import VideoBackground from './VideoBackground';
import HeroContent from './HeroContent';
import HeroCTA from './HeroCTA';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
      <VideoBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <HeroContent />
        <HeroCTA />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-100 to-transparent z-10" />
    </section>
  );
}