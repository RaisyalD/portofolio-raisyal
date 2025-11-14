"use client"
import { useState, useEffect } from "react"
import { FloatingNav } from "@/components/ui/floating-navbar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Instagram, Mail, ExternalLink } from "lucide-react"

// Import custom Reactbits components
import ProfileCard from "@/components/ProfileCard"
import RotatingText from "@/components/RotatingText"
import SplitText from "@/components/SplitText"
import BlurText from "@/components/BlurText"
import AnimatedContent from "@/components/AnimatedContent"
import Aurora from "@/components/Aurora"
import GradientText from "@/components/GradientText"
import CircularText from "@/components/CircularText"
import Orb from "@/components/Orb"

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Tools", link: "#tools" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
]

// Update the tech stack data to include more technologies and Supabase
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

// Update the projects data with the requested projects and actual links
const projects = [
  {
    title: "7 Kids Story",
    description: "Interactive website for children's stories built with HTML, CSS, and JavaScript",
    image: "/images/7kids-story.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Github"],
    link: "https://rezarth.github.io/promnet_uas/",
  },
  {
    title: "Normaal Movement School Website",
    description: "Educational platform for a movement school with responsive design and interactive elements",
    image: "/images/nms-web.png",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    link: "https://nms-web-v1.vercel.app/",
  },
  {
    title: "Bratvacode Website",
    description: "Complete savior website with modern UI/UX principles",
    image: "/images/bratvacode.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Reactbits"],
    link: "https://bratvacodeweb.vercel.app/",
    status: "Temporarily Pending"
  },
  {
    title: "SINTAMU Fullstack Project",
    description: "Full-stack guest management system developed during internship at PT. Pupuk Kujang",
    image: "/images/simtamu.png",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Node.js", "Express", "Firebase"],
    link: "https://simtamu-pupuk-kujang.vercel.app/",
  },
  {
    title: "Rotasi PSTI Website",
    description: "Official website for ROTASI PSTI UPI with dynamic content and registration.",
    image: "/images/rotasi.svg",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Supabase", "Vercel"],
    link: "https://www.rotasipsti.id/",
  },
  {
    title: "UI/UX TEMU to KETEMU App Redesign",
    description: "UI/UX redesign project transforming the TEMU app into KETEMU with improved user experience",
    image: "/images/ketemu.png",
    tags: ["Figma", "UI/UX", "Prototyping"],
    link: "https://www.figma.com/proto/Jxu92NywcphhWlO6LautfW/IMK-PROJECT-%22TEMU%22?node-id=196-2476&p=f&t=tz7YEmCyk4Ohf2K7-0&scaling=min-zoom&content-scaling=fixed&page-id=1%3A3&starting-point-node-id=196%3A2476",
  },
]

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        // Scroll down
        setShowNavbar(false)
      } else {
        // Scroll up
        setShowNavbar(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)

    // Add smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const id = target.getAttribute("href")?.substring(1)
        const element = document.getElementById(id || "")
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          })
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [lastScrollY])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#19222D] scroll-smooth">
      {/* Aurora Background */}
      <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full">
        <Aurora colorStops={["#0A1172", "#50C878", "#008FFF"]} blend={0.5} amplitude={1.0} speed={0.5} />
      </div>

      {/* Floating Navbar */}
      <FloatingNav
        navItems={navItems}
        className={`z-50 transition-all duration-300 ${
          showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
        }`}
      />

      {/* Hero Section */}
      <Section id="home" className="z-10 pt-20 min-h-screen flex items-center">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative order-2 lg:order-1">
              <ProfileCard />
              <CircularText
                text="RAISYAL*DIMAS*PRAYOGA*"
                onHover="speedUp"
                spinDuration={20}
                className="absolute top-36 right-28"
              />
            </div>
            <div className="flex items-center order-1 lg:order-2">
              <div className="flex flex-col gap-6">
                <AnimatedContent
                  distance={150}
                  direction="horizontal"
                  reverse={false}
                  config={{ tension: 80, friction: 20 }}
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                >
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl text-white font-bold">I'm Ready For</h1>
                    <RotatingText
                      texts={["Web Development", "Web Design", "App Mobile", "UI/UX Design"]}
                      mainClassName="px-2 sm:px-2 md:px-3 bg-[#C6F10E] text-black overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
                      staggerFrom={"last"}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                      transition={{ type: "spring", damping: 30, stiffness: 400 }}
                      rotationInterval={3000} // Increased from 2000 to 3000 for slower rotation
                    />
                  </div>
                </AnimatedContent>
                <div className="flex flex-col items-start">
                  <SplitText
                    text="I'm Raisyal D"
                    className="text-3xl font-semibold text-start text-white"
                    delay={50}
                    animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
                    animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                    threshold={0.2}
                    rootMargin="-50px"
                  />
                  <SplitText
                    text="Front-End Developer"
                    className="text-2xl font-semibold text-start text-[#C6F10E]"
                    delay={100}
                    animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
                    animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                    threshold={0.2}
                    rootMargin="-50px"
                  />
                </div>
                <BlurText
                  text="Hi! I'm Raisyal, an Information Systems and Technology Education student at Universitas Pendidikan Indonesia. 
                  Passionate about Human Resource, Front-End Developer, and UI/UX Design, I have worked on various projects, I strive to create impactful digital experiences. 
                  Explore my projects and achievements, and feel free to connect with me!"
                  delay={150} // Increased from 75 to 150
                  animateBy="words"
                  direction="top"
                  className="text-xl mb-8 text-white"
                />
                <div className="flex items-center">
                  <Button
                    asChild
                    variant="outline"
                    className="px-8 py-6 rounded-2xl border-2 border-[#C6F10E] hover:bg-[#C6F10E]/20 transition-all duration-300 shadow-lg shadow-[#C6F10E]/20"
                  >
                    <a
                      href="https://drive.google.com/file/d/1Skv3x0Bl_m_cVerVSl8ZFOkicreRZxlh/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      <GradientText
                        colors={["#40ffaa", "#C6F10E", "#40ffaa", "#C6F10E", "#40ffaa"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="text-lg font-bold"
                      >
                        Download CV
                      </GradientText>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* About Me Section */}
      <Section id="about" className="relative z-10 py-20">
        <Container>
          <Card className="bg-black/30 backdrop-blur-md border-neutral-800 rounded-2xl shadow-xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
                  <BlurText
                    text="I'm a passionate Front-End Developer with a strong foundation in modern web technologies. Currently pursuing my degree in Information Systems and Technology Education, I combine technical expertise with creative problem-solving to build engaging digital experiences."
                    delay={150} // Increased from 75 to 150
                    animateBy="words"
                    direction="top"
                    className="text-lg text-neutral-300 mb-4"
                  />
                  <BlurText
                    text="My journey in tech has equipped me with skills in React, Next.js, TypeScript, and UI/UX design. I'm constantly exploring new technologies and methodologies to enhance my development workflow."
                    delay={200} // Increased from 100 to 200
                    animateBy="words"
                    direction="top"
                    className="text-lg text-neutral-300"
                  />
                </div>
                <div className="flex justify-center">
                  <Avatar className="w-64 h-64 rounded-full border-4 border-[#C6F10E] shadow-lg">
                    <img src="/images/profile2.jpeg" alt="Raisyal D" className="object-cover" />
                  </Avatar>
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>

      {/* Tools Section */}
      <Section id="tools" className="relative z-10 py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Tools & Technologies</h2>
            <p className="text-neutral-400 mt-4">Technologies I work with on a daily basis</p>
          </div>

          <div className="relative w-full overflow-hidden py-10">
            {/* First row - scrolling left to right */}
            <div className="flex animate-scroll-left">
              {[...techStack, ...techStack].map((tech, index) => (
                <div key={`tech-1-${index}`} className="flex flex-col items-center mx-8">
                  <Card className="w-20 h-20 flex items-center justify-center bg-black/30 backdrop-blur-md border-neutral-800 rounded-xl hover:border-[#C6F10E] transition-all duration-300">
                    <CardContent className="p-0 flex items-center justify-center h-full w-full">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <img
                          src={tech.icon || `/placeholder.svg?height=48&width=48&text=${tech.name}`}
                          alt={tech.name}
                          className="max-w-full max-h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.src = `/placeholder.svg?height=48&width=48&text=${tech.name}`
                          }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                  <span className="text-neutral-300 text-sm mt-2">{tech.name}</span>
                </div>
              ))}
            </div>

            {/* Second row - scrolling right to left */}
            <div className="flex animate-scroll-right mt-8">
              {[...techStack.reverse(), ...techStack.reverse()].map((tech, index) => (
                <div key={`tech-2-${index}`} className="flex flex-col items-center mx-8">
                  <Card className="w-20 h-20 flex items-center justify-center bg-black/30 backdrop-blur-md border-neutral-800 rounded-xl hover:border-[#C6F10E] transition-all duration-300">
                    <CardContent className="p-0 flex items-center justify-center h-full w-full">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <img
                          src={tech.icon || `/placeholder.svg?height=48&width=48&text=${tech.name}`}
                          alt={tech.name}
                          className="max-w-full max-h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.src = `/placeholder.svg?height=48&width=48&text=${tech.name}`
                          }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                  <span className="text-neutral-300 text-sm mt-2">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="relative z-10 py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Projects</h2>
            <p className="text-neutral-400 mt-4">Some of my recent work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-black/30 backdrop-blur-md border-neutral-800 rounded-2xl shadow-xl overflow-hidden hover:border-[#C6F10E] transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg?height=192&width=384"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg?height=192&width=384"
                    }}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#C6F10E] transition-colors"
                    >
                      {project.title}
                    </a>
                    {project.status && <Badge className="ml-2 bg-yellow-600 text-white">{project.status}</Badge>}
                  </CardTitle>
                  <CardDescription className="text-neutral-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="bg-black/50 text-[#C6F10E] border-[#C6F10E]/50"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm" className="rounded-xl">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> View Project
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="relative z-10 py-20">
        <Container>
          <div className="relative">
            {/* Orb Background */}
            <div className="absolute inset-0 -z-10">
              <Orb hoverIntensity={0.5} rotateOnHover={true} hue={0} forceHoverState={false} />
            </div>

            <Card className="bg-black/30 backdrop-blur-md border-neutral-800 rounded-2xl shadow-xl">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
                    <p className="text-neutral-300 mb-8">
                      I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                      I'll try my best to get back to you!
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-[#C6F10E]" />
                        <a
                          href="mailto:radipprayoga2004@gmail.com"
                          className="text-neutral-300 hover:text-white transition-colors"
                        >
                          radipprayoga2004@gmail.com
                        </a>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Linkedin className="h-5 w-5 text-[#C6F10E]" />
                        <a
                          href="https://www.linkedin.com/in/raisyal-d-b40355297/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-300 hover:text-white transition-colors"
                        >
                          linkedin.com/in/raisyal-d-b40355297
                        </a>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Github className="h-5 w-5 text-[#C6F10E]" />
                        <a
                          href="https://github.com/RaisyalD"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-300 hover:text-white transition-colors"
                        >
                          github.com/RaisyalD
                        </a>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Instagram className="h-5 w-5 text-[#C6F10E]" />
                        <a
                          href="https://www.instagram.com/raisyal.d"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-300 hover:text-white transition-colors"
                        >
                          @raisyal.d
                        </a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
                    <form action="https://formsubmit.co/radipprayoga2004@gmail.com" method="POST" className="space-y-6">
                      <input type="hidden" name="_captcha" value="false" />
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full p-3 rounded-xl bg-neutral-800/80 text-white border-neutral-700"
                      />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="w-full p-3 rounded-xl bg-neutral-800/80 text-white border-neutral-700"
                      />
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        required
                        className="w-full p-3 rounded-xl bg-neutral-800/80 text-white border-neutral-700"
                      />
                      <Button
                        type="submit"
                        className="px-6 py-3 bg-[#C6F10E] text-black font-semibold rounded-xl hover:bg-[#C6F10E]/90 transition"
                      >
                        Send Message
                      </Button>
                    </form>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="relative z-10 py-8 bg-black/50 backdrop-blur-md border-t border-neutral-800">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-neutral-400 text-sm">
                © {new Date().getFullYear()} <span className="font-semibold text-white">Raisyal D</span>. All rights
                reserved.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/in/raisyal-d-b40355297/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-neutral-400 hover:text-[#C6F10E] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/RaisyalD"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-neutral-400 hover:text-[#C6F10E] transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/raisyal.d"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-neutral-400 hover:text-[#C6F10E] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  )
}
