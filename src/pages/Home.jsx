import { Link } from "react-router-dom";

const services = [
  "Web Development",
  "Mobile App",
  "UI/UX Design",
  "Sistem Informasi",
];

const highlights = [
  {
    title: "Cepat",
    text: "Performa ringan dan responsif di semua perangkat.",
  },
  {
    title: "Aman",
    text: "Dibangun dengan standar keamanan data yang baik.",
  },
  {
    title: "Mudah Digunakan",
    text: "Antarmuka bersih yang langsung dipahami pengguna.",
  },
];

function Home() {
  return (
    <main className="bg-white text-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="px-6 md:px-16 py-12 md:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-gray-500">
              Technology Company
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mt-5 leading-[1.05]">
              BUILD YOUR
              <br />
              <span className="text-gray-400">DIGITAL FUTURE.</span>
            </h1>

            <p className="text-gray-600 mt-6 max-w-lg leading-relaxed">
              Doulyra adalah perusahaan teknologi yang berfokus pada
              pengembangan website, aplikasi, dan sistem informasi yang cepat,
              aman, dan mudah digunakan.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">
              <Link
                to="/about"
                className="bg-black text-white px-8 py-4 text-sm tracking-wider text-center hover:bg-gray-800 transition"
              >
                ABOUT DOULYRA
              </Link>

              <Link
                to="/contact"
                className="border border-black px-8 py-4 text-sm tracking-wider text-center hover:bg-black hover:text-white transition"
              >
                CONTACT US
              </Link>
            </div>

            <p className="text-xs text-gray-400 mt-10 md:mt-12 tracking-widest">
              DOULYRA® — SMART TECHNOLOGY SOLUTIONS
            </p>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
            <div className="relative aspect-[4/3] lg:aspect-[4/5] max-h-[440px] w-full bg-gray-100 overflow-hidden border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
                alt="Doulyra software development"
                className="w-full h-full object-cover absolute inset-0"
              />

              <div className="absolute bottom-4 left-4 bg-white px-4 py-3">
                <p className="text-[10px] tracking-widest text-gray-500">
                  OUR SERVICES
                </p>

                <h2 className="text-base font-bold mt-1">
                  Web & App Development
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Strip */}
      <section className="border-y border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200">
          {services.map((item) => (
            <div
              key={item}
              className="bg-gray-50 px-6 py-5 md:py-6 text-sm tracking-wide text-gray-700"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="px-6 md:px-16 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 md:items-end">
            <div>
              <p className="text-xs tracking-[0.3em] text-gray-500 uppercase">
                About the Company
              </p>

              <h2 className="text-3xl md:text-5xl font-semibold mt-5 leading-tight">
                Simple technology.
                <br />
                <span className="text-gray-400">Real impact.</span>
              </h2>
            </div>

            <div>
              <p className="text-gray-600 leading-relaxed">
                Kami percaya teknologi tidak harus rumit untuk memberi dampak
                besar. Doulyra menghadirkan solusi digital dengan pendekatan
                minimalis yang mengutamakan performa, keamanan, dan kemudahan
                penggunaan.
              </p>

              <Link
                to="/about"
                className="inline-block mt-6 border-b border-black pb-2 text-sm tracking-wider hover:text-gray-500 hover:border-gray-500 transition"
              >
                LIHAT SELENGKAPNYA →
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 md:mt-16">
            {highlights.map((item) => (
              <div key={item.title} className="border-t border-gray-300 pt-5">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-gray-600 mt-3 leading-relaxed text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white px-6 md:px-16 py-16 md:py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Punya ide produk digital?
            <br />
            <span className="text-gray-400">Mari kita wujudkan.</span>
          </h2>

          <Link
            to="/contact"
            className="bg-white text-black px-8 py-4 text-sm tracking-wider text-center hover:bg-gray-200 transition md:shrink-0"
          >
            HUBUNGI KAMI
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
