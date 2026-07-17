import Image from "next/image";
import Stack from "@mui/material/Stack";
import TypingAnimation from "./components/Typing";
import ProjectsSection from "./components/Projects";
import Experience from "./components/Experience";
import ProjectImage2 from "../../public/images/worklab.png";
import KapilImage from "../../public/images/kapil-daryani.webp";
import SkillsSection from "./components/SkillsSection";
import dynamic from "next/dynamic";

const RobotAnimation = dynamic(
  () => import("./components/RobotAnimation"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main>
      <section className="home-banner">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="container fade">
          <div className="home-banner--content">
            <h1>
              <span>
                <strong>{"< "}</strong>
              </span>
              <span>K</span>apil
              <span>
                <strong>{" />"}</strong>
              </span>
            </h1>
            <TypingAnimation />
            <Stack direction="row" spacing={10} className="hashtags">
              <p>#FrontendDeveloper</p>
              <p>#ReactJsDeveloper </p>
              <p>#NextJsDeveloper </p>
              <p>#ReactNative</p>
              <p>#PixelPerfect</p>
              <p>#WebAppDevelopment</p>
              <p>#ModernWeb</p>
            </Stack>
          </div>
        </div>
        <div className="soc-box fade">
          <p className="follow-label">Follow Me</p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/kapildaryani/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>LinkedIn</title>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="https://github.com/KapilDaryani2022"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/kapil_daryani05/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Instagram</title>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
        <div id="grained_container"></div>
      </section>
      <section className="about" id="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="flex">
           <div className="">
              <p>Hey there! I'm Kapil Daryani, a web and mobile app developer with a passion for turning ideas into digital reality. My coding journey started with the classic trio of HTML, CSS, and JavaScript, quickly moved into modern frameworks. These days, I'm diving deeper into <span>React, Vue, Next, React Native</span>, and the amazing ecosystem around them — especially <span>API integrations, state management, and building pixel-perfect UIs.</span></p>
              <p>The web is a constantly evolving playground, and I'm all in! I love the challenge of learning new things and using that knowledge to create amazing websites that look great and work flawlessly on any device.</p>
              <p>Ready to see what I can do? Check out my <a href="#projects">projects!</a></p>
            </div>
            <div>
              <div className="image-div">
                <div>
                  <Image src={KapilImage} alt='Kapil Daryani' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProjectsSection />
      <Experience />
      <SkillsSection />
      <section id="contactUs" className="contact-us">
        <div className="container">
          <div className="flex row">
            <div>
              <h2>
                Let's Get <span className="break">In Touch</span>
              </h2>
              <p>
                My inbox is always open for chats about web development, project
                ideas, or just to say hi. I’ll try my best to get back to you!
              </p>
              <div className="flex btns">
                <a
                  href="mailto:kapildaryani5802@gmail.com"
                  className="main-btn"
                >
                  Email
                </a>

                <a
                  href="https://wa.me/919375244649"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="main-btn"
                >
                  WhatsApp
                </a>
              </div>
              {/* <h3>Follow me </h3> */}
            </div>
            <div className="floating-div">
              <RobotAnimation />
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="flex">
            <p>Designed & Built by <span>Kapil Daryani</span></p>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/kapildaryani/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>LinkedIn</title>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://github.com/KapilDaryani2022"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github"
                >
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              {/* <a
                href="https://twitter.com/kapil_singh_"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>CodePen</title>
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                  <line x1="12" y1="22" x2="12" y2="15.5"></line>
                  <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                  <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                  <line x1="12" y1="2" x2="12" y2="8.5"></line>
                </svg>
              </a> */}
              <a
                href="https://www.instagram.com/kapil_daryani05/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>Instagram</title>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
