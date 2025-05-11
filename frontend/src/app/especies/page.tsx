'use client';
import Image from 'next/image';
import Link from 'next/link';
export const Especies = () => {
   const especies = [
     {
      name: 'Mamíferos Carnívoros',
      image: '/Image/especies/mamiferoCarnivoro.jpg',
      link: '/animais/mamiferos-carnivoros',
    },
    {
      name: 'Mamíferos Herbívoros',
      image: '/Image/especies/mamiferoHerbivoro.jpg',
      link: '/animais/mamiferos-herbivoros',
    },
    {
      name: 'Aves',
      image: '/Image/especies/Aves.webp',
      link: '/animais/aves',
    },
    {
      name: 'Aves de Rapina',
      image: '/Image/especies/Aves de Rapina.webp',
      link: '/animais/aves-de-rapina',
    },
    {
      name: 'Marsupiais',
      image: '/Image/especies/Marsupiais.jpg',
      link: '/animais/marsupiais',
    },
    {
      name: 'Répteis',
      image: '/Image/especies/reptris.jpg',
      link: '/animais/repteis',
    },
    {
      name: 'Primata',
      image: '/Image/especies/primata.webp',
      link: '/animais/primatas',
    },
    {
      name: 'Anfíbios',
      image: '/Image/especies/anfibio.jpg',
      link: '/animais/anfibios',
    },
    {
      name: 'Fauna Marinha',
      image: '/Image/especies/Fauna Marinha.webp',
      link: '/animais/fauna-marinha',
    },
  ];

   return (
      <main className="p-6">
         <h1 className="text-2xl font-bold mb-4">Espécies</h1>
         <p className="text-gray-600 mb-6 ">Veja os animais divididos por categoria de espécie:</p>

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
            {especies.map((especie, index) => (
                <Link href={especie.link} key={index}>
                    <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden h-96">
                  <Image src={especie.image} alt={especie.name} width={500} height={450} className="w-full h-72 object-cover" />
                  <div className='bg-gray-600 h-full text-center'>
                     <h3 className="text-lg font-semibold">{especie.name}</h3>
                     <p>Clique para ver os animais dessa espécie.</p>
                  </div>
               </div>
                </Link>
               
            ))}
         </div>
      </main>
   );
};
export default Especies;
