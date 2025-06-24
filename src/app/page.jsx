import Intro from '@/components/Intro';
import { Hero, Hero_EXPERIMENTAL, Navbar } from '@/sections';

const App = () => {
  return (
    <div className='relative w-screen mih-h-screen overflow-x-clip'>
      <Navbar />
      <Hero />
      <Hero_EXPERIMENTAL />
    </div>
  );
};

export default App;
