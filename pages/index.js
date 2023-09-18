import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, Hero, Insights } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>

    <div className="relative">
      <Insights />
      <div className="gradient-05 z-0" />
      <Feedback />
    </div>

    <Footer />
  </div>
);

export default Page;
