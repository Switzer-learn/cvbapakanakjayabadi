
import { 
  Globe, 
  Truck, 
  FileText, 
  Shield,
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Building2,
  Store,
  ShoppingCart
} from 'lucide-react';

const ExportImportSection = () => {
  const services = [
    { icon: FileText, title: "Konsultasi & Dokumen", desc: "Panduan regulasi dan pengurusan dokumen lengkap" },
    { icon: Truck, title: "Logistik & Freight", desc: "Pengiriman laut, udara, darat yang efisien" },
    { icon: Shield, title: "Kepabeanan & Asuransi", desc: "Bea cukai dan perlindungan kargo" }
  ];

  const advantages = [
    { icon: TrendingUp, title: "Berpengalaman", desc: "Tim profesional yang memahami regulasi internasional" },
    { icon: Globe, title: "Jaringan Luas", desc: "Mitra global untuk pengiriman ke seluruh dunia" },
    { icon: CheckCircle, title: "Transparan", desc: "Komunikasi jelas di setiap tahapan proses" },
    { icon: Shield, title: "Efisien", desc: "Optimalisasi biaya logistik dan bea cukai" }
  ];

  const targetClients = [
    { icon: Building2, title: "Manufaktur" },
    { icon: Store, title: "UKM Go Global" },
    { icon: Truck, title: "Distributor" },
    { icon: ShoppingCart, title: "E-commerce" }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50" id="export-import">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
            <Globe className="w-4 h-4 text-blue-600" />
            <span className="text-blue-800 text-sm font-medium">Jasa Ekspor Impor Terpercaya</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Export Import
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Solusi komprehensif untuk kebutuhan ekspor dan impor Anda. 
            Wujudkan potensi bisnis global dengan layanan terintegrasi end-to-end.
          </p>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Layanan Kami</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Mengapa Memilih Kami</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                  <p className="text-gray-600 text-sm">{advantage.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Target Clients */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Cocok Untuk</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {targetClients.map((client, index) => {
              const IconComponent = client.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <IconComponent className="w-4 h-4 text-blue-600" />
                  </div>
                  <h3 className="text-sm font-medium text-gray-900">{client.title}</h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Siap Mengembangkan Bisnis Global Anda?
          </h2>
          <p className="mb-6 opacity-90">
            Jangan biarkan batas geografis membatasi potensi bisnis Anda. 
            Hubungi kami untuk konsultasi gratis dan mulai ekspansi global.
          </p>
          <a href='https://wa.me/+6285156668815' className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center space-x-2">
            <span>Konsultasi Gratis</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default ExportImportSection;