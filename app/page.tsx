"use client";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden text-white bg-[radial-gradient(circle_at_top_left,#ea580c40,transparent_25%),radial-gradient(circle_at_bottom_right,#f9731640,transparent_30%),linear-gradient(to_bottom_right,#050505,#0f0f0f,#1a0d05)]">

      {/* Scroll Progress */}
      <div className="fixed top-0 left-0 z-[999] h-1 w-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500" />

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-orange-500/10 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-500 bg-orange-500/10 text-sm font-bold text-orange-500">
              TK
            </div>

            <span className="hidden text-sm text-gray-400 md:block">
              Tejaswini Kandulapati
            </span>
          </div>

          <div className="hidden items-center gap-3 md:flex">

            <a href="#about" className="rounded-full border border-white/10 px-4 py-2 hover:border-orange-500 hover:bg-orange-500/10">
              About
            </a>

            <a href="#skills" className="rounded-full border border-white/10 px-4 py-2 hover:border-orange-500 hover:bg-orange-500/10">
              Skills
            </a>

            <a href="#projects" className="rounded-full border border-white/10 px-4 py-2 hover:border-orange-500 hover:bg-orange-500/10">
              Projects
            </a>

            <a href="#contact" className="rounded-full border border-white/10 px-4 py-2 hover:border-orange-500 hover:bg-orange-500/10">
              Contact
            </a>

          </div>

        </div>
      </nav>

      {/* Hero */}
      <section
        id="top"
        className="container mx-auto flex min-h-screen flex-col items-center justify-center gap-12 px-6 md:flex-row"
      >

        <div className="max-w-xl">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
            Technology • Innovation • Problem Solving
          </p>

          <h1 className="bg-gradient-to-r from-white via-orange-200 to-orange-500 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
            TEJASWINI
          </h1>

          <h2 className="text-4xl font-bold text-orange-500 md:text-6xl">
            KANDULAPATI
          </h2>

          <p className="mt-6 text-3xl font-semibold text-orange-400">
            Turning Ideas Into
            <br />
            Meaningful Digital Experiences
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            MCA graduate passionate about Software Development,
            Artificial Intelligence, Data Analytics and creating
            impactful digital experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="rounded-full bg-orange-500 px-6 py-3 font-medium hover:bg-orange-600"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="rounded-full border border-white px-6 py-3 font-medium hover:bg-white hover:text-black"
            >
              Download Resume
            </a>

          </div>

          <div className="mt-10 animate-bounce text-orange-400">
            ↓ Scroll To Explore
          </div>

        </div>

        <div className="relative">

          <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-[120px]" />

          <video
            autoPlay
            loop
            muted
            controls
            playsInline
            className="relative w-[420px] rounded-3xl border border-orange-500/20 shadow-[0_0_60px_rgba(249,115,22,0.25)]"
          >
            <source src="/intro-video.mp4" type="video/mp4" />
          </video>

        </div>

      </section>
            {/* ABOUT */}
      <section id="about" className="px-8 py-24">

        <div className="mb-12 text-center">

          <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
            About
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            About Me
          </h2>

        </div>

        <div className="mx-auto max-w-5xl">

          <div className="rounded-3xl border border-orange-500/20 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:border-orange-400 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]">

            <p className="text-lg leading-8 text-gray-300">

              I am
              <span className="font-semibold text-orange-400">
                {" "}Tejaswini Kandulapati
              </span>
              , an MCA graduate passionate about Software Development,
              Web Technologies, Artificial Intelligence and Data Analytics.

              I enjoy building modern applications, solving real-world
              challenges and continuously learning emerging technologies.

              My goal is to create impactful digital solutions that combine
              innovation, creativity and technology.

            </p>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="px-8 py-20">

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-4">

          <div className="rounded-3xl border border-orange-500/20 bg-white/5 p-6 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-orange-400">

            <h3 className="text-4xl font-bold text-orange-500">
              4+
            </h3>

            <p className="mt-2 text-gray-300">
              Projects
            </p>

          </div>

          <div className="rounded-3xl border border-orange-500/20 bg-white/5 p-6 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-orange-400">

            <h3 className="text-4xl font-bold text-orange-500">
              6+
            </h3>

            <p className="mt-2 text-gray-300">
              Certifications
            </p>

          </div>

          <div className="rounded-3xl border border-orange-500/20 bg-white/5 p-6 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-orange-400">

            <h3 className="text-4xl font-bold text-orange-500">
              MCA
            </h3>

            <p className="mt-2 text-gray-300">
              Graduate
            </p>

          </div>

          <div className="rounded-3xl border border-orange-500/20 bg-white/5 p-6 text-center backdrop-blur-md transition-all duration-300
                      hover:-translate-y-2 hover:border-orange-400">

            <h3 className="text-4xl font-bold text-orange-500">
              3+
            </h3>

            <p className="mt-2 text-gray-300">
              Domains
            </p>

          </div>

        </div>

      </section>

      {/* SKILLS */}
      <section id="skills" className="px-8 py-24">

        <div className="mb-12 text-center">

          <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
            Skills
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Skills & Technologies
          </h2>

        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">

          {/* Software Development */}
          <div className="rounded-3xl border border-orange-500/20 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-orange-400">

            <h3 className="mb-4 text-2xl font-bold text-orange-400">
              Software Development
            </h3>

            <div className="flex flex-wrap gap-3">

              {[
                "Java",
                "Python",
                "SQL",
                "Git",
                "GitHub"
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-orange-500/20 px-4 py-2 transition-all duration-300 hover:bg-orange-500 hover:text-white"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

          {/* Web Development */}
          <div className="rounded-3xl border border-orange-500/20 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-orange-400">

            <h3 className="mb-4 text-2xl font-bold text-orange-400">
              Web Development
            </h3>

            <div className="flex flex-wrap gap-3">

              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React.js",
                "Next.js",
                "Node.js"
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-orange-500/20 px-4 py-2 transition-all duration-300 hover:bg-orange-500 hover:text-white"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

          {/* AI */}
          <div className="rounded-3xl border border-orange-500/20 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-orange-400">

            <h3 className="mb-4 text-2xl font-bold text-orange-400">
              Artificial Intelligence
            </h3>

            <div className="flex flex-wrap gap-3">

              {[
                "Artificial Intelligence",
                "Machine Learning",
                "Deep Learning"
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-orange-500/20 px-4 py-2 transition-all duration-300 hover:bg-orange-500 hover:text-white"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

          {/* Data Analytics */}
          <div className="rounded-3xl border border-orange-500/20 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-orange-400">

            <h3 className="mb-4 text-2xl font-bold text-orange-400">
              Data Analytics
            </h3>

            <div className="flex flex-wrap gap-3">

              {[
                "Power BI",
                "Microsoft Excel",
                "Data Analysis",
                "Data Visualization",
                "AWS Cloud Fundamentals"
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-orange-500/20 px-4 py-2 transition-all duration-300 hover:bg-orange-500 hover:text-white"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

        </div>

      </section>
            {/* PROJECTS */}
      <section id="projects" className="px-8 py-24">

        <div className="mb-12 text-center">

          <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
            Projects
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Project Showcase
          </h2>

        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">

          {[
            {
              title: "VISIONAI",
              desc: "AI-powered career guidance platform helping students discover learning paths and prepare for careers.",
            },
            {
              title: "AI Mock Interview Assistant",
              desc: "Interactive interview preparation platform with intelligent question generation.",
            },
            {
              title: "Zomato Clone",
              desc: "Responsive food delivery platform inspired by Zomato with modern UI design.",
            },
            {
              title: "Smart Aquaculture Management System",
              desc: "Technology-driven aquaculture monitoring and management solution.",
            },
          ].map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-orange-500/20 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-3 hover:border-orange-400 hover:shadow-[0_0_35px_rgba(249,115,22,0.25)]"
            >
              <div className="mb-4 h-1 w-20 rounded-full bg-orange-500" />

              <h3 className="text-2xl font-bold text-orange-400">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-300">
                {project.desc}
              </p>

              <a
                href="https://github.com/Tejaswinikandulapati"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-lg border border-orange-500 px-4 py-2 hover:bg-orange-500"
              >
                View Project
              </a>

            </div>
          ))}

        </div>

      </section>

      {/* EDUCATION */}
      <section id="education" className="px-8 py-24">

        <div className="mb-12 text-center">

          <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
            Education
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Academic Journey
          </h2>

        </div>

        <div className="mx-auto max-w-4xl space-y-8">

          <div className="rounded-3xl border border-orange-500/20 bg-white/5 p-8 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-orange-400">
              Master of Computer Applications (MCA)
            </h3>

            <p className="mt-2 text-gray-300">
              Sir C. R. Reddy PG College
            </p>

            <p className="text-gray-400">
              2024 – 2026
            </p>
          </div>

          <div className="rounded-3xl border border-orange-500/20 bg-white/5 p-8 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-orange-400">
              Bachelor of Computer Applications (BCA)
            </h3>

            <p className="mt-2 text-gray-300">
              Aditya Degree College
            </p>

            <p className="text-gray-400">
              2021 – 2024
            </p>
          </div>

        </div>

      </section>

      {/* CERTIFICATIONS */}
      <section className="px-8 py-24">

        <div className="mb-12 text-center">

          <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
            Certifications
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Certifications & Learning
          </h2>

        </div>

        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">

          {[
            "AWS Cloud Practitioner Essentials",
            "Python Full Stack Developer – ExcelR",
            "Full Stack Web Developer – ST Surveillance",
            "NPTEL Cloud Computing",
            "Cisco C Programming",
            "Deep Learning – HMI Engineering Services",
          ].map((cert) => (
            <div
              key={cert}
              className="rounded-2xl border border-orange-500/20 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:border-orange-400"
            >
              🏆 {cert}
            </div>
          ))}

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="px-8 py-24 text-center">

        <div className="mb-12">

          <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
            Contact
          </span>

          <h2 className="mt-4 text-5xl font-bold text-orange-500">
            Get In Touch
          </h2>

        </div>

        <p className="mb-10 text-gray-300">
          Driven by curiosity, innovation and continuous growth in technology.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="mailto:tejaswini.kandulapati00@gmail.com"
            className="rounded-full border border-orange-500 px-6 py-3 hover:bg-orange-500"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/tejaswini-kandulapati-97a6982a3"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-orange-500 px-6 py-3 hover:bg-orange-500"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Tejaswinikandulapati"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-orange-500 px-6 py-3 hover:bg-orange-500"
          >
            GitHub
          </a>

        </div>

        <a
          href="#top"
          className="mt-10 inline-block rounded-full border border-orange-500 px-6 py-3 transition-all duration-300 hover:bg-orange-500"
        >
          ↑ Return Home
        </a>

      </section>

      <footer className="border-t border-orange-500/10 py-8 text-center text-gray-500">
        Turning Ideas Into Meaningful Digital Experiences.
      </footer>

    </main>
  );
}