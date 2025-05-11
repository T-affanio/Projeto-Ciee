'use client';
import Image from 'next/image';
import Link from 'next/link';
export const Especies = () => {
   const especies = [
      {
         name: 'Mamíferos Carnívoros',
         image: '/Image/especies/mamiferoCarnivoro.jpg',
         link: '/especies/mamiferos-carnivoros',
      },
      {
         name: 'Mamíferos Herbívoros',
         image: '/Image/especies/mamiferoHerbivoro.jpg',
         link: '/especies/mamiferos-herbivoros',
      },
      {
         name: 'Aves',
         image: '/Image/especies/Aves.webp',
         link: '/especies/aves',
      },
      {
         name: 'Aves de Rapina',
         image: '/Image/especies/Aves de Rapina.webp',
         link: '/especies/aves-de-rapina',
      },
      {
         name: 'Marsupiais',
         image: '/Image/especies/Marsupiais.jpg',
         link: '/especies/marsupiais',
      },
      {
         name: 'Répteis',
         image: '/Image/especies/reptris.jpg',
         link: '/especies/repteis',
      },
      {
         name: 'Primatas',
         image: '/Image/especies/primata.webp',
         link: '/especies/primatas',
      },
      {
         name: 'Anfíbios',
         image: '/Image/animal/salamandra/salamandra.jpg',
         link: '/especies/anfibios',
      },
      {
         name: 'Fauna Marinha',
         image: '/Image/especies/Fauna Marinha.webp',
         link: '/especies/fauna-marinha',
      },
   ];

   return (
      <main className="p-6">
         <h1 className="text-3xl font-bold mb-4 text-[#cccecd]">Espécies:</h1>
         <p className="text-gray-600 mb-6 ">Veja os animais divididos por categoria de espécie:</p>

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
            {especies.map((especie, index) => (
               <Link href={especie.link} key={index}>
                  <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden h-96 hover:scale-105">
                     <Image src={especie.image} alt={especie.name} width={500} height={450} className="w-full h-72 object-cover" />
                     <div className="bg-green-900 pt-4 h-full text-center">
                        <h3 className="text-lg font-semibold text-[#f1c602]">{especie.name}</h3>
                        <p className='text-gray-500'>Clique para ver os animais dessa espécie.</p>
                     </div>
                  </div>
               </Link>
            ))}
         </div>
      </main>
   );
};
export default Especies;
