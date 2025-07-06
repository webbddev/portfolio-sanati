import { AnimatedTextLines_v3 } from '@/components/AnimatedTextLines_v3';
import LineSeparator from '@/components/LineSeparator';
import { projects } from '../constants/data';
import { Icon } from '@iconify/react';

const Works = () => {
  return (
    <section id='works' className='min-h-screen relative'>
      {/* Container with max width */}
      <div className='flex flex-col max-w-[2400px] mx-auto'>
        <div className='flex flex-col justify-center gap-12 pt-16 sm:gap-16'>
          {/* Subtitle */}
          <p className='text-xs sm:text-sm font-light tracking-[0.3rem] sm:tracking-[0.5rem] uppercase px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 text-black'>
            Logic meets aesthetics, seamlessly
          </p>
          <div className='px-10'>
            <h1 className='flex flex-col gap-12 text-black uppercase banner-text-responsive sm:gap-16 md:block -translate-y-[4px] md:-translate-[10px]'>
              <span>Works</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Full width horizontal line placed under the title */}
      <LineSeparator className={'border-black'} />

      <div className='relative px-10 text-black max-w-[1870px] mx-auto'>
        <div className='py-12 sm:py-16 text-end'>
          <AnimatedTextLines_v3
            delay={0.2}
            className='font-light uppercase value-text-responsive text-black max-w-4xl ml-auto'
          >
            Featured projects that have been meticulously crafted with passion
            to drive results and impact.
          </AnimatedTextLines_v3>
        </div>
      </div>

      <div className='relative flex flex-col font-light'>
        {projects.map((project, index) => (
          <div
            key={project.id}
            id='project'
            className='relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0'
          >
            {/* Project title */}
            <div className='flex items-center justify-between px-10 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white'>
              <h2 className='lg:text-[32px] text-[26px] leading-none'>
                {project.name}
              </h2>
              <Icon icon='mynaui:arrow-up-right' className='md:size-6 size-5' />
            </div>
            {/* divider */}
            <div className='w-full h-0.5 bg-black/80' />

            {/* framework */}
            <div className='flex px-10 text-xs leading-loose uppercase transition-all duration-500 md:text-sm gap-x-5 md:group-hover:px-12'>
              {project.technologies.map((technology) => (
                <p
                  key={technology.id}
                  className='text-black transition-colors duration-500 md:group-hover:text-white'
                >
                  {technology.name}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
