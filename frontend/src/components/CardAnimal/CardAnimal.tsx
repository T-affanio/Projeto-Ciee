'use client'; 

import Image from 'next/image'; // Componente otimizado de imagem do Next.js
import { Animal } from '@/types/Animal'; // Tipo definido para garantir estrutura dos dados

// Definindo o tipo das props que o componente recebe
type CardAnimalProps = {
   animal: Animal;      // Objeto animal contendo informações como nome, descrição e imagens
   onClick: () => void; // Função a ser executada ao clicar no card
};

// Componente funcional que recebe um animal e uma função onClick
export const CardAnimal = ({ animal, onClick }: CardAnimalProps) => (
   // Container principal do card com estilos de layout, sombra e clique
   <div onClick={onClick} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden cursor-pointer w-11/12">
      
      {/* Exibe a primeira imagem do array de imagens do animal */}
      <Image
         src={animal.images[0]} // Acessa a primeira imagem do array
         alt={animal.name} // Texto alternativo acessível
         width={9000} // Define a largura da imagem (valor exagerado, pode ser ajustado)
         height={550} // Define a altura da imagem
         className="w-full h-80 object-cover" // Garante que a imagem preencha o espaço sem distorção
      />

      {/* Área com nome e descrição do animal */}
      <div className="p-4 bg-green-600">
         <h3 className="text-lg font-semibold text-[#ffd900f8]">
            {animal.name}
         </h3>
         <p className="text-yellow-100 text-sm mt-2">
            {animal.description}
         </p>
      </div>
   </div>
);
