type HamburgerProps = {
  open: boolean;
  onToggle: () => void;
};

export default function Hamburger({ open, onToggle }: HamburgerProps) {
  return (
    <button
      aria-label={open ? "Close menu" : "Open menu"}
      onClick={onToggle}
      className="p-2 rounded focus:outline-none cursor-pointer text-(--color-primary)"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
        )
      </svg>
    </button>
  );
}
