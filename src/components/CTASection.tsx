import { Link } from 'react-scroll';

const CTASection = () => {
  return (
    <section className="py-16 bg-blue-700 relative">
      <div className="absolute inset-0 z-0">
        <div 
          className="h-full w-full bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/cta-bg.jpg')" }}
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Siap Untuk Tingkatkan Efisiensi Operasional Anda?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran terbaik untuk kebutuhan alat berat bisnis Anda.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="hubungi-kami"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg text-center transition"
            >
              Hubungi Kami
            </Link>
            <a 
              href="tel:+6281234567890"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 font-bold py-3 px-8 rounded-lg text-center transition"
            >
              <span className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +62 812-3456-7890
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;