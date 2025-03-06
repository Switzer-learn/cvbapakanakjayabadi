import { useState } from 'react';
import { Link } from 'react-scroll';

// Product data
const ProductsList = [
  {
    id: 1,
    name: 'Forklift',
    image: 'ForkLift.webp',
    type: ['Sewa','Jual'],
    description: 'Forklift dengan berbagai kapasitas dari 1.5 ton hingga 10 ton, tersedia dalam opsi diesel, electric, dan gas.',
    specs: ['Kapasitas 3-10 ton', 'Opsi bahan bakar beragam', 'Merk : Sumitomo, Imow, Dossan'],
  },
  {
    id: 2,
    name: 'Reachtruck',
    image: 'ReachTruck.webp',
    type: ['Sewa'],
    description: 'Reachtruck modern dengan sistem kontrol presisi tinggi, ideal untuk gudang dengan ruang sempit.',
    specs: ['Jangkauan tinggi', 'Navigasi ruang sempit', 'Tenaga listrik efisien'],
  },
  {
    id: 3,
    name: 'Crane',
    image: 'crane.webp',
    type: ['Sewa'],
    description: 'Mobile crane dengan kapasitas angkat besar, cocok untuk konstruksi dan pemindahan material berat.',
    specs: ['Kapasitas angkat 10-100 ton', 'Jangkauan boom hingga 30m', 'Mobilitas tinggi'],
  },
  {
    id: 4,
    name: 'Excavator',
    image: 'Excavator.webp',
    type: ['Sewa','Jual'],
    description: 'Excavator berbagai ukuran untuk proyek galian, pengerukan, dan pemindahan tanah.',
    specs: ['pc75, pc200', 'Kemampuan manuver tinggi', 'Konsumsi BBM efisien', 'Merk : Shantui'],
  },
  {
    id: 5,
    name: 'Vibro',
    image: 'vibro.webp',
    type: ['Sewa','Jual'],
    description: 'Vibro roller untuk pemadatan tanah dan jalan dengan hasil optimal.',
    specs: ['Sistem vibrasi ganda', 'Kontrol presisi tinggi', '12 ton', 'Merk : Dynapack'],
  },
  {
    id: 6,
    name: 'Wheelloader',
    image: 'wheelloader.webp',
    type: ['Jual'],
    description: 'Wheelloader dengan bucket besar untuk pemindahan material curah seperti pasir dan kerikil.',
    specs: ['Bucket berkapasitas besar', 'Daya angkut tinggi', 'Performa off-road excellent','Merk : Shantui'],
  },
  {
    id: 7,
    name: 'Dozer',
    image: 'dozer.webp',
    type: ['Jual'],
    description: 'Bulldozer kuat untuk pekerjaan pendorongan tanah dan perataan permukaan.',
    specs: ['Tenaga dorong superior', 'Blade berukuran besar', 'Traksi optimal berbagai medan','Merk : Shantui'],
  },
  {
    id: 8,
    name: "Towing",
    image: 'towing.webp',
    type: ['Sewa'],
    description: 'Towing truck dengan sistem kontrol presisi tinggi, cocok untuk pemindahan alat berat dan mobil.',
    specs: ["Pengiriman alat berat antar kota dan antar pulau", "Pengiriman mobil antar kota dan antar pulau"],
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Produk Kami</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan berbagai jenis alat berat berkualitas untuk kebutuhan konstruksi dan industri Anda, baik untuk penyewaan maupun pembelian.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex justify-center mb-8">
            <button
              className={`py-3 px-8 font-medium text-center transition ${
                activeTab === 'penyewaan'
                  ? 'bg-blue-600 text-white rounded-lg shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
              onClick={() => setActiveTab('penyewaan')}
            >
              Rental
            </button>
            <button
              className={`py-3 px-8 font-medium text-center transition ${
                activeTab === 'penjualan'
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
                      alt={product.name} 
                      className="w-full h-64 object-cover"
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
                      alt={product.name} 
                      className="w-full h-64 object-cover"
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