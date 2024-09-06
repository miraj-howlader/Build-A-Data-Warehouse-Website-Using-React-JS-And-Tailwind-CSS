
import { testimonialsData } from '../data';
import { Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import '../slider.css'
import { Pagination } from 'swiper/modules';


const TestimonialSlider = () => {
  return <Swiper 
  slidesPerView={'auto'}
  centeredSlides={true}
  spaceBetween={20}
  pagination={{
    clickable:true,
  }}
  modules={[Pagination]}
  className='mySwiper'
  >
    {testimonialsData.map((slider,index)=>{
      const {delay,image,message,name,web}=slider;
      return <SwiperSlide
      className=' bg-white rounded-[20px] border border-accent-primary
       xl:max-w-[645px] xl:max-h-[330px] pt-[60px] px-[35px] xl:px-[70px]
        pb-[50px] flex items-start gap-x-[30px] shadow-xl'
       key={index}>
              <img src={image} alt="" />
              <div>
                <div className=' text-lg text-primary
                 font-bold'>{name}</div>
                <div className=' mb-4 font-semibold
                 text-accent-primary'>{web}</div>
                <div className='max-w-[340px]'>{message}</div>
              </div>
      </SwiperSlide>
    })}
  </Swiper>;
};

export default TestimonialSlider;
