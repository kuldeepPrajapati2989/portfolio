import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, Github, Linkedin, Mail, Menu, X, Download,
  ExternalLink, Code2, Server, Database, Smartphone, ChevronUp
} from "lucide-react";
import "./index.css";
import { Phone } from "lucide-react";

const skills = [
  ["React.js", "Frontend", Code2],
  ["JavaScript", "Language", Code2],
  ["Node.js", "Backend", Server],
  ["Express.js", "API", Server],
  ["MongoDB", "Database", Database],
  ["Tailwind CSS", "UI", Smartphone],
  ["HTML5 / CSS3", "Web", Code2],
  ["Git / GitHub", "Version Control", Github],
];

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "A full-stack shopping application with authentication, product management, cart, orders and REST APIs.",
    stack: "React • Node.js • Express • MongoDB",
    live: "#",
    code: "https://github.com/kuldeepPrajapati2989/A2ZCODING",
  },
  {
    title: "Task Management App",
    desc: "Responsive task manager with CRUD operations, protected routes and a clean dashboard experience.",
    stack: "React • Express • MongoDB • JWT",
    live: "#",
    code: "https://github.com/kuldeepPrajapati2989/taskFlow",
  },
  {
    title: "Developer Dashboard",
    desc: "Modern admin dashboard UI with reusable components, responsive layouts and API-driven data.",
    stack: "React • Tailwind CSS • REST API",
    live: "#",
    code: "https://github.com/kuldeepPrajapati2989/A2ZCODING",
  },
];

function App() {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <button onClick={() => go("home")} className="text-xl font-black tracking-tight">
            K<span className="text-cyan-400">.</span>
          </button>

          <div className="hidden gap-8 text-sm font-medium md:flex">
            {["home", "about", "skills", "projects", "contact"].map(x => (
              <button key={x} onClick={() => go(x)} className="capitalize text-slate-300 transition hover:text-cyan-400">
                {x}
              </button>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-white/10 px-5 py-4 md:hidden">
            {["home", "about", "skills", "projects", "contact"].map(x => (
              <button key={x} onClick={() => go(x)} className="block w-full py-3 text-left capitalize text-slate-300">
                {x}
              </button>
            ))}
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pt-24">
          <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_.8fr]">
            <div>
              <p className="mb-4 font-mono text-sm text-cyan-400">HELLO, I'M</p>
              <h1 className="text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
                Kuldeep<span className="text-cyan-400">.</span>
              </h1>
              <h2 className="mt-5 text-2xl font-bold text-slate-300 sm:text-3xl">
                MERN Full-Stack Developer
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                I build responsive, scalable and user-friendly web applications
                using modern JavaScript technologies.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <button onClick={() => go("projects")} className="btn-primary">
                  View Projects <ArrowRight size={18} />
                </button>
                <button onClick={() => go("contact")} className="btn-secondary">
                  Contact Me
                </button>
              </div>
              <div className="mt-8 flex gap-5 text-slate-400">
                <a href="#" aria-label="GitHub" className="icon-link"><Github /></a>
                <a href="#" aria-label="LinkedIn" className="icon-link"><Linkedin /></a>
                <a href="mailto:your-email@example.com" aria-label="Email" className="icon-link"><Mail /></a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-sm">
              <div className="relative rounded-3xl border border-cyan-400/20 bg-white/[0.04] p-2 shadow-2xl shadow-cyan-500/10">
                <div className="rounded-2xl border border-white/10 bg-slate-900 p-8">
                  <div className="mb-8 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                    <span className="h-3 w-3 rounded-full bg-green-400/80" />
                  </div>
                  <pre className="overflow-x-auto font-mono text-sm leading-8 text-slate-300">
                    {`const developer = {
  name: "Kuldeep",
  role: "MERN Developer",
  skills: [
    "React",
    "Node.js",
    "Express",
    "MongoDB"
  ],
  available: true
};`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="ABOUT ME" title="Turning ideas into web applications." />
            <div className="grid gap-8 md:grid-cols-2">
              <div className="card">
                <h3 className="text-2xl font-bold">Who I am</h3>
                <p className="mt-5 leading-8 text-slate-400">
                  I am a BCA graduate and MERN Full-Stack Developer focused on
                  creating practical web applications with clean UI, reliable
                  APIs and maintainable code.
                </p>
                <p className="mt-4 leading-8 text-slate-400">
                  I enjoy solving frontend and backend problems and continuously
                  improving my development skills.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Info label="Qualification" value="BCA" />
                <Info label="Profile" value="MERN Full-Stack Developer" />
                <Info label="Communication" value="Good" />
                <Info label="Location" value="Delhi, India" />
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section bg-white/[0.02]">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="SKILLS" title="My technical toolkit." />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {skills.map(([name, type, Icon]) => (
                <div className="card group" key={name}>
                  <Icon className="text-cyan-400 transition group-hover:scale-110" size={26} />
                  <h3 className="mt-5 font-bold">{name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{type}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="PROJECTS" title="Things I've built." />
            <div className="grid gap-6 lg:grid-cols-3">
              {projects.map((p) => (
                <article className="card flex flex-col" key={p.title}>
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                    <Code2 />
                  </div>
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="mt-4 flex-1 leading-7 text-slate-400">{p.desc}</p>
                  <p className="mt-5 text-sm font-medium text-cyan-400">{p.stack}</p>
                  <div className="mt-6 flex gap-5">
                    <a href={p.code} className="project-link">Code <Github size={15} /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section bg-white/[0.02]">
          <div className="mx-auto max-w-4xl text-center">
            <SectionTitle eyebrow="CONTACT" title="Let's build something together." />
            <p className="mx-auto max-w-2xl text-slate-400">
              I'm open to full-time opportunities and developer roles. Feel free
              to reach out for a project, job opportunity or collaboration.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kuldeepkumar2416@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mx-auto mt-8 inline-flex"
            >
              <Mail size={18} /> Send Email
            </a>
            <div className="mt-8 flex justify-center gap-6 text-slate-400">

              <a
                href="https://github.com/kuldeepPrajapati2989"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/kuldeep-kumar-b39165377/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <Linkedin />
              </a>
              <a
                href="tel:+918287557716"
                className="icon-link"
              >
                <Phone />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Kuldeep. Built with React & Tailwind CSS.
      </footer>

      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 rounded-full border border-white/10 bg-slate-900 p-3 text-slate-300 shadow-xl hover:text-cyan-400"
        aria-label="Back to top">
        <ChevronUp size={18} />
      </button>
    </div>
  );
}

function SectionTitle({ eyebrow, title }) {
  return (
    <div className="mb-12">
      <p className="font-mono text-sm text-cyan-400">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black sm:text-4xl">{title}</h2>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div className="card">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 font-bold text-slate-200">{value}</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);