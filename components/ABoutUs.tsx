export default function ResponsiveAboutPage() {
  return (
    <main className="w-full overflow-hidden font-serif">
      <section className="relative h-[800px] md:h-[600px] lg:min-h-screen w-full">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#0b1f44] vision-clip" />
          <div className="absolute inset-0 bg-[#6fbf4a] mission-clip" />
          <div className="absolute inset-0 bg-white divider-clip" />
        </div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 min-h-full">
          {/* Vision Section */}
          <div className="flex items-start md:items-center px-6 md:px-12 lg:px-20 pt-12 md:pt-0">
            <div className="max-w-xl text-black lg:text-white w-full">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                Our Vision
              </h1>
              <p className="text-sm md:text-base leading-relaxed">
                At Fuworx, we envision a world where technology becomes the true
                accelerator of business growth and innovation. Our goal is to
                empower organizations to operate smarter, faster, and more
                efficiently through digital transformation. We aim to be the
                trusted technology partner that helps businesses modernize
                operations, automate intelligently, and unlock new opportunities
                for sustainable growth—while we take care of the technology that
                drives it.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="flex items-end md:items-center justify-center px-6 md:px-12 lg:px-20 pb-12 md:pb-0">
            <div className="max-w-xl text-white w-full md:text-right">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                Our Mission
              </h1>
              <p className="text-sm md:text-base leading-relaxed">
                At Fuworx, our mission is to empower businesses to operate
                smarter and grow faster through technology-driven
                transformation.
                <br />
                <br />
                We build intelligent digital systems, automate processes, and
                manage operations that enhance efficiency, reduce complexity,
                and deliver measurable results—ensuring our clients scale
                confidently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-white py-12 md:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1f44] mb-4 md:mb-6">
              Our Story
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 md:mb-5">
              At Fuworx, we're redefining how businesses operate in the digital
              era. We help organizations transform the way they work with
              smarter technology, intelligent automation, and seamless
              operations.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 md:mb-5">
              We started Fuworx with one mission: to simplify digital
              transformation by replacing outdated systems and fragmented
              processes with connected digital ecosystems.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Today, we stand as a trusted partner for companies looking to
              modernize, scale, and innovate—while staying focused on what truly
              matters.
            </p>
          </div>
          <img
            src="/images/team-work.png"
            alt="Team collaboration"
            className="rounded-2xl shadow-lg w-full h-64 md:h-80 lg:h-auto object-cover"
          />
        </div>
      </section>

      {/* Our Focus Section */}
      <section className="bg-white pb-12 md:pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <img
            src="/images/focus-target.png"
            alt="Target focus"
            className="rounded-2xl shadow-lg w-full h-64 md:h-80 lg:h-auto object-cover order-2 lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#6fbf4a] mb-4 md:mb-6">
              Our Focus
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 md:mb-5">
              Digital transformation isn't just about technology—it's about
              solving real business challenges with the right strategy, tools,
              and execution.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 md:mb-5">
              Our solutions are cost-efficient, scalable, and intelligent,
              designed to streamline operations and optimize performance.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              We take care of technology and operations so our clients can focus
              on innovation, growth, and building the future.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center"
        style={{
          backgroundImage: "url('/images/tech-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#081c3a]/85" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 lg:px-12 w-full">
          <p className="text-green-400 text-base md:text-lg mb-3 md:mb-4">
            Reach us today !
          </p>
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 md:mb-8">
            Fuworx : Your Smart <br />
            Partner for Business <br />
            Success
          </h1>
          <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 md:px-7 py-2.5 md:py-3 text-sm md:text-base rounded-lg shadow-lg">
            Contact us
          </button>
        </div>
      </section>

      <style jsx>{`
        .vision-clip {
          clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);
        }

        .mission-clip {
          clip-path: polygon(100% 0, 100% 100%, 0 50%, 0 0);
        }

        .divider-clip {
          clip-path: polygon(0 50%, 100% 0, 100% 50%, 0 100%);
        }

        @media (max-width: 768px) {
          .vision-clip {
            clip-path: polygon(0 0, 100% 0, 100% 45%, 0 55%);
          }

          .mission-clip {
            clip-path: polygon(0 45%, 100% 55%, 100% 100%, 0 100%);
          }

          .divider-clip {
            clip-path: polygon(0 45%, 100% 45%, 100% 55%, 0 55%);
          }
        }
      `}</style>
    </main>
  );
}
