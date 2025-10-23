import logo from "../assets/logo/logo.png";
import NavLinks from "./NavLinks";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
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
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 z-10000 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="p-6">
          <div className="mb-6">
            <a href="/">
              <img src={logo} alt="logo" className="w-32" />
            </a>
          </div>
          <nav className="xl:hidden">
            <div className="space-y-4">
              <NavLinks onLinkClick={onClose} className="flex flex-col" />
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}
