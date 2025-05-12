'use client'; 

import { Swiper, SwiperSlide } from 'swiper/react'; // Componentes principais do Swiper
import { Autoplay, Pagination } from 'swiper/modules'; // Módulos para autoplay e paginação
import 'swiper/css'; // Estilos básicos do Swiper
import 'swiper/css/pagination'; // Estilos da paginação
import Image from 'next/image'; // Componente de imagem otimizado do Next.js

// Componente de Carrossel
export const Carousel = () => {
   // Lista de imagens para o carrossel
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
      // Container principal do carrossel com responsividade
      <div className="w-full lg:w-[90%] sm:h-[500px] md:w-[95%]  md:h-[580px] lg:h-[815px] cursor-pointer">
         <Swiper
            modules={[Pagination, Autoplay]} // Adiciona módulos de paginação e autoplay
            slidesPerView={1} // Exibe 1 slide por vez
            pagination={{
               clickable: true, // Bolinhas de navegação clicáveis
               dynamicBullets: true, // Bolinhas de tamanhos diferentes conforme o slide
            }}
            loop={true} // Faz com que o carrossel reinicie ao chegar no fim
            speed={800} // Velocidade da transição entre slides (em ms)
            autoplay={{
               delay: 5000, // Tempo entre cada slide (em ms)
               disableOnInteraction: false, // Continua mesmo se o usuário interagir
            }}
            className="w-full h-full custom-pagination" // Classe customizada para possíveis estilos
         >
            {/* Renderiza cada imagem como um slide */}
            {Images.map((image, index) => (
               <SwiperSlide key={index}>
                  {/* Container para imagem com altura variável responsiva */}
                  <div className="relative w-full h-[350px] sm:h-[500px] md:h-[580px] lg:h-[820px]">
                     {/* Imagem otimizada. 'fill' faz com que ocupe todo o espaço do container */}
                     <Image 
                        src={image} 
                        alt={`slide ${index + 1}`} 
                        fill 
                        className="rounded-md" 
                        priority={index === 0} // Garante que a primeira imagem seja priorizada no carregamento
                     />
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};

export default Carousel;
