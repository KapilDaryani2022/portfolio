import { useEffect, useRef, useState } from "react";

export default function Experience() {
  const [activeStep, setActiveStep] = useState(1);

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveStep(index + 1);
          }
        });
      },
      {
        root: null,
        threshold: 0.6,
      }
    );

    itemRefs.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToStep = (index: number) => {
    const target = itemRefs.current[index];
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "center",
      });
    }
  };

  const journey = [
    {
      year: "2020-2022",
      title: "GACC College",
      link: 'https://gacc.org.in/',
      desc: (
        <>
          Nostalgic times.😄 <br />
          Though my college life was a pandemic mess,
          <br /> I picked up coding as a hobby.
        </>
      ),
    },
    {
      year: "2020-2021",
      title: "MAAC Institute",
      link: 'https://maacahmedabad.co.in/',
      desc: (
        <>
          Made a bunch of coding buddies,
          <br /> But I was dreaming up crazy projects.
        </>
      ),
    },
    {
      year: "2021-2023",
      title: "Hupp Technologies",
      link: 'https://hupp.tech/',
      desc: (
        <>
          Started making some exciting projects <br />
          Introduced to ReactJS, APIs, code management,
          <br /> and started work with a team.
        </>
      ),
    },
    {
      year: "2023 - Current",
      title: "Octet Design Studio",
      link: 'https://octet.design/',
      desc: (
        <>
          Joined the team and kicked off by building the company's own website.
          Later, I took on some challenging projects and even got to lead a team.
          It was a fun ride!
        </>
      ),
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>My Journey</h2>

        <div className="time-line">
          <span className="timer">{activeStep}</span>

          <div className="flex time-line--items">
            {journey.map((item, index) => (
              <div
                key={index}
                className="time-stop"
                data-index={index}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
              >
                <p>{item.year}</p>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                {journey.length > index + 1 &&
                  <button
                    type="button"
                    className="animated-link"
                    onClick={() => scrollToStep(index + 1)}
                    aria-label={`Go to ${journey[index + 1].title}`}
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.2167 12.7728C15.8025 12.7728 15.4529 12.622 15.1678 12.3204C14.8834 12.018 14.7413 11.6598 14.7413 11.2456V5.39558L3.19647 16.9404C2.90311 17.2337 2.55763 17.3804 2.16003 17.3804C1.76382 17.3804 1.41903 17.2337 1.12566 16.9404C0.832296 16.647 0.685268 16.3019 0.684578 15.905C0.685268 15.508 0.832296 15.1629 1.12566 14.8695L12.6704 3.32477L6.76862 3.32477C6.35446 3.32477 6.00484 3.18222 5.71976 2.89714C5.43537 2.61275 5.29317 2.26347 5.29317 1.84931C5.29317 1.43515 5.43571 1.08553 5.72079 0.800446C6.00519 0.516055 6.35446 0.373858 6.76863 0.373858L16.2426 0.37386C16.4497 0.373859 16.6354 0.412513 16.7996 0.489823C16.9632 0.567823 17.1141 0.675851 17.2521 0.813905C17.3902 0.951959 17.4982 1.10278 17.5762 1.26638C17.6535 1.43066 17.6922 1.61635 17.6922 1.82343L17.6922 11.3492C17.6922 11.7288 17.55 12.0608 17.2656 12.3452C16.9805 12.6303 16.6309 12.7728 16.2167 12.7728Z" fill="white"></path></svg>
                  </button>
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}