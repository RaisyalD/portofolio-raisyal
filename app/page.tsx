"use client"

import { useEffect, useRef, useCallback } from "react"
import { Github, Linkedin, Instagram, Mail, ExternalLink, ArrowDown } from "lucide-react"
import Navbar from "@/components/Navbar"

const techStack = [
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "Firebase", icon: "/icons/firebase.svg" },
  { name: "Supabase", icon: "/icons/supabase.svg" },
  { name: "Vercel", icon: "/icons/vercel.svg" },
  { name: "Figma", icon: "/icons/figma.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "HTML5", icon: "/icons/html5.svg" },
  { name: "CSS3", icon: "/icons/css3.svg" },
  { name: "Git", icon: "/icons/git.svg" },
]

const projects = [
  {
    title: "NURRA Chatbot",
    description: "Islamic AI Assistant powered by OpenAI API for intelligent Islamic knowledge conversations",
    image: "/images/nurra.svg",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "OpenAI API"],
    link: "https://nurra-chatbot.vercel.app/",
  },
  {
    title: "Catalog Product Procurement",
    description: "Product catalog management system with spreadsheet integration for procurement workflows",
    image: "/images/catalog-product.svg",
    tags: ["React", "Tailwind CSS", "Spreadsheets API"],
    link: "https://catalog-product-procurement.vercel.app/",
  },
  {
    title: "Rotasi PSTI Website",
    description: "Official website for ROTASI PSTI UPI with dynamic content and registration.",
    image: "/images/rotasi.svg",
    tags: ["Next.js", "React", "TypeScript", "Supabase", "Vercel"],
    link: "https://www.rotasipsti.id/",
  },
  {
    title: "SINTAMU Fullstack Project",
    description: "Full-stack guest management system developed during internship at PT. Pupuk Kujang",
    image: "/images/simtamu.png",
    tags: ["Next.js", "React", "TypeScript", "Node.js", "Express", "Firebase"],
    link: "https://simtamu-pupuk-kujang.vercel.app/",
  },
  {
    title: "Normaal Movement School Website",
    description: "Educational platform for a movement school with responsive design and interactive elements",
    image: "/images/nms-web.png",
    tags: ["Next.js", "React", "Tailwind CSS"],
    link: "https://nms-web-v1.vercel.app/",
  },
  {
    title: "Bratvacode Website",
    description: "Complete savior website with modern UI/UX principles",
    image: "/images/bratvacode.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://bratvacodeweb.vercel.app/",
    status: "Temporarily Pending",
  },
  {
    title: "My Telkomsel App Redesign",
    description: "UI/UX redesign of My Telkomsel mobile app with improved user flow and modern interface",
    image: "/images/telkomsel-redesign.svg",
    tags: ["Figma", "UI/UX", "Prototyping"],
    link: "https://www.figma.com/proto/XPjQUxIagxRbEU5Cx5zMnx/prototype-kelompok-5?node-id=133-1399&p=f&t=y9pfN2cXA53byTBQ-1&scaling=min-zoom&content-scaling=fixed&page-id=133%3A1327&starting-point-node-id=133%3A1399&show-proto-sidebar=1",
  },
  {
    title: "7 Kids Story",
    description: "Interactive website for children's stories built with HTML, CSS, and JavaScript",
    image: "/images/7kids-story.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Laravel", "PHP"],
    link: "https://rezarth.github.io/promnet_uas/",
  },
  {
    title: "KETEMU App Redesign",
    description: "UI/UX redesign project transforming the TEMU app into KETEMU with improved user experience",
    image: "/images/ketemu.png",
    tags: ["Figma", "UI/UX", "Prototyping"],
    link: "https://www.figma.com/proto/Jxu92NywcphhWlO6LautfW/IMK-PROJECT-%22TEMU%22?node-id=196-2476&p=f&t=tz7YEmCyk4Ohf2K7-0&scaling=min-zoom&content-scaling=fixed&page-id=1%3A3&starting-point-node-id=196%3A2476",
  },
]

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    )

    const elements = el.querySelectorAll(".fade-in, .stagger-children")
    elements.forEach((child) => observer.observe(child))

    return () => observer.disconnect()
  }, [])

  return ref
}

function LazyImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const imgRef = useRef<HTMLImageElement>(null)

  const handleLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.classList.add("loaded")
  }, [])

  useEffect(() => {
    if (imgRef.current?.complete) {
      imgRef.current.classList.add("loaded")
    }
  }, [])

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      loading="lazy"
      onLoad={handleLoad}
      className={`lazy-fade ${className ?? ""}`}
    />
  )
}

