'use client';
import { Carousel } from '@/components/carousel/carousel';
import Link from 'next/link';

export default function HomePage() {
   return (
      <div>
         {/* Carrossel */}
         <section className="text-center py-10 px-4 w-full ">
            <div className="mt-6 h-[850px] w-full rounded-lg flex items-center justify-center">
               <Carousel />
            </div>
            <div className="pt-20">
               <h1 className="text-3xl text-[#FFD700]">Sabia?</h1>
               <p className='text-gray-600 text-xl border-b-2 border-[#979794] p-5'>
                  Antes um zoológico, hoje um refúgio. A Reserva Verde se transformou em uma ONG dedicada a recuperar animais vítimas de
                  cativeiro, tráfico e maus-tratos. Aqui, cada canto abriga uma nova chance de vida — com cuidado, liberdade e respeito.
                  Mais do que abrigar, queremos inspirar. Mostrar que todo ser merece viver em paz, e que proteger a natureza é proteger o
                  futuro.
               </p>
            </div>
         </section>

         {/* Cards */}
         <section className="flex flex-col md:flex-row gap-6 justify-center py-10 px-4">
            <Link href="/animais" className="bg-white shadow-md rounded-lg p-6 text-center w-full max-w-xs hover:shadow-lg transition">
               <h3 className="text-xl font-bold mb-2">Cadastrar Animais</h3>
               <p className="text-gray-600">Gerencie os animais do zoológico</p>
            </Link>

            <Link href="/habitats" className="bg-white shadow-md rounded-lg p-6 text-center w-full max-w-xs hover:shadow-lg transition">
               <h3 className="text-xl font-bold mb-2">Cadastrar Habitats</h3>
               <p className="text-gray-600">Adicione e organize os habitats</p>
            </Link>
         </section>
      </div>
   );
}
