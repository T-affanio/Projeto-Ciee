'use client'; // Indica que este componente será renderizado no client-side (necessário para usar hooks como useState)

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Hook para navegação programática no Next.js (App Router)
import Link from 'next/link'; // Componente para navegação entre páginas
import { Menu, X, Search } from 'lucide-react'; // Ícones SVG

export default function Header() {
   // Controla o estado de abertura do menu mobile
   const [menuOpen, setMenuOpen] = useState(false);

   // Controla se o campo de busca está visível
   const [showSearch, setShowSearch] = useState(false);

   // Valor digitado no campo de busca
   const [search, setSearch] = useState('');

   // Hook de navegação
   const router = useRouter();

   // Lida com a submissão do formulário de busca
   const handleSearch = (e: React.FormEvent) => {
      e.preventDefault();
      if (!search.trim()) return; // Impede buscas vazias

      // Redireciona para uma rota com base no texto buscado
      router.push(`/${search.trim().toLowerCase()}`);

      // Limpa os campos e fecha menus
      setSearch('');
      setShowSearch(false);
      setMenuOpen(false);
   };

   return (
      <header className="bg-green-900 h-20 sm:h-22 md:h-26 shadow-md fixed w-full z-50 flex items-center">
         {/* Container principal */}
         <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between w-full">
            {/* Logo / nome do app */}
            <Link href="/" className="text-xl sm:text-2xl font-bold text-[#f1c602]">
               ReservaVerde
            </Link>

            {/* Área de busca + botões */}
            <div className="flex items-center gap-2 sm:gap-6 md:gap-8">
               {/* Campo de busca visível somente se showSearch for true */}
               {showSearch && (
                  <form onSubmit={handleSearch}>
                     <input
                        type="text"
                        placeholder="Buscar (ex: Espécies)"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        autoFocus
                        className="border border-green-500 rounded px-5 py-2 focus:outline-none focus:ring-2 focus:ring-green-900 transition-all w-36 sm:w-46 md:w-52"
                     />
                  </form>
               )}

               {/* Botão para ativar/desativar campo de busca */}
               <button onClick={() => setShowSearch(!showSearch)} className="text-[#f1c602]">
                  <Search size={24} />
               </button>

               {/* Botão para abrir/fechar menu */}
               <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu" className="text-[#f1c602]">
                  {menuOpen ? <X size={28} /> : <Menu size={28} />}
               </button>
            </div>
         </div>

         {/* Menu dropdown que aparece quando menuOpen é true */}
         {menuOpen && (
            <div className="bg-[#f1c602] shadow-lg border-t border-green-900 absolute w-full top-full z-40">
               <div className="px-6 py-4 flex flex-col gap-4">
                  <ul className="flex flex-col gap-3 text-green-900">
                     <li>
                        <Link href="/especies" onClick={() => setMenuOpen(false)} className="hover:text-[#fafaf8]">
                           Espécies
                        </Link>
                     </li>
                     <li>
                        <Link href="/cadastrar-animal" onClick={() => setMenuOpen(false)} className="hover:text-[#fafaf8]">
                           Cadastrar Animais
                        </Link>
                     </li>
                     <li>
                        <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-[#fafaf8]">
                           Home
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         )}
      </header>
   );
}
