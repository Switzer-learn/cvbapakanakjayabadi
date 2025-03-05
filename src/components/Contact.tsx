import { useState } from "react";
import emailjs from 'emailjs-com'
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    interest: 'rental' // Default value
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    // Send email via EmailJS
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Pesan Anda telah terkirim! Tim kami akan segera menghubungi Anda.");
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          interest: "rental",
        });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.");
      });
  };

  return (
    <section id="hubungi-kami" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Hubungi Kami</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ada pertanyaan atau ingin mendapatkan penawaran? Hubungi kami sekarang dan tim kami siap membantu Anda.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Nomor Telepon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Perusahaan</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Saya Tertarik Dengan</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="rental"
                      name="interest"
                      value="rental"
                      checked={formData.interest === 'rental'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="rental">Penyewaan Alat</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="purchase"
                      name="interest"
                      value="purchase"
                      checked={formData.interest === 'purchase'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="purchase">Pembelian Alat</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="service"
                      name="interest"
                      value="service"
                      checked={formData.interest === 'service'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="service">Layanan Teknis</label>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Pesan</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
          
          <div className="lg:w-1/2">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-800">Kantor Pusat</h4>
                    <p className="text-gray-600">Wisma Tropodo, Jln Lawu CE No 2, Waru, Sidoarjo</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-800">Telepon</h4>
                    <p className="text-gray-600">+62 851 5666 8815 (Whatsapp)</p>
                    <p className="text-gray-600">+62 895 3510 11860 (WhatsApp)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">cvbapakanakjayaabadi@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-800">Jam Operasional</h4>
                    <p className="text-gray-600">Office: 08.00 - 17.00 WIB</p>
                    <p className="text-gray-600">Rental: 24 Jam</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg h-64">
              {/* Here we would normally include a Google Map, but as a placeholder we're using an image */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d831.8568689452252!2d112.758881225888!3d-7.353846238133668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1741155201542!5m2!1sen!2sid" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;