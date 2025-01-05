import { useState, useEffect } from 'react';

const useTypingEffect = (words: string[], typingSpeed: number = 150, deletingSpeed: number = 100, pauseDuration: number = 1000) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const typeCharacter = () => {
      const currentWord = words[currentWordIndex];
      setCurrentText((prev) =>
        isDeleting ? currentWord.substring(0, prev.length - 1) : currentWord.substring(0, prev.length + 1)
      );

      const randomDelay = Math.random() * 50 + (isDeleting ? deletingSpeed : typingSpeed);

      if (!isDeleting && currentText === currentWord) {
        timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        timeout = setTimeout(typeCharacter, randomDelay);
      }
    };

    timeout = setTimeout(typeCharacter, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return currentText;
};

export default useTypingEffect;

