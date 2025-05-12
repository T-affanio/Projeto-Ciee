"use client";
import { Animal } from '@/types/Animal';
import { anfibios } from '@/content/anfibios';
import { useState } from 'react';
import { CardAnimal } from '@/components/CardAnimal/CardAnimal';
import { ModalAnimal } from '@/components/ModalAnimal/ModalAnimal';

export const Anfibio = () => {
   const [animalCadastrado, setAnimalCadastrado] = useState<Animal | null>(null);
   return (
      <main className='p-6 pt-26 md:pt-32'>
         <h1 className="text-3xl font-bold mb-4  text-[#cccecd]">Anfíbios</h1>
         <p className="text-gray-600 mb-6">Clique em um animal para saber mais:</p>

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {anfibios.map((animal, index) => (
               <CardAnimal key={index} animal={animal} onClick={() => setAnimalCadastrado(animal)} />
            ))}
         </div>
         {animalCadastrado && <ModalAnimal animal={animalCadastrado} onClose={() => setAnimalCadastrado(null)} />}
      </main>
   );
};

export default Anfibio;