"use client";
import { useState, useRef, useEffect } from "react";
import {
  FaReact,
  FaMobile,
  FaDatabase,
  FaServer,
  FaPalette,
  FaCloud,
  FaTerminal,
  FaBox,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiAmazonwebservices,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiGit,
  SiGithub,
  SiPostman,
  SiNpm,
  SiYarn,
  SiApple,
} from "react-icons/si";
import { VscAzure, VscVscode } from "react-icons/vsc";
import Shuffle from "@/components/Shuffle";

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: FaReact,
    description: "Modern web interfaces and user experiences",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: FaServer,
    description: "Server-side logic and API development",
    technologies: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: SiNodedotjs },
    ],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    icon: FaMobile,
    description: "Cross-platform and native mobile applications",
    technologies: [
      { name: "React Native", icon: FaReact },
      { name: "iOS", icon: SiApple },
      { name: "Android", icon: FaMobile },
    ],
  },
  {
    id: "database",
    title: "Database & Storage",
    icon: FaDatabase,
    description: "Data management and storage solutions",
    technologies: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: FaCloud,
    description: "Infrastructure, deployment, and scalability",
    technologies: [
      { name: "AWS", icon: SiAmazonwebservices },
      { name: "Azure", icon: VscAzure },
    ],
  },
  {
    id: "design",
    title: "UI/UX Design",
    icon: FaPalette,
    description: "Design systems and user experience",
    technologies: [
      { name: "Figma", icon: SiFigma },
      { name: "Photoshop", icon: SiAdobephotoshop },
      { name: "Illustrator", icon: SiAdobeillustrator },
    ],
  },
  {
    id: "tools",
    title: "Development Tools",
    icon: FaTerminal,
    description: "Development environment and productivity tools",
    technologies: [
      { name: "VS Code", icon: VscVscode },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
    ],
  },
  {
    id: "package",
    title: "Package Managers",
    icon: FaBox,
    description: "Dependency management systems",
    technologies: [
      { name: "npm", icon: SiNpm },
      { name: "Yarn", icon: SiYarn },
    ],
  },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const activeCategoryData = skillCategories.find(
    (cat) => cat.id === activeCategory
  );

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setActiveCategory((current) => {
          const currentIndex = skillCategories.findIndex(
            (cat) => cat.id === current
          );
          const nextIndex = (currentIndex + 1) % skillCategories.length;
          return skillCategories[nextIndex].id;
        });
      }, 3000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    setIsAutoPlaying(false);

    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section
      id="skills"
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Technologies & Tools
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
          A comprehensive showcase of technologies and tools I use across
          software development
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 ">
        {/* Flowing Menu - Left Side */}
        <div className="lg:w-2/5 ">
          <div
            ref={containerRef}
            className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide"
          >
            {skillCategories.map((category) => {
              const IconComponent = category.icon;
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-500 ease-out flex-shrink-0 lg:flex-shrink
                    ${
                      isActive
                        ? "border-primary/30 bg-primary/10 scale-105"
                        : "border-border/50 bg-card/50 hover:bg-accent/50 hover:border-primary/20"
                    }
                  `}
                >
                  <div
                    className={`
                    p-2 rounded-lg transition-colors duration-500
                    ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary/80 text-secondary-foreground"
                    }
                  `}
                  >
                    <IconComponent size={20} />
                  </div>
                  <div className="text-left">
                    <h3
                      className={`
                      font-semibold transition-colors duration-500
                      ${isActive ? "text-primary" : "text-card-foreground"}
                    `}
                    >
                      {category.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {category.technologies.length} technologies
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area - Right Side */}
        <div className="lg:w-3/5">
          <div className="p-6 border-2 border-dashed bg-card/50 backdrop-blur-sm ">
            {activeCategoryData && (
              <div className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-2 ">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <activeCategoryData.icon
                      size={24}
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground">
                      {activeCategoryData.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {activeCategoryData.description}
                    </p>
                  </div>
                </div>

                {/* Technology Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 ">
                  {activeCategoryData.technologies.map((tech) => {
                    const TechIconComponent = tech.icon;
                    return (
                      <div
                        key={tech.name}
                        className="flex flex-col items-center p-3 rounded-lg border border-border/50 bg-background/50 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 mb-2 flex items-center justify-center rounded-lg bg-secondary/80 text-secondary-foreground group-hover:text-primary transition-colors duration-300">
                          <TechIconComponent size={24} />
                        </div>
                        <span className="text-xs font-medium text-center leading-tight text-card-foreground">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Auto-play Indicator */}
          <div className="flex justify-center mt-4">
            <div className="flex gap-1">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`
                    w-[5px] h-[5px] rounded-full transition-all duration-300
                    ${
                      activeCategory === category.id
                        ? "bg-primary scale-125"
                        : "bg-border hover:bg-primary/50"
                    }
                  `}
                />
              ))}
            </div>
          </div>
          <div className="relative py-15 hidden lg:block border-2 border-dashed my-10">
            <Shuffle
              text="Opent to work!"
              shuffleDirection="right"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover={true}
              respectReducedMotion={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
