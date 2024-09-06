import React from 'react';

import { ctaData } from '../data';
import { BsArrowRight } from 'react-icons/bs';

const CtaSection = () => {
  const {btnText1,btnText2,subtitle,title}=ctaData;
  return <section
  data-aos='fade-up'
   className=' my-[75px] xl:my-[150px] border-t-2
  '>
    <div className="container mx-auto">
      <div className=' flex flex-col xl:flex-row justify-between
       items-center'>
        {/* text  */}
        <div className=' py-12 xl:py-24 text-center xl:text-left'>
          <h2
          data-aos='fade-right'
           className=' h2 mb-5'>{title}</h2>
          <p
          data-aos='fade-left'
           className=' lead'>{subtitle}</p>
        </div>
        {/* button  */}
        <div
        data-aos='fade-up'
        data-aos-offset='200'
         className=' flex flex-col xl:flex-row gap-y-4
         gap-x-[30px]'>
          <button className=' btn btn-secondary'>{btnText1}</button>
          <button className=' btn btn-quaternary flex
           items-center gap-x-[20px] group'>{btnText2}
            <BsArrowRight  className=' text-2xl text-accent-primary
             transition group-hover:text-white'/>
          </button>
        </div>
      </div>
    </div>
  </section>;
};

export default CtaSection;
