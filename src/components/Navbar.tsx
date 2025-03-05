import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.png" alt="PT Alat Berat Indonesia Logo" className="h-12" />
            <div className='flex flex-col font-inter'>
              <span className={`ml-2 font-bold md:text-2xl ${scrolled ? 'text-blue-600' : 'text-white'} cursor-default select-none`}>
                CV. BAPAK ANAK JAYA ABADI
              </span>
              <span className={`ml-2 font-bold text-sm md:text-lg ${scrolled ? 'text-blue-600' : 'text-white'} cursor-default select-none`}>
                "Mitra Andal untuk Solusi Alat Berat Anda"
              </span>
            </div>

          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="beranda"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`hover:rounded hover:bg-white px-3 py-2 cursor-pointer font-medium ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500 transition`}
            >
              Beranda
            </Link>
            <Link
              to="tentang-kami"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`hover:rounded hover:bg-white px-3 py-2 cursor-pointer font-medium ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500 transition`}
            >
              Tentang Kami
            </Link>
            <div className="relative group flex items-center">
              <Link
                to="produk"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`hover:rounded hover:bg-white px-3 py-2 cursor-pointer font-medium ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500 transition`}
              >
                Produk
              </Link>
              <div className="absolute left-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

                <Link
                  to="penyewaan"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:rounded-lg block px-4 py-2 text-gray-800 hover:bg-blue-50 cursor-pointer"
                >
                  Penyewaan
                </Link>
                <Link
                  to="penjualan"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:rounded-lg block px-4 py-2 text-gray-800 hover:bg-blue-50 cursor-pointer"
                >
                  Penjualan
                </Link>
              </div>
            </div>
            <Link
              to="pelayanan"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`hover:rounded hover:bg-white px-3 py-2 cursor-pointer font-medium ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500 transition`}
            >
              Pelayanan
            </Link>
            <Link
              to="hubungi-kami"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`hover:rounded hover:bg-white px-3 py-2 cursor-pointer font-medium ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500 transition`}
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-white'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <Link
              to="beranda"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block py-2 text-gray-800 hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              Beranda
            </Link>
            <Link
              to="tentang-kami"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block py-2 text-gray-800 hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              Tentang Kami
            </Link>
            <div className="py-2">
              <div className="block text-gray-800 font-medium mb-1">Produk</div>
              <Link
                to="penyewaan"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="block py-1 pl-4 text-gray-600 hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Penyewaan
              </Link>
              <Link
                to="penjualan"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="block py-1 pl-4 text-gray-600 hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Penjualan
              </Link>
            </div>
            <Link
              to="pelayanan"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block py-2 text-gray-800 hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              Pelayanan
            </Link>
            <Link
              to="hubungi-kami"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block py-2 text-gray-800 hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              Hubungi Kami
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;