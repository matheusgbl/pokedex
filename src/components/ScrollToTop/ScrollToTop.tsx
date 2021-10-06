import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';

import { Container } from './styles';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <Container>
      {isVisible && (
        <div onClick={scrollToTop}>
          <MdKeyboardArrowUp size={40} color="black" />
        </div>
      )}
    </Container>
  );
}
