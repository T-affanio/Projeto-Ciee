'use client';
import { Carousel } from '@/components/carousel/carousel';
import Link from 'next/link';

export default function HomePage() {
   return (
      <div>
         {/* Carrossel */}
         <section className="text-center py-10 px-4 w-full pt-[230px] sm:pt-[320px] sm:w-full md:w-full md:pt-[370px] lg:pt-[120px] xl:pt-[110px]  ">
            <div className=" h-[90px]  w-full lg:h-[850px]  rounded-lg flex items-center justify-center">
               <Carousel />
            </div>
            <div className=" pt-40 sm:pt-56 md:pt-72 lg:pt-0">
               <h1 className="text-3xl text-[#FFD700]">Sabia?</h1>
               <p className="text-gray-600 text-xl border-b-2 border-[#979794] p-5">
                  Antes um zoológico, hoje um refúgio. A Reserva Verde se transformou em uma ONG dedicada a recuperar animais vítimas de
                  cativeiro, tráfico e maus-tratos. Aqui, cada canto abriga uma nova chance de vida — com cuidado, liberdade e respeito.
                  Mais do que abrigar, queremos inspirar. Mostrar que todo ser merece viver em paz, e que proteger a natureza é proteger o
                  futuro.
               </p>
            </div>
         </section>

         {/* Cards */}
         <section className="flex flex-col sm:items-center  md:flex-row gap-6 justify-center py-10 px-10">
            <Link href="/cadastrar-animal" className="bg-white shadow-md rounded-lg p-6 text-center w-full max-w-xs hover:shadow-lg transition">
               <h3 className="text-xl font-bold mb-2 text-teal-800">Cadastrar Animais!</h3>
               <p className="text-gray-600">Gerencie os animais do zoológico</p>
            </Link>

            <Link href="/especies" className="bg-white shadow-md rounded-lg p-6 text-center w-full max-w-xs hover:shadow-lg transition">
               <h3 className="text-xl font-bold mb-2 text-green-900">Espécies</h3>
               <p className="text-gray-600">confira-os !</p>
            </Link>
         </section>
      </div>
   );
}
