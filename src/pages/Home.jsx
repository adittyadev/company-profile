import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="bg-white text-black">
      {/* Hero Section */}
      <section className="min-h-[90vh] grid grid-cols-1 md:grid-cols-2">
        {/* Left Content */}
        <div className="flex flex-col justify-center px-6 md:px-16 py-16">
          <p className="text-sm tracking-[0.3em] uppercase text-gray-500">
            Independent Fashion Brand
          </p>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mt-6 leading-tight">
            WEAR YOUR
            <br />
            <span className="text-gray-400">OWN STORY.</span>
          </h1>

          <p className="text-gray-600 mt-6 max-w-md leading-relaxed">
            Doulyra adalah fashion brand yang berfokus pada kaos dengan desain
            modern, nyaman, dan karakter yang kuat untuk gaya sehari-hari.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              to="/about"
              className="bg-black text-white px-8 py-4 text-sm tracking-wider hover:bg-gray-800 transition"
            >
              ABOUT DOULYRA
            </Link>

            <Link
              to="/contact"
              className="border border-black px-8 py-4 text-sm tracking-wider hover:bg-black hover:text-white transition"
            >
              CONTACT US
            </Link>
          </div>

          <p className="text-xs text-gray-400 mt-12 tracking-widest">
            DOULYRA® — EVERYDAY ESSENTIALS
          </p>
        </div>

        {/* Right Image */}
        <div className="relative min-h-[500px] bg-gray-100 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=85"
            alt="Doulyra fashion t-shirt"
            className="w-full h-full object-cover absolute inset-0"
          />

          <div className="absolute bottom-8 left-8 bg-white px-5 py-4">
            <p className="text-xs tracking-widest text-gray-500">
              NEW COLLECTION
            </p>

            <h2 className="text-xl font-bold mt-1">Essential Tee</h2>
          </div>
        </div>
      </section>

      {/* Brand Introduction */}
      <section className="py-20 px-6 md:px-16 border-t border-gray-200">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] text-gray-500 uppercase">
            About the Brand
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold mt-6 leading-tight">
            Simple pieces.
            <br />
            Strong identity.
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed">
            Kami percaya bahwa pakaian tidak harus berlebihan untuk terlihat
            menarik. Doulyra menghadirkan koleksi kaos dengan pendekatan
            minimalis yang mengutamakan kenyamanan dan ekspresi diri.
          </p>

          <Link
            to="/about"
            className="inline-block mt-8 border-b border-black pb-2 text-sm tracking-wider hover:text-gray-500 hover:border-gray-500 transition"
          >
            DISCOVER DOULYRA →
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
