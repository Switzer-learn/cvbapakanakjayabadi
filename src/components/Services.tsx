const services = [
  {
    id: 1,
    icon: 'support',
    title: 'Dukungan Teknis Alat Berat 24/7',
    description: 'Dukungan teknis alat berat 24 jam. Tim teknisi berpengalaman siap membantu Anda kapan pun diperlukan untuk memastikan operasi berjalan lancar.'
  },
  {
    id: 2,
    icon: 'maintenance',
    title: 'Pemeliharaan Rutin Alat Berat',
    description: 'Penyewaan alat berat dengan pemeliharaan rutin. Layanan pemeliharaan preventif berkala untuk menjaga performa optimal alat berat.'
  },
  {
    id: 3,
    icon: 'repair',
    title: 'Perbaikan Alat Berat di Lokasi Proyek',
    description: 'Layanan perbaikan alat berat di lokasi proyek. Layanan perbaikan langsung di lokasi kerja untuk meminimalkan downtime.'
  },
  {
    id: 4,
    icon: 'training',
    title: 'Pelatihan Operator Forklift dan Alat Berat',
    description: 'Pelatihan profesional untuk operator Anda agar dapat mengoperasikan alat dengan aman dan efisien. Pelatihan operator forklift dan alat berat tersedia.'
  },
  {
    id: 5,
    icon: 'delivery',
    title: 'Pengantaran dan Pengambilan Alat Berat',
    description: 'Pengantaran dan pengambilan alat berat ke lokasi proyek. Layanan pengantaran dan pengambilan alat berat ke dan dari lokasi proyek Anda.'
  },
  {
    id: 6,
    icon: 'consultation',
    title: 'Konsultasi Proyek Alat Berat',
    description: 'Bantuan profesional dalam memilih alat berat yang tepat untuk kebutuhan proyek Anda. Konsultasi proyek untuk memilih alat berat yang sesuai.'
  }
];

const Services = () => {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'support':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
        );
      case 'maintenance':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 'repair':
        return (<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
        );
      case 'training':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'delivery':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
          </svg>
        );
      case 'consultation':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        );
    }
  };

  return (
    <section id="pelayanan" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Layanan Sewa Alat Berat dengan Teknisi Berpengalaman</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Penyewaan alat berat dengan pemeliharaan rutin, layanan perbaikan alat berat di lokasi proyek, pelatihan operator forklift dan alat berat, dukungan teknis alat berat 24 jam, dan pengantaran dan pengambilan alat berat ke lokasi proyek.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="mb-4">
                {getIconComponent(service.icon)}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;