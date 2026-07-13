import Image, { StaticImageData } from "next/image";
import WebBuild from "./WebBuild";

import NextImage from "../../../public/images/next.svg";
import ReactImage from "../../../public/images/react.svg";
import WordpressImage from "../../../public/images/wordpress.svg";
import VueImage from "../../../public/images/vue.svg";
import ReduxImage from "../../../public/images/redux.svg";
import ShopifyImage from "../../../public/images/shopify.svg";
import JsImage from "../../../public/images/javascript.svg";
import JqueryImage from "../../../public/images/jquery.svg";
import TailwindImage from "../../../public/images/tailwind.svg";
import CssImage from "../../../public/images/css.svg";
import TsImage from "../../../public/images/ts.svg";

type Skill = {
  title: string;
  image: StaticImageData;
};

const skills: Skill[] = [
  {
    title: "Next.js",
    image: NextImage,
  },
  {
    title: "React.js",
    image: ReactImage,
  },
  {
    title: "WordPress",
    image: WordpressImage,
  },
  {
    title: "Vue",
    image: VueImage,
  },
  {
    title: "Redux",
    image: ReduxImage,
  },
  {
    title: "Shopify",
    image: ShopifyImage,
  },
  {
    title: "JavaScript",
    image: JsImage,
  },
  {
    title: "jQuery",
    image: JqueryImage,
  },
  {
    title: "Tailwind CSS",
    image: TailwindImage,
  },
  {
    title: "CSS",
    image: CssImage,
  },
  {
    title: "TypeScript",
    image: TsImage,
  },
];

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className={`card`}>
      <div className={`iconWrap`}>
        <Image
          src={skill.image}
          alt={skill.title}
          fill
          className={`icon`}
          sizes="48px"
        />
      </div>
      <span className={`label`}>{skill.title}</span>
    </div>
  );
}
 
function SkillTrack() {
  return (
    <div className={`track`}>
      {skills.map((skill, i) => (
        <SkillCard skill={skill} key={`${skill.title}-${i}`} />
      ))}
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="skills">
      <WebBuild />

      <Spider />

      <h2>SKILLS</h2>
      <div className={`marqueeOuter`}>
        <div className={`fadeLeft`} />
        <div className={`fadeRight`} />
 
        <div className={`marqueeViewport`}>
          <SkillTrack />
          {/* Duplicate track for seamless infinite loop */}
          <SkillTrack />
        </div>
      </div>
      <div className="skill-images">
        {skills.map((skill) => (
          <div className="skill-image" key={skill.title}>
            <Image
              src={skill.image}
              alt={skill.title}
              width={50}
              height={50}
            />
            <span className="skill-tooltip">{skill.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";

function Spider() {
   const spiderRef = useRef<HTMLDivElement | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [isReleased, setIsReleased] = useState(false);
  const [tooltipText, setTooltipText] = useState("Pull me");
  const [pullY, setPullY] = useState(0);

  const startY = useRef(0);
  const releaseTimerRef = useRef<NodeJS.Timeout | null>(null);

  const spiderTooltips = [
    "Again? 😄",
    "That tickled!",
    "Wheee! 🕷️",
    "One more pull?",
    "Careful bro!",
    "Okay okay, I’m awake!",
    "Too much fun!",
  ];

  const getRandomTooltip = () => {
    const randomIndex = Math.floor(Math.random() * spiderTooltips.length);
    return spiderTooltips[randomIndex];
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (releaseTimerRef.current) {
      clearTimeout(releaseTimerRef.current);
    }

    setIsDragging(true);
    setIsReleased(false);
    startY.current = e.clientY;

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const diff = e.clientY - startY.current;

    // only allow pulling down
    const limitedPull = Math.min(Math.max(diff, 0), 90);

    setPullY(limitedPull);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;

    setIsDragging(false);
    setPullY(0);
    setIsReleased(true);

    releaseTimerRef.current = setTimeout(() => {
      setIsReleased(false);
      setTooltipText(getRandomTooltip());
    }, 900);
  };

  useEffect(() => {
    return () => {
      if (releaseTimerRef.current) {
        clearTimeout(releaseTimerRef.current);
      }
    };
  }, []);
  
  return (
    <div
      ref={spiderRef}
      className={`spider ${isDragging ? "is-dragging" : ""} ${
        isReleased ? "is-released" : ""
      }`}
      style={
        {
          "--pull-y": `${pullY}px`,
        } as React.CSSProperties
      }
    >
      <div className="pull-text">{tooltipText}</div>

      <div className="spiderweb"></div>

      <div
        className="spider-touch-area"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div className="body">
          <div className="eye left"></div>
          <div className="eye right"></div>
        </div>

        <div className="legs left">
          <div className="leg"></div>
          <div className="leg"></div>
          <div className="leg"></div>
        </div>

        <div className="legs right">
          <div className="leg"></div>
          <div className="leg"></div>
          <div className="leg"></div>
        </div>
      </div>
    </div>
  );
}
