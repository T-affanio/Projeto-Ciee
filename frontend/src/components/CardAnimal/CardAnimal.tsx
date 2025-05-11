'use client';
import Image from "next/image";
import { Animal } from "@/types/Animal";

type CardAnimalProps = {
    animal: Animal;
    onClick: () => void;
};

export const CardAnimal = ({ animal, onClick }: CardAnimalProps) => (
    <div
        onClick={onClick}
        className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden cursor-pointer">
        {/* Acessando a primeira imagem do array animal.images */}
        <Image
            src={animal.images[0]} // Acessa a primeira imagem
            alt={animal.name}
            width={900} // Ajustando o tamanho
            height={400} // Ajustando o tamanho
            className="w-full h-80 object-cover"
        />
        <div className="p-4 bg-green-600">
            <h3 className="text-lg font-semibold text-[#ffd900f8]">{animal.name}</h3>
            <p className="text-yellow-100 text-sm mt-2">{animal.description}</p>
        </div>
    </div>
);
