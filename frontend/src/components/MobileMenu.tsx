import logo from "../assets/logo/logo.png";
import logoLight from "../assets/logo/logo-light.png";
import NavLinksMobile from "./NavLinksMobile";
import links from "../assets/utils/SocialLinks.json";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  activeId?: string | null;
};

export default function MobileMenu({
  open,
  onClose,
  activeId = null,
}: MobileMenuProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 z-9999 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden={!open}
      />

      {/* Slide-in panel */}
      <aside
        className={`fixed top-0 left-0 h-full w-[400px] bg-(--background-color-2) shadow-xl transform transition-transform duration-300 z-10000 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="p-6">
          {/* Menu Top Start */}
          <div className="slider-content">
            <div className="mb-6 flex items-center justify-between">
              <a href="/">
                <img src={logo} alt="logo" className="logo-dark w-32" />
                <img
                  src={logoLight}
                  alt="logo light"
                  className="logo-light w-32"
                />
              </a>

              {/* Close button placed next to the logo; minimal styling so desktop view unchanged */}
              <button
                onClick={onClose}
                aria-label="Close menu"
                className=" p-2 focus:outline-none cursor-pointer text-(--color-primary) border border-(--color-tertiary) bg-(--color-tertiary) rounded-full"
              >
                {/* simple X icon using SVG, inherits text color */}
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div>
              <p className="text-2xl ml-1">I'm a student developer.</p>
            </div>
          </div>
          {/* Menu Top End */}

          {/* Content Start*/}
          <div className="slider-content">
            <nav className="xl:hidden">
              <div className="space-y-4">
                <NavLinksMobile
                  onLinkClick={onClose}
                  className="flex flex-col"
                  activeId={activeId}
                />
              </div>
            </nav>
          </div>
          {/* Content End */}

          {/* Socials Start */}
          <div className="slider-content">
            <h2 className="item-mobile py-0 text-[18px] font-normal">
              FIND ME
            </h2>
            <ul className="socials-wrapper-mobile">
              <a href={links.instagram} target="_blank">
                <li className="socials-wrapper-mobile social-icon">
                  <i className="lab la-instagram text-4xl"></i>
                </li>
              </a>
              <a href={links.github} target="_blank">
                <li className="socials-wrapper-mobile social-icon">
                  <i className="lab la-github text-4xl"></i>
                </li>
              </a>
              <a href={links.linkedin} target="_blank">
                <li className="socials-wrapper-mobile social-icon">
                  <i className="lab la-linkedin text-4xl"></i>
                </li>
              </a>
            </ul>
          </div>
          {/* Socials End */}
        </div>
      </aside>
    </>
  );
}
