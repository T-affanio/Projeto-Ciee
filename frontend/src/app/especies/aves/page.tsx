'use client';

import { CardAnimal } from "@/components/CardAnimal/CardAnimal";
import { ModalAnimal } from "@/components/ModalAnimal/ModalAnimal";
import { Aves } from "@/content/aves";
import { Animal } from "@/types/Animal";
import { useState } from "react";

export const AvesPage = () =>  {

    const [ animalCadastrado,setAnimalCadastrado] = useState<Animal | null>(null);
    
    return(
        <main className="p-6">
            <h1 className="text-3xl font-bold mb-4 ">Aves</h1>
            <p className="text-gray-600 mb-6"> Cliqueem um animal para saber mais:</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
                {Aves.map((animal,index) =>(
                    <CardAnimal key={index} animal={animal} onClick={() => setAnimalCadastrado(animal)}/>
                ))}
            </div>
            {animalCadastrado && <ModalAnimal animal={animalCadastrado} onClose={() => setAnimalCadastrado(null)}/>}

        </main>
    )
}
export default AvesPage;