import React from 'react';


import { heroData } from '../data';
import Header from '../components//Header';
const Hero = () => {
  const {image,title,subtitle,btnText}=heroData;

  return <section className=' lg:h-[900px] py-12'>
    <Header />
    <div className="container mx-auto h-full relative">
        <div className=' flex flex-col xl:flex-row items-center
         h-full md:py-24'>
          {/* text  */}
          <div className=' text-center xl:text-left xl:absolute'>
            <h1
            data-aos='fade-down'
            data-aos-delay='400'
             className=' h1 xl:max-w-[700px]
             mb-6'>{title}</h1>
             <p
              data-aos='fade-left'
              data-aos-delay='400'
              className=' lead xl:max-w-[380px]
              mb-6 lg:mb-12'>{subtitle}</p>
              <button
               data-aos='fade-down'
               data-aos-delay='400'
               className=' btn btn-primary mb-8
               xl:mb-0'>{btnText}</button>
          </div>
          {/* image  */}
          <div
            data-aos='fade-up'
            data-aos-delay='700'
           className=' xl:absolute xl:-right-12 xl:bottom-16'>
            <img className=' w-[900px]' src={image} alt="" />
          </div>
        </div>
    </div>
  </section>;
};

export default Hero;
