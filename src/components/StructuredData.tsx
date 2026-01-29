import React from 'react';

const StructuredData: React.FC = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "CV. BAPAK ANAK JAYA ABADI",
        "image": "https://www.cvbapakanakjayaabadi.com/logo.png",
        "telephone": "+62 812-3558-9351",
        "email": "cvbapakanakjayaabadi@gmail.com",
        "address": [
            {
                "@type": "PostalAddress",
                "addressLocality": "Jakarta",
                "addressCountry": "ID"
            },
            {
                "@type": "PostalAddress",
                "addressLocality": "Surabaya",
                "addressCountry": "ID"
            },
            {
                "@type": "PostalAddress",
                "addressLocality": "Banyuwangi",
                "addressCountry": "ID"
            }
        ],
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ],
                "opens": "08:00",
                "closes": "17:00",
                "name": "Sales Hours"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59",
                "name": "Rental Hours (24 Hours)"
            }
        ],
        "priceRange": "$$$",
        "areaServed": [
            "Jakarta",
            "Surabaya",
            "Banyuwangi",
            "Indonesia"
        ],
        "description": "Penyewaan dan Penjualan Alat Berat Terlengkap. Spesialis Alat Berat Terpercaya untuk Sewa Forklift Sidoarjo, Rental Alat Berat Surabaya, dan Solusi Alat Berat untuk Industri dan Konstruksi. Jual dan Sewa Excavator, Forklift, Crane, Reachtruck, Vibro, Wheelloader, Dozer, dan Towing dengan Pengalaman 20+ Tahun. Layanan sewa alat berat dengan teknisi berpengalaman, pemeliharaan rutin, perbaikan di lokasi proyek, pelatihan operator forklift dan alat berat, dukungan teknis 24 jam, dan pengantaran pengambilan alat berat ke lokasi proyek tersedia.",
        "url": "https://www.cvbapakanakjayaabadi.com"
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
};

export default StructuredData;
