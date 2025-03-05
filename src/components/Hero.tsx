import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="beranda" className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="h-full w-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url(/assets/images/hero.webp)`,
            filter: "brightness(0.6)" 
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Solusi Alat Berat Terpercaya di Indonesia
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Kami menyediakan layanan penyewaan dan penjualan forklift dan alat berat berkualitas dengan harga terbaik untuk kebutuhan industri dan konstruksi Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="penyewaan"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-center transition"
            >
              Sewa Sekarang
            </Link>
            <Link
              to="hubungi-kami"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-6 rounded-lg text-center transition"
            >
              Konsultasi Gratis
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;