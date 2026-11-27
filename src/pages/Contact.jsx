import { useState } from "react";

const contactInfo = [
  { label: "Email", value: "hello@doulyra.com" },
  { label: "Instagram", value: "@doulyra" },
  { label: "Bidang Usaha", value: "Technology & Software Development" },
];

const serviceOptions = [
  "Web Development",
  "Mobile App",
  "UI/UX Design",
  "Sistem Informasi",
  "Lainnya",
];

const initialForm = {
  name: "",
  email: "",
  service: serviceOptions[0],
  message: "",
};

const fieldClass =
  "w-full border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-black transition";

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: kirim data ke backend / EmailJS di sini
    console.log("Form terkirim:", form);

    setSent(true);
    setForm(initialForm);
  };

  return (
    <main className="bg-white text-black">
      <section className="min-h-screen px-6 md:px-16 py-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm tracking-[0.3em] uppercase text-gray-500">
            Get In Touch
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-6 tracking-tight leading-tight">
            LET'S BUILD
            <br />
            <span className="text-gray-400">SOMETHING.</span>
          </h1>

          <p className="text-gray-600 text-lg max-w-xl mt-8 leading-relaxed">
            Punya ide website, aplikasi, atau sistem informasi? Ceritakan
            kebutuhan Anda dan tim Doulyra akan membantu mewujudkannya.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mt-16">
            {/* Left: Info */}
            <div>
              <h2 className="text-xl font-bold">Informasi Kontak</h2>

              <div className="mt-6 space-y-4 text-gray-600">
                {contactInfo.map((item) => (
                  <p key={item.label}>
                    <span className="font-semibold text-black">
                      {item.label}:
                    </span>
                    <br />
                    {item.value}
                  </p>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <h2 className="text-xl font-bold">Kirim Pesan</h2>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2"
                  >
                    Nama
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Nama lengkap Anda"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="nama@email.com"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold mb-2"
                  >
                    Layanan yang Dibutuhkan
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={fieldClass}
                  >
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Ceritakan kebutuhan proyek Anda"
                    className={`${fieldClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="bg-black text-white px-8 py-4 text-sm tracking-wider hover:bg-gray-800 transition"
                >
                  KIRIM PESAN
                </button>

                {sent && (
                  <p className="text-sm text-gray-600" role="status">
                    Terima kasih! Pesan Anda sudah kami terima dan akan segera
                    kami balas.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
