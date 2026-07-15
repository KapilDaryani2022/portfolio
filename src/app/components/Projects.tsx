"use client";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";

import ProjectImage from "../../../public/images/octet-journal.webp";
import ProjectImage2 from "../../../public/images/worklab.png";
import ProjectImage3 from "../../../public/images/talktoagent.webp";
import ProjectImage4 from "../../../public/images/ninee.jpg";

type Project = {
  title: string;
  tech: string;
  href: string;
  image: StaticImageData;
  side: "left" | "right";
};

const projects: Project[] = [
  {
    title: "OCTET",
    tech: "Gatsby, GraphQl, ReactJs, SEO",
    href: "https://octet.design/",
    image: ProjectImage,
    side: "right",
  },
  {
    title: "WORKLAB",
    tech: "NextJs, Frontend, Animations",
    href: "https://worklab.ae/",
    image: ProjectImage2,
    side: "left",
  },
  {
    title: "TTA",
    tech: "Console, Chatbot, AI, NextJs",
    href: "https://moneyearnings.in/",
    image: ProjectImage3,
    side: "right",
  },
   {
    title: "NINEE",
    tech: "App Development, NextJs, Android, IOS, Chatbot",
    href: "https://www.ninee.ai/",
    image: ProjectImage4,
    side: "left",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>
          Recent <span className="break">Projects</span>
        </h2>

        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`projects-row ${index % 2 !== 0 ? "even" : ""}`}
          >
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.tech}</p>

              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="main-btn"
              >
                View project
              </a>
            </div>

            <ProjectFoldImage
              href={project.href}
              src={project.image}
              alt={project.title}
              side={project.side}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

type ProjectFoldImageProps = {
  href: string;
  src: StaticImageData;
  alt: string;
  side: "left" | "right";
};

function ProjectFoldImage({ href, src, alt, side }: ProjectFoldImageProps) {
  const imageRef = useRef<HTMLAnchorElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    let frameId: number | null = null;

    const updateProgress = () => {
      const element = imageRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const animationStart = windowHeight * 1.3;
      const animationEnd = windowHeight * 0.05;

      const rawProgress =
        (animationStart - rect.top) / (animationStart - animationEnd);

      const clampedProgress = Math.min(Math.max(rawProgress, 0), 1);

      setProgress(clampedProgress);
    };

    const handleScroll = () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }

      frameId = requestAnimationFrame(updateProgress);
    };

    updateProgress();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const easedProgress = easeOutQuart(progress);

  const startAngle = side === "left" ? -80 : 80;

  // Clock-like falling motion: 90deg/-90deg to 0deg
  const rotateZ = startAngle - startAngle * easedProgress;

  // Slight arc, so it does not look robotic
  const translateX =
    side === "left"
      ? -45 + easedProgress * 45
      : 45 - easedProgress * 45;

  const translateY = -70 + easedProgress * 70;

  return (
    <a
      ref={imageRef}
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`project-fold-link project-fold-${side}`}
      style={isMobile ?
        {
          "--project-rotate-z": `${rotateZ}deg`,
          "--project-translate-x": `${translateX}px`,
          "--project-translate-y": `${translateY}px`,
          "--project-opacity": `${0.18 + easedProgress * 0.82}`,
          "--project-shadow-opacity": `${0.1 + easedProgress * 0.45}`,
        } as React.CSSProperties :
        {
          "--project-rotate-z": `${rotateZ}deg`,
          "--project-translate-x": `${translateX}px`,
          "--project-translate-y": `${translateY}px`,
          "--project-opacity": `${0.18 + easedProgress * 0.82}`,
          "--project-shadow-opacity": `${0.1 + easedProgress * 0.45}`,
        } as React.CSSProperties
      }
    >
      <div className="project-fold-stage">
        <div className="project-fold-paper">
          <Image className="project-image" src={src} alt={alt} />
        </div>
      </div>
    </a>
  );
}

function easeOutQuart(value: number) {
  return 1 - Math.pow(1 - value, 4);
}