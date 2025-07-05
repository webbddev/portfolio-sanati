import {
  About,
  Hero,
  Hero_EXPERIMENTAL,
  Hero_v3,
  Navbar,
  Services,
  Services_v3,
  ServiceSummary,
} from '@/sections';

const Page = () => {
  return (
    <div className='relative w-screen min-h-screen overflow-x-clip'>
      <Navbar />
      <Hero_v3 />
      <ServiceSummary />
      <Services_v3 />
      <About />
    </div>
  );
};

export default Page;
