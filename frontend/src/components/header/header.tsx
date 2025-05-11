'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Menu, X, Search } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!search.trim()) return;
    router.push(`/${search.trim().toLowerCase()}`);
    setSearch('');
    setShowSearch(false);
    setMenuOpen(false);
  };

  return (
    <header className="bg-green-900 h-28 shadow-md fixed w-full z-50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between w-full">
        <Link href="/" className="text-2xl font-bold text-yellow-100">ReservaVerde</Link>

        {/* Busca dinâmica */}
        <div className="flex items-center gap-3">
          {showSearch && (
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Buscar (ex: animais)"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                autoFocus
                className="border border-green-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all w-56"
              />
            </form>
          )}
          <button onClick={() => setShowSearch(!showSearch)} className="text-yellow-200">
            <Search size={24} />
          </button>

          {/* Botão de menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
            className="text-yellow-200"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Dropdown */}
      {menuOpen && (
        <div className="bg-green-200 shadow-lg border-t border-green-300 absolute w-full top-full z-40">
          <div className="px-6 py-4 flex flex-col gap-4">
            <ul className="flex flex-col gap-3 text-green-900">
              <li>
                <Link href="/especies" onClick={() => setMenuOpen(false)} className="hover:text-green-700">
                  Espécies
                </Link>
              </li>
              <li>
                <Link href="/habitats" onClick={() => setMenuOpen(false)} className="hover:text-green-700">
                  Habitat
                </Link>
              </li>
              <li>
                <Link href="/novos" onClick={() => setMenuOpen(false)} className="hover:text-green-700">
                  Recém-chegados
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
