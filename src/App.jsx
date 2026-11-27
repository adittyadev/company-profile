import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function About() {
  return (
    <section className="min-h-screen bg-white text-black px-6 md:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm tracking-[0.3em] uppercase text-gray-500">
          About Doulyra
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mt-6 tracking-tight">
          WE ARE
          <br />
          <span className="text-gray-400">DOULYRA.</span>
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl mt-8 leading-relaxed">
          Doulyra adalah fashion brand yang berfokus pada pakaian kasual,
          terutama kaos, dengan desain minimalis dan karakter modern. Kami
          percaya bahwa pakaian merupakan cara seseorang mengekspresikan
          identitas dan gaya personal.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="border-t border-gray-300 pt-6">
            <h2 className="text-xl font-bold">Our Vision</h2>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Menjadi fashion brand yang dikenal melalui desain sederhana,
              kualitas, dan identitas yang kuat.
            </p>
          </div>

          <div className="border-t border-gray-300 pt-6">
            <h2 className="text-xl font-bold">Our Mission</h2>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Menghadirkan produk fashion yang nyaman, modern, dan mudah
              digunakan dalam berbagai aktivitas sehari-hari.
            </p>
          </div>

          <div className="border-t border-gray-300 pt-6">
            <h2 className="text-xl font-bold">Our Focus</h2>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Mengembangkan koleksi kaos dengan desain minimalis, material
              nyaman, dan gaya yang timeless.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="min-h-screen bg-white text-black px-6 md:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm tracking-[0.3em] uppercase text-gray-500">
          Get In Touch
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mt-6 tracking-tight">
          LET'S
          <br />
          <span className="text-gray-400">CONNECT.</span>
        </h1>

        <p className="text-gray-600 text-lg max-w-xl mt-8 leading-relaxed">
          Punya pertanyaan tentang Doulyra atau ingin bekerja sama dengan kami?
          Hubungi kami melalui informasi berikut.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div>
            <h2 className="text-xl font-bold">Contact Information</h2>

            <div className="mt-6 space-y-4 text-gray-600">
              <p>
                <span className="font-semibold text-black">Email:</span>
                <br />
                hello@doulyra.com
              </p>

              <p>
                <span className="font-semibold text-black">Instagram:</span>
                <br />
                @doulyra
              </p>

              <p>
                <span className="font-semibold text-black">Business:</span>
                <br />
                Fashion & Clothing
              </p>
            </div>
          </div>

          <div className="bg-gray-100 p-8 md:p-10">
            <h2 className="text-2xl font-bold">DOULYRA</h2>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Everyday essentials.
              <br />
              Made for your own story.
            </p>

            <p className="text-xs tracking-widest text-gray-400 mt-12">
              DOULYRA® — FASHION BRAND
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
