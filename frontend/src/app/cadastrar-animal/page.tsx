'use client';

import { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { Animal } from '@/types/Animal';

// Tipo para representar os dados de uma espécie
type SpeciesData = {
   name: string;
   description: string;
   animals: Animal[];
};

const AdminDashboard = () => {
   // Lista de espécies cadastradas
   const [speciesList, setSpeciesList] = useState<SpeciesData[]>([]);

   // Dados do animal sendo criado
   const [animalData, setAnimalData] = useState<Animal>({
      name: '',
      images: [],
      description: '',
      curiosities: '',
      habitat: '',
      age: '',
      origin: '',
   });

   // Espécie selecionada para adicionar um animal
   const [selectedSpecies, setSelectedSpecies] = useState('');

   // Campos do formulário para nova espécie
   const [newSpeciesName, setNewSpeciesName] = useState('');
   const [newSpeciesDesc, setNewSpeciesDesc] = useState('');

   // Controle do modal de sucesso
   const [modalVisible, setModalVisible] = useState(false);
   const [modalMessage, setModalMessage] = useState('');

   // Total de animais cadastrados (somatório de todas as espécies)
   const totalAnimals = speciesList.reduce((acc, s) => acc + s.animals.length, 0);

   // Adiciona uma nova espécie à lista
   const addSpecies = () => {
      if (!newSpeciesName) return;

      const newSpecies: SpeciesData = {
         name: newSpeciesName,
         description: newSpeciesDesc,
         animals: [],
      };

      setSpeciesList((prev) => [...prev, newSpecies]);
      setNewSpeciesName('');
      setNewSpeciesDesc('');
   };

   // Adiciona um novo animal à espécie selecionada
   const addAnimal = () => {
      if (!animalData.name || !selectedSpecies) return;

      setSpeciesList((prev) =>
         prev.map((specie) =>
            specie.name === selectedSpecies
               ? {
                    ...specie,
                    animals: [...specie.animals, animalData],
                 }
               : specie
         )
      );

      // Mostra o modal de confirmação
      setModalMessage(`${animalData.name} adicionado à espécie ${selectedSpecies}.`);
      setAnimalData({
         name: '',
         images: [],
         description: '',
         curiosities: '',
         habitat: '',
         age: '',
         origin: '',
      });
      setSelectedSpecies('');
      setModalVisible(true);
   };

   return (
      <div className="min-h-screen p-6 pt-26 md:pt-32">
         {/* Cabeçalho */}
         <header className="mb-6">
            <h1 className="text-3xl font-bold text-green-900">🐾<span className='text-[#f1c602]'>RSV</span> Dashboard</h1>
            <p className="text-gray-500">Administração de espécies e animais:</p>
         </header>

         {/* Cartões de estatísticas */}
         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white shadow rounded-lg p-4">
               <h2 className="text-black text-sm">Espécies</h2>
               <p className="text-2xl font-bold text-green-900">{speciesList.length}</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
               <h2 className="text-black text-sm">Animais</h2>
               <p className="text-2xl font-bold text-green-900">{totalAnimals}</p>
            </div>
         </div>

         {/* Formulários de cadastro */}
         <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Formulário de nova espécie */}
            <div className="bg-green-900 shadow rounded-lg p-6 space-y-4">
               <h2 className="text-xl font-semibold flex items-center gap-2 text-[#f1c602]">
                  <PlusCircle className="w-5 h-5 text-blue-600" />
                  Nova Espécie
               </h2>
               <input
                  type="text"
                  placeholder="Nome da espécie"
                  value={newSpeciesName}
                  onChange={(e) => setNewSpeciesName(e.target.value)}
                  className="w-full border p-2 rounded"
               />
               <textarea
                  placeholder="Descrição"
                  value={newSpeciesDesc}
                  onChange={(e) => setNewSpeciesDesc(e.target.value)}
                  className="w-full border p-2 rounded"
               />
               <button onClick={addSpecies} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Adicionar Espécie
               </button>
            </div>

            {/* Formulário de novo animal */}
            <div className="bg-green-900 shadow rounded-lg p-6 space-y-4">
               <h2 className="text-xl font-semibold flex items-center gap-2 text-[#f1c602]">
                  <PlusCircle className="w-5 h-5 text-green-600" />
                  Novo Animal
               </h2>
               <input
                  type="text"
                  placeholder="Nome do animal"
                  value={animalData.name}
                  onChange={(e) => setAnimalData({ ...animalData, name: e.target.value })}
                  className="w-full border p-2 rounded"
               />
               <input
                  type="text"
                  placeholder="Idade"
                  value={animalData.age}
                  onChange={(e) => setAnimalData({ ...animalData, age: e.target.value })}
                  className="w-full border p-2 rounded"
               />
               <input
                  type="text"
                  placeholder="Origem"
                  value={animalData.origin}
                  onChange={(e) => setAnimalData({ ...animalData, origin: e.target.value })}
                  className="w-full border p-2 rounded"
               />
               <input
                  type="text"
                  placeholder="Habitat"
                  value={animalData.habitat}
                  onChange={(e) => setAnimalData({ ...animalData, habitat: e.target.value })}
                  className="w-full border p-2 rounded"
               />
               <textarea
                  placeholder="Descrição"
                  value={animalData.description}
                  onChange={(e) => setAnimalData({ ...animalData, description: e.target.value })}
                  className="w-full border p-2 rounded"
               />
               <textarea
                  placeholder="Curiosidades"
                  value={animalData.curiosities}
                  onChange={(e) => setAnimalData({ ...animalData, curiosities: e.target.value })}
                  className="w-full border p-2 rounded"
               />
               {/* Selecionar espécie para associar o animal */}
               <select value={selectedSpecies} onChange={(e) => setSelectedSpecies(e.target.value)} className="w-full border p-2 rounded">
                  <option value="">Selecione uma espécie</option>
                  {speciesList.map((specie, index) => (
                     <option key={index} value={specie.name}>
                        {specie.name}
                     </option>
                  ))}
               </select>
               <button onClick={addAnimal} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  Adicionar Animal
               </button>
            </div>
         </div>

         {/* Lista das espécies e seus animais */}
         <div className="space-y-6">
            {speciesList.map((specie, index) => (
               <div key={index} className="bg-green-900 p-6 rounded-lg shadow border-l-4 border-blue-500">
                  <h3 className="text-lg font-bold text-[#f1c602]">{specie.name}</h3>
                  <p className="text-[#f1c602] mb-2">{specie.description}</p>
                  <ul className="list-disc ml-6 text-[#f1c602]">
                     {specie.animals.map((animal, i) => (
                        <li key={i}>
                           {animal.name} — {animal.age} ano(s)
                        </li>
                     ))}
                     {specie.animals.length === 0 && <li className="text-gray-400 italic">Nenhum animal cadastrado.</li>}
                  </ul>
               </div>
            ))}
         </div>

         {/* Modal de sucesso */}
         {modalVisible && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
               <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center space-y-4">
                  <h2 className="text-xl font-bold text-green-600">✅ Sucesso</h2>
                  <p>{modalMessage}</p>
                  <button onClick={() => setModalVisible(false)} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                     Fechar
                  </button>
               </div>
            </div>
         )}
      </div>
   );
};

export default AdminDashboard;
