'use client';
import { Carousel } from '@/components/carousel/carousel';
import Link from 'next/link';

export default function HomePage() {
   return (
      <div>
         {/* Carrossel */}
         <section className="bg-stone-200 text-center py-10 px-4 w-full pt-32">
            <div className="mt-6 h-[850px] w-full rounded-lg flex items-center justify-center">
               <Carousel />
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
