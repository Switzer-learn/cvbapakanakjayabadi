const testimonials = [
  {
    id: 1,
    name: 'Ahmad Suherman',
    company: 'PT Konstruksi Prima',
    image: '/images/testimonials/testimonial-1.jpg',
    content: 'Kami telah bekerja sama dengan HeavyLift selama lebih dari 5 tahun. Layanan mereka sangat profesional dan alat berat yang disediakan selalu dalam kondisi prima.'
  },
  {
    id: 2,
    name: 'Dewi Santoso',
    company: 'CV Bangun Jaya',
    image: '/images/testimonials/testimonial-2.jpg',
    content: 'Saya sangat puas dengan kecepatan respons tim dukungan teknis mereka. Setiap kali kami mengalami masalah, mereka selalu siap membantu dalam waktu singkat.'
  },
  {
    id: 3,
    name: 'Michael Tandiono',
    company: 'PT Logistik Indonesia',
    image: '/images/testimonials/testimonial-3.jpg',
    content: 'Forklift yang kami sewa dari HeavyLift sangat membantu operasional gudang kami. Performa stabil dan jarang mengalami masalah teknis.'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Testimoni Pelanggan</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lihat apa kata pelanggan kami tentang layanan dan produk kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-yellow-400 inline-block" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;