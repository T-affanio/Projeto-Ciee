import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
   return (
      <footer className="bg-black text-[#f1c602] py-20">
         <div className="max-w-7xl px-6 mx-auto flex flex-col md:flex-row gap-8">
            <div className="flex justify-center md:justify-start w-full md:w-auto">
               <Image src="/Image/logo/Logo.png" alt="Logo" height={80} width={80} className="object-cover h-20  md:h-24 rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full text-center md:text-left">
               <div>
                  <h3 className="text-lg font-semibold mb-3">
                     ReservaVerde<span>@</span>
                  </h3>
                  <p className="text-sm text-gray-400">
                     Mostrar que todo ser merece viver em paz, e que proteger a natureza é proteger o futuro.
                  </p>
               </div>

               <div>
                  <h3 className="text-lg font-semibold mb-3">Navegação</h3>
                  <nav className="text-gray-400 text-sm space-y-2 flex flex-col">
                     <Link href="/" className="hover:text-[#f1c602]">
                        Início
                     </Link>
                     <Link href="/especies" className="hover:text-[#f1c602]">
                        Espécies
                     </Link>
                     <Link href="/habitats" className="hover:text-[#f1c602]">
                        Habitat
                     </Link>
                     <Link href="/animais" className="hover:text-[#f1c602]">
                        Animais
                     </Link>
                     <Link href="/sobre-o-reserva-verde" className="hover:text-[#f1c602]">
                        Sobre o ReservaVerde
                     </Link>
                  </nav>
               </div>

               <div>
                  <h3 className="text-lg font-semibold mb-3">Contato</h3>
                  <p className="text-sm text-gray-400">📍 Rua das Araras, 003 - Curitiba, PR</p>
                  <p className="text-sm text-gray-400">📞 (41) 99999-9999</p>
                  <p className="text-sm text-gray-400">✉ contato@reservaverde.com</p>
               </div>

               <div>
                  <h3 className="text-lg font-semibold mb-3">Nos siga</h3>
                  <div className="flex justify-center md:justify-start space-x-4">
                     <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <Instagram size={24} className="hover:text-gray-400 transition" />
                     </Link>
                     <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <Facebook size={24} className="hover:text-gray-400 transition" />
                     </Link>
                     <Link href="https://www.linkedin.com/in/thiago-affanio-785702333/" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={24} className="hover:text-gray-400 transition" />
                     </Link>
                  </div>
               </div>
            </div>
         </div>

         <div className="pt-24 text-center text-gray-500 text-md">&copy; 2025 ReservaVerde - Todos os direitos reservados.</div>
      </footer>
   );
};

export default Footer;
