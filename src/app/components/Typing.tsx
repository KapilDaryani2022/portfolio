import React, { useState, useEffect } from 'react';

const texts = [
  "Let me build you pixel-perfect designs",
  "I develop high-performance applications",
  "I craft engaging user experiences",
  "I specialize in React, Next, and React Native",
];

const TypingAnimation: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState<string>('');

  useEffect(() => {
    let typeInterval: NodeJS.Timeout | null = null;
    let eraseInterval: NodeJS.Timeout | null = null;

    const typeText = () => {
      const fullText = texts[index];
      let displayedText = '';
      let charIndex = 0;

      typeInterval = setInterval(() => {
        displayedText += fullText[charIndex];
        setCurrentText(displayedText);
        charIndex++;

        if (charIndex === fullText.length) {
          clearInterval(typeInterval as NodeJS.Timeout);
          setTimeout(eraseText, 1000);
        }
      }, 90);
    };

    const eraseText = () => {
      const fullText = texts[index];
      let charIndex = fullText.length;

      eraseInterval = setInterval(() => {
        const displayedText = fullText.substring(0, charIndex);
        setCurrentText(displayedText);
        charIndex--;

        if (charIndex === 0) {
          clearInterval(eraseInterval as NodeJS.Timeout);
          setTimeout(nextText, 500);
        }
      }, 30);
    };

    const nextText = () => {
      setIndex((index + 1) % texts.length);
    };

    typeText();

    return () => {
      if (typeInterval) clearInterval(typeInterval as NodeJS.Timeout);
      if (eraseInterval) clearInterval(eraseInterval as NodeJS.Timeout);
    };
  }, [index]);

  return (
    <div className="typing-animation">
      <div className="flex">
        <p className="banner-des" dangerouslySetInnerHTML={{ __html: currentText }} /> <div className="cursor"></div>
      </div>
    </div>
  );
};

export default TypingAnimation;
