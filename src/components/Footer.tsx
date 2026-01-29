// components/Footer.tsx


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <img src="/logo.jpg" alt="CV. BAPAK ANAK JAYA ABADI - Spesialis Alat Berat Terpercaya" className="h-10 text-white rounded-full" loading="lazy" />
              <span className="ml-2 font-bold font-inter text-xl text-white">CV. BAPAK ANAK JAYA ABADI</span>
            </div>
            <p className="text-gray-400 mb-6">
              Penyedia solusi alat berat terkemuka di Indonesia untuk kebutuhan konstruksi dan industri Anda.
            </p>
            <p className="text-gray-400 mb-6">
              Jam Operasional : <br />
              Sales : 8.00 - 17.00 WIB <br />
              Rental : 24 jam
            </p>
            <p>
              <div className="flex items-center">
                <svg className="h-6 w-6 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <a href="tel:+6281235589351" className="text-gray-400 hover:text-white transition-colors">+62 812-3558-9351</a>
              </div>

              <div className="flex items-center">
                <svg className="h-6 w-6 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href="mailto:cvbapakanakjayaabadi@gmail.com" className="text-gray-400 hover:text-white transition-colors">cvbapakanakjayaabadi@gmail.com</a>
              </div>
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/forklift.id" className="text-gray-400 hover:text-white transition">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666z"></path>
                </svg>
              </a>
            </div>
          </div>


          <div className="md:col-span-2 lg:col-span-3 w-full">
            <h3 className="text-lg font-bold mb-6">Hubungi Kami</h3>
            <div className='grid md:grid-cols-3'>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-gray-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <p className="text-gray-400">
                    Office Jakarta <br />
                    Pusat Niaga Cibodas no 12 - 14<br />
                    Cibodas, Tangerang<br />
                    Indonesia. Rental alat berat Tangerang dan Jakarta tersedia.
                  </p>
                </div>

              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-gray-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <p className="text-gray-400">
                    Office Surabaya <br />
                    Wisma Tropodo jln Lawu CE no 2<br />
                    Waru, Sidoarjo<br />
                    Indonesia. Sewa forklift Sidoarjo dan Surabaya tersedia.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-gray-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <p className="text-gray-400">
                    Office Banyuwangi <br />
                    Jln Kertanegara no 2<br />
                    Perum Pelindung Alam no 2, Banyuwangi<br />
                    Indonesia. Sewa alat berat Banyuwangi tersedia.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-gray-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <p className="text-gray-400">
                    Workshop <br />
                    Raya Jember km 7, Kedayuanan<br />
                    Kabat, Banyuwangi<br />
                    Indonesia. Rental alat berat Jawa Timur tersedia.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} CV. BAPAK ANAK JAYA ABADI. Hak Cipta Dilindungi.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition">Syarat & Ketentuan</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition">Kebijakan Privasi</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition">Peta Situs</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;