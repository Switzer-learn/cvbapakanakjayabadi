import { useState } from 'react';
import { Link } from 'react-scroll';

// Product data
const ProductsList = [
  {
    id: 1,
    name: 'Forklift',
    image: 'ForkLift.webp',
    type: ['Sewa', 'Jual'],
    description: 'Sewa forklift 3 ton, 5 ton, 7 ton, dan 10 ton Sidoarjo. Rental forklift diesel, elektrik, dan gas tersedia untuk kebutuhan gudang dan industri.',
    specs: ['Kapasitas 3-10 ton', 'Opsi bahan bakar beragam', 'Merk : Sumitomo, Imow, Dossan'],
    altText: 'Forklift 3-10 Ton - Sewa dan Jual Alat Berat Indonesia',
  },
  {
    id: 2,
    name: 'Reachtruck',
    image: 'ReachTruck.webp',
    type: ['Sewa'],
    description: 'Sewa reachtruck gudang Sidoarjo dan rental reachtruck Surabaya. Reachtruck untuk gudang dengan ruang sempit dan jangkauan tinggi.',
    specs: ['Jangkauan tinggi', 'Navigasi ruang sempit', 'Tenaga listrik efisien'],
    altText: 'Reachtruck Jangkauan Tinggi - Sewa Alat Berat Indonesia',
  },
  {
    id: 3,
    name: 'Crane',
    image: 'crane.webp',
    type: ['Sewa'],
    description: 'Sewa crane Sidoarjo dan rental mobile crane Surabaya. Sewa crane 10-100 ton Jawa Timur untuk konstruksi dan pemindahan material berat.',
    specs: ['Kapasitas angkat 10-100 ton', 'Jangkauan boom hingga 30m', 'Mobilitas tinggi'],
    altText: 'Mobile Crane 10-100 Ton - Sewa Alat Berat Indonesia',
  },
  {
    id: 4,
    name: 'Excavator',
    image: 'Excavator.webp',
    type: ['Sewa', 'Jual'],
    description: 'Sewa excavator Sidoarjo dan rental excavator pc75, pc200. Sewa excavator proyek galian Surabaya untuk pengerukan dan pemindahan tanah.',
    specs: ['pc75, pc200', 'Kemampuan manuver tinggi', 'Konsumsi BBM efisien', 'Merk : Shantui'],
    altText: 'Excavator PC75 PC200 - Sewa dan Jual Alat Berat Indonesia',
  },
  {
    id: 5,
    name: 'Vibro',
    image: 'vibro.webp',
    type: ['Sewa', 'Jual'],
    description: 'Sewa vibro Sidoarjo dan rental vibro roller 12 ton. Vibro roller untuk pemadatan tanah dan jalan dengan hasil optimal.',
    specs: ['Sistem vibrasi ganda', 'Kontrol presisi tinggi', '12 ton', 'Merk : Dynapack'],
    altText: 'Vibro Roller 12 Ton - Sewa dan Jual Alat Berat Indonesia',
  },
  {
    id: 6,
    name: 'Wheelloader',
    image: 'wheelloader.webp',
    type: ['Jual'],
    description: 'Sewa wheelloader Surabaya dan jual wheelloader bucket besar. Wheelloader untuk pemindahan material curah seperti pasir dan kerikil.',
    specs: ['Bucket berkapasitas besar', 'Daya angkut tinggi', 'Performa off-road excellent', 'Merk : Shantui'],
    altText: 'Wheelloader Bucket Besar - Jual Alat Berat Indonesia',
  },
  {
    id: 7,
    name: 'Dozer',
    image: 'dozer.webp',
    type: ['Jual'],
    description: 'Sewa dozer Jawa Timur dan jual bulldozer blade besar. Bulldozer kuat untuk pekerjaan pendorongan tanah dan perataan permukaan.',
    specs: ['Tenaga dorong superior', 'Blade berukuran besar', 'Traksi optimal berbagai medan', 'Merk : Shantui'],
    altText: 'Bulldozer Blade Besar - Jual Alat Berat Indonesia',
  },
  {
    id: 8,
    name: "Towing",
    image: 'towing.webp',
    type: ['Sewa'],
    description: 'Jasa towing alat berat antar kota dan antar pulau. Jasa towing mobil antar kota dan antar pulau untuk pemindahan alat berat dan mobil.',
    specs: ["Pengiriman alat berat antar kota dan antar pulau", "Pengiriman mobil antar kota dan antar pulau"],
    altText: 'Towing Truck Antar Kota dan Pulau - Sewa Alat Berat Indonesia',
  }
];

const rentalProducts = ProductsList.filter(product => product.type.includes('Sewa'));

const saleProducts = ProductsList.filter(product => product.type.includes('Jual'));

const Products = () => {
  const [activeTab, setActiveTab] = useState('penyewaan');

  return (
    <section id="produk" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Sewa Forklift 3-10 Ton & Rental Alat Berat Terlengkap</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Penyewaan dan Penjualan Alat Berat Terlengkap. Sewa forklift Sidoarjo, rental alat berat Surabaya, sewa excavator, crane, vibro, dozer, dan towing truck untuk kebutuhan konstruksi dan industri Anda.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex justify-center mb-8">
            <button
              className={`py-3 px-8 font-medium text-center transition ${activeTab === 'penyewaan'
                ? 'bg-blue-600 text-white rounded-lg shadow-md'
                : 'text-gray-600 hover:text-blue-600'
                }`}
              onClick={() => setActiveTab('penyewaan')}
            >
              Rental
            </button>
            <button
              className={`py-3 px-8 font-medium text-center transition ${activeTab === 'penjualan'
                ? 'bg-blue-600 text-white rounded-lg shadow-md'
                : 'text-gray-600 hover:text-blue-600'
                }`}
              onClick={() => setActiveTab('penjualan')}
            >
              Sales
            </button>
          </div>

          {activeTab === 'penyewaan' && (
            <div id="penyewaan">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rentalProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                    <img
                      src={`../assets/images/products/${product.image}`}
                      alt={product.altText}
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Spesifikasi:</h4>
                        <ul className="pl-5">
                          {product.specs.map((spec, index) => (
                            <li key={index} className="text-gray-600 mb-1 list-disc">{spec}</li>
                          ))}
                        </ul>
                      </div>
                      <Link
                        to="hubungi-kami"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="bg-blue-500 text-white cursor-pointer hover:bg-blue-600 font-bold py-3 px-8 rounded-lg text-center transition"
                      >
                        Hubungi Kami
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'penjualan' && (
            <div id="penjualan">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {saleProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                    <img
                      src={`../assets/images/products/${product.image}`}
                      alt={product.altText}
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Spesifikasi:</h4>
                        <ul className="pl-5">
                          {product.specs.map((spec, index) => (
                            <li key={index} className="text-gray-600 mb-1 list-disc">{spec}</li>
                          ))}
                        </ul>
                      </div>
                      <Link
                        to="hubungi-kami"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="bg-blue-500 text-white hover:bg-blue-600 cursor-pointer font-bold py-3 px-8 rounded-lg text-center transition"
                      >
                        Minta Penawaran
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;