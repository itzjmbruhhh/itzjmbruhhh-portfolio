import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-(--background-color-1) text-(--color-primary) shadow-[0_0_10px_var(--color-primary),0_4px_10px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_var(--color-primary),0_0_40px_var(--color-primary)] transition-all duration-500 ease-in-out transform hover:scale-110 cursor-pointer"
        >
          <i className="las la-angle-up"></i>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
