import Layout from './components/layout/Layout';
import HeroSection from './components/hero/HeroSection';
import StatsBar from './components/sections/StatsBar';
import FeatureGrid from './components/features/FeatureGrid';
import ServicesSection from './components/sections/ServicesSection';
import Testimonials from './components/sections/Testimonials';
import CTASection from './components/sections/CTASection';

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <StatsBar />
      <FeatureGrid />
      <ServicesSection />
      <Testimonials />
      <CTASection />
    </Layout>
  );
}