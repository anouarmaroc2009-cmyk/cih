import Layout from './components/layout/Layout';
import HeroSection from './components/hero/HeroSection';
import FeatureGrid from './components/features/FeatureGrid';

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <FeatureGrid />
    </Layout>
  );
}