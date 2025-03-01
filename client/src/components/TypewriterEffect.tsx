import { useState, useEffect } from "react";

export function TypewriterEffect() {
  const [text, setText] = useState("");
  const fullText = "Entrepreneur, Innovator, and Tech Enthusiast";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return <span>{text}</span>;
}
