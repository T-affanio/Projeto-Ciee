'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

export const Carousel = () => {
   const Images = [
      '/image/banners/1.jpg',
      '/image/banners/2.jpg',
      '/image/banners/3.jpg',
      '/image/banners/4.jpg',
      '/image/banners/5.jpg',
      '/image/banners/6.jpg',
      '/image/banners/7.jpg',
      '/image/banners/8.jpg',
      '/image/banners/9.jpg',
      '/image/banners/10.jpg',
   ];

   return (
      <div className="w-full h-[850px]">
         <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            pagination={{
               clickable: true,
               dynamicBullets: true,
            }}
            loop={true}
            speed={800}
            autoplay={{
               delay: 5000,
               disableOnInteraction: false,
            }}
            className="w-full h-full custom-pagination"
         >
            {Images.map((image, index) => (
               <SwiperSlide key={index}>
                  <div className=" relative w-full h-screen">
                     <Image src={image} alt={`slide ${index + 1}`} fill className="rounded-md " priority={index === 0} />
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};

export default Carousel;
