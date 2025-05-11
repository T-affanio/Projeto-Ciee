'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Animal } from '@/types/Animal';

type ModalAnimalProps = {
   animal: Animal;
   onClose: () => void;
};

export const ModalAnimal = ({ animal, onClose }: ModalAnimalProps) => {
   // Estado para controlar a imagem atual
   const [currentImageIndex, setCurrentImageIndex] = useState(0);

   // Função para ir para a imagem clicada nos bullets
   const goToImage = (index: number) => {
      setCurrentImageIndex(index);
   };

   return (
      <div className="fixed inset-0 bg-[#2c2c2c]/85 flex items-center justify-center z-50">
   <div className="bg-[#6A4E23] p-8 rounded-lg w-[60%] max-h-[90vh] overflow-hidden relative shadow-xl transform transition-all duration-300 ease-in-out">
      <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-4xl cursor-pointer" onClick={onClose}>
         &times;
      </button>

      <h2 className="text-2xl font-semibold mb-3 text-[#ffd900f8]">{animal.name}</h2>

      {/* Carrossel de Imagens */}
      <div className="relative mb-5 mx-auto items-center">
         <Image
            src={animal.images[currentImageIndex]}
            alt={animal.name}
            width={1900}
            height={450}
            className="rounded-md shadow-md mb-5 object-cover w-full h-[530px] items-center"
         />
      </div>

      {/* Bullets */}
      <div className="flex justify-center space-x-2 mb-4">
         {animal.images.map((_, index) => (
            <button
               key={index}
               onClick={() => goToImage(index)}
               className={`w-6 h-3 rounded-full cursor-pointer ${currentImageIndex === index ? 'bg-yellow-500' : 'bg-gray-400'} transition-colors`}
            />
         ))}
      </div>

      {/* Conteúdo com rolagem */}
      <div className="overflow-y-auto h-56 pr-2.5">
         <div className="font-bold text-[#9b9a9a] grid grid-cols-2 gap-6 text-center">
            <p className="mb-4 border-b-2 p-2">
               <strong className="text-black">Curiosidades:</strong> {animal.curiosities}
            </p>
            <p className="mb-4 border-b-2 p-2">
               <strong className="text-black">Habitat:</strong> {animal.habitat}
            </p>
            <p className="mb-4 border-b-2 p-2">
               <strong className="text-black">Idade:</strong> {animal.age}
            </p>
            <p className="mb-4 border-b-2 p-2">
               <strong className="text-black">Origem:</strong> {animal.origin}
            </p>
         </div>
      </div>
   </div>
</div>
   );
};
