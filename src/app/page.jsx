import Intro from '@/components/Intro';
import {
  Hero,
  Hero_EXPERIMENTAL,
  Hero_v3,
  Navbar,
  Services,
  Services_v3,
  ServiceSummary,
} from '@/sections';

const App = () => {
  return (
    <div className='relative w-screen mih-h-screen overflow-x-clip'>
      <Navbar />
      <Hero_v3 />
      {/* <Hero /> */}
      {/* <Hero_EXPERIMENTAL /> */}
      <ServiceSummary />
      {/* <Services /> */}
      <Services_v3 />
    </div>
  );
};

export default App;
