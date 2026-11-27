import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Web Development",
    text: "Website modern, responsif, dan cepat.",
  },
  {
    number: "02",
    title: "Mobile App",
    text: "Aplikasi mobile dengan pengalaman pengguna yang nyaman.",
  },
  {
    number: "03",
    title: "UI/UX Design",
    text: "Desain minimalis yang mudah digunakan.",
  },
  {
    number: "04",
    title: "Information System",
    text: "Sistem digital untuk membantu operasional bisnis.",
  },
];

const technologies = [
  "React",
  "Tailwind CSS",
  "Node.js",
  "PHP",
  "Laravel",
  "CodeIgniter",
  "MySQL",
  "Git",
];

function About() {
  return (
    <main className="bg-white text-black">
      {/* Hero */}
      <section className="px-6 md:px-16 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            About Doulyra
          </p>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mt-8">
            WE BUILD
            <br />
            <span className="text-gray-400">DIGITAL FUTURE.</span>
          </h1>

          <div className="mt-10 flex flex-col md:flex-row md:justify-between gap-8">
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Doulyra adalah perusahaan teknologi yang membantu bisnis
              berkembang melalui website, aplikasi, dan solusi digital yang
              sederhana serta efektif.
            </p>

            <Link
              to="/contact"
              className="text-sm font-semibold border-b border-black pb-2 self-start hover:text-gray-500 transition"
            >
              LET'S WORK TOGETHER ↗
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 px-6 md:px-16 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                What We Do
              </p>

              <h2 className="text-3xl md:text-5xl font-semibold mt-5">
                Digital Solutions
              </h2>
            </div>

            <p className="text-gray-500 max-w-sm leading-relaxed">
              Solusi teknologi yang dirancang untuk kebutuhan dan perkembangan
              bisnis Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-gray-300">
            {services.map((service) => (
              <div
                key={service.number}
                className="py-8 md:py-10 border-b border-gray-300 sm:pr-10"
              >
                <p className="text-sm text-gray-400">{service.number}</p>

                <h3 className="text-xl md:text-2xl font-semibold mt-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-3 leading-relaxed">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="px-6 md:px-16 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Our Technology
            </p>

            <h2 className="text-3xl md:text-5xl font-semibold mt-5">
              Built with
              <br />
              the right tools.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 content-start">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="border border-gray-300 px-5 py-3 text-sm hover:bg-black hover:text-white hover:border-black transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
