'use client';

import { CardAnimal } from '@/components/CardAnimal/CardAnimal';
import { ModalAnimal } from '@/components/ModalAnimal/ModalAnimal';
import { faunaMarninha } from '@/content/faunaMarinha';
import { Animal } from '@/types/Animal';
import { useState } from 'react';

export const FaunaMarinhaPage = () => {
   const [animalCadastrado, setAnimalCadastrado] = useState<Animal | null>(null);

   return (
      <main className='p-6 pt-26 md:pt-32'>
         <h1 className="text-3xl font-bold mb-4  text-[#cccecd] ">Aves de Rapina</h1>
         <p className="text-gray-600 mb-6"> Clique em um animal para saber mais:</p>

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
            {faunaMarninha.map((animal, index) => (
               <CardAnimal key={index} animal={animal} onClick={() => setAnimalCadastrado(animal)} />
            ))}
         </div>
         {animalCadastrado && <ModalAnimal animal={animalCadastrado} onClose={() => setAnimalCadastrado(null)} />}
      </main>
   );
};
export default FaunaMarinhaPage;