export default function Home() {
  const scrollRef = useScrollReveal()

  return (
    <div ref={scrollRef} className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="fade-in">
            <div className="w-28 h-28 mx-auto mb-8 rounded-full overflow-hidden border-[3px] border-[hsl(var(--accent))] shadow-lg">
              <LazyImage
                src="/images/profile1.jpeg"
                alt="Raisyal D"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="fade-in" style={{ transitionDelay: "150ms" }}>
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
              Fullstack Developer · Frontend · UI/UX Designer
            </p>
          </div>

          <div className="fade-in" style={{ transitionDelay: "300ms" }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Hi, I&apos;m{" "}
              <span className="text-[hsl(var(--accent))]">Raisyal D</span>
            </h1>
          </div>

          <div className="fade-in" style={{ transitionDelay: "450ms" }}>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              Fullstack Developer &amp; UI/UX Designer with 2+ years of experience in the IT industry.
              Founder of NURRA Chatbot. Contributed to Voxpol Center &amp; Research and PT. Pupuk Kujang.
              Bachelor of Education from Pendidikan Sistem dan Teknologi Informasi, Universitas Pendidikan Indonesia.
            </p>
          </div>

          <div className="fade-in flex items-center justify-center gap-4" style={{ transitionDelay: "600ms" }}>
            <a
              href="https://drive.google.com/file/d/1Skv3x0Bl_m_cVerVSl8ZFOkicreRZxlh/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] font-semibold text-sm hover:opacity-90 transition-all duration-300 shadow-md"
            >
              Download CV
            </a>
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 rounded-full border border-border text-sm font-medium hover:bg-secondary transition-all duration-300"
            >
              View Projects
            </a>
          </div>

          <div className="fade-in mt-16" style={{ transitionDelay: "750ms" }}>
            <a href="#about" className="inline-block animate-bounce text-muted-foreground hover:text-foreground transition-colors">
              <ArrowDown className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in">
            <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-2">About</h2>
            <h3 className="text-3xl font-bold mb-8">A bit about me</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-2 space-y-4">
              <div className="fade-in">
                <p className="text-muted-foreground leading-relaxed">
                  I&apos;m a Fullstack Developer, Frontend specialist, and UI/UX Designer with over 2 years of
                  hands-on experience in the IT industry since late 2024. I hold a Bachelor of Education degree
                  from the Pendidikan Sistem dan Teknologi Informasi program at Universitas Pendidikan Indonesia.
                </p>
              </div>
              <div className="fade-in" style={{ transitionDelay: "100ms" }}>
                <p className="text-muted-foreground leading-relaxed">
                  I&apos;ve had the privilege of contributing to <span className="text-foreground font-medium">Voxpol Center &amp; Research</span> and{" "}
                  <span className="text-foreground font-medium">PT. Pupuk Kujang</span>, building production-ready
                  applications. I&apos;m also the founder of <span className="text-foreground font-medium">NURRA Chatbot</span>,
                  an AI-powered conversational platform. My tech stack spans React, Next.js, TypeScript, Node.js, and
                  modern design tools like Figma.
                </p>
              </div>
              <div className="fade-in flex gap-4 pt-4" style={{ transitionDelay: "200ms" }}>
                <a href="https://github.com/RaisyalD" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))] transition-all duration-300">
                  <Github className="h-4 w-4" />
                </a>
                <a href="https://www.linkedin.com/in/raisyal-d-b40355297/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))] transition-all duration-300">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="https://www.instagram.com/raisyal.d" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))] transition-all duration-300">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="mailto:radipprayoga2004@gmail.com" aria-label="Email"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))] transition-all duration-300">
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="fade-in flex justify-center md:justify-end" style={{ transitionDelay: "150ms" }}>
              <div className="w-48 h-48 rounded-2xl overflow-hidden border-2 border-border shadow-md">
                <LazyImage
                  src="/images/profile2.jpeg"
                  alt="Raisyal D"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-24 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in text-center mb-12">
            <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-2">Tools</h2>
            <h3 className="text-3xl font-bold">Technologies I use</h3>
          </div>

          <div className="fade-in overflow-hidden">
            <div className="flex animate-scroll-left w-max">
              {[...techStack, ...techStack].map((tech, i) => (
                <div key={i} className="flex flex-col items-center mx-6 shrink-0">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-card border border-border shadow-sm hover:border-[hsl(var(--accent))] transition-colors duration-300 p-2">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      width={36}
                      height={36}
                      className="w-9 h-9 object-contain"
                    />
                  </div>
                  <span className="text-xs text-muted-foreground mt-2">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="fade-in text-center mb-14">
            <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-2">Projects</h2>
            <h3 className="text-3xl font-bold">Selected work</h3>
          </div>

          <div className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl bg-card border border-border overflow-hidden shadow-sm hover:shadow-lg hover:border-[hsl(var(--accent))]/50 transition-all duration-300"
              >
                <div className="h-44 overflow-hidden bg-secondary">
                  <LazyImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold group-hover:text-[hsl(var(--accent))] transition-colors duration-300">
                      {project.title}
                    </h4>
                    {project.status && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 font-medium whitespace-nowrap">
                        {project.status}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-[11px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 mt-4 text-xs text-muted-foreground group-hover:text-[hsl(var(--accent))] transition-colors duration-300">
                    <ExternalLink className="h-3 w-3" />
                    View Project
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-secondary/30">
        <div className="max-w-2xl mx-auto">
          <div className="fade-in text-center mb-12">
            <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-2">Contact</h2>
            <h3 className="text-3xl font-bold mb-4">Let&apos;s work together</h3>
            <p className="text-muted-foreground">
              I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi,
              feel free to reach out!
            </p>
          </div>

          <div className="fade-in">
            <form
              action="https://formsubmit.co/radipprayoga2004@gmail.com"
              method="POST"
              className="space-y-4"
            >
              <input type="hidden" name="_captcha" value="false" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]/50 focus:border-[hsl(var(--accent))] transition-all duration-300"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]/50 focus:border-[hsl(var(--accent))] transition-all duration-300"
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]/50 focus:border-[hsl(var(--accent))] transition-all duration-300 resize-none"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] font-semibold text-sm hover:opacity-90 transition-all duration-300 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="fade-in flex justify-center gap-4 mt-12" style={{ transitionDelay: "100ms" }}>
            <a href="mailto:radipprayoga2004@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2">
              <Mail className="h-4 w-4" /> radipprayoga2004@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} <span className="font-medium text-foreground">Raisyal D</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a href="https://github.com/RaisyalD" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300">
              <Github className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/in/raisyal-d-b40355297/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="https://www.instagram.com/raisyal.d" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
