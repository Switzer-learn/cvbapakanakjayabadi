import { Link } from 'react-scroll';
const AboutUs = () => {
  return (
    <section id="tentang-kami" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img
              src="./assets/images/tim-profesional-alat-berat-cv-bapak-anak-jaya-abadi.webp"
              alt="Tim Profesional CV. BAPAK ANAK JAYA ABADI - Spesialis Alat Berat"
              className="rounded-lg shadow-xl max-w-full h-96 md:h-screen object-cover"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Tentang Kami</h2>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            <p className="text-gray-600 mb-6">
              Sejak 2018, CV. BAPAK ANAK JAYA ABADI telah menjadi pionir dalam industri penyewaan dan penjualan alat berat di Indonesia. Dengan pengalaman lebih dari 7 tahun, kami telah melayani ribuan pelanggan dari berbagai sektor industri.
            </p>
            <p className="text-gray-600 mb-6">
              Kami memiliki armada yang lengkap dan terawat baik, termasuk forklift, reachtruck, crane, excavator, vibro, wheelloader, dan dozer. Semua unit kami dipelihara secara berkala oleh teknisi berpengalaman untuk memastikan keandalan dan keamanan.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-bold text-gray-800">Kualitas Terbaik</h3>
                  <p className="text-sm text-gray-600">Unit terawat dan berkualitas tinggi</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-bold text-gray-800">Tim Profesional</h3>
                  <p className="text-sm text-gray-600">Staf berpengalaman dan terlatih</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                <h3 className="font-bold text-gray-800">Harga Kompetitif</h3>
                  <p className="text-sm text-gray-600">Penawaran harga terbaik dan transparan</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-bold text-gray-800">Layanan 24/7</h3>
                  <p className="text-sm text-gray-600">Dukungan teknis kapan pun Anda butuhkan</p>
                </div>
              </div>
            </div>
            <Link 
              to="hubungi-kami"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg inline-block transition"
            >
              Hubungi Tim Kami
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;