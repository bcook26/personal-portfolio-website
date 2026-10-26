const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <nav
        aria-label="Primary"
        className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3"
      >
        <a href="#" className="font-semibold">
          Bryce Cook
        </a>

        <div className="flex items-center gap-6 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden md:inline text-foreground/70 hover:text-foreground transition"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/BryceCook_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
