const linkClass = "border rounded-lg px-6 py-3 hover:bg-foreground/10 transition";

export default function Contact() {
  return (
    <>
      <section id="contact" className="scroll-mt-16 py-16 px-6">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-bold mb-8">
            Contact
          </h2>

          <p className="text-lg text-foreground/70 max-w-2xl">
            I&apos;m looking for fully remote Data Engineering roles and am open
            to relocating. I work in Eastern Time. Email is the best way to
            reach me.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            <a href="mailto:brycecook2018@gmail.com" className={linkClass}>
              Email
            </a>

            <a
              href="https://github.com/bcook26"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/bryce-cook-1a8960168/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              LinkedIn
            </a>

            <a
              href="/BryceCook_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Resume
            </a>

          </div>

        </div>

      </section>

      <footer className="px-6 py-8 text-center text-sm text-foreground/60">
        Bryce Cook · Data Engineer · Remote · open to relocating · Eastern Time
      </footer>
    </>
  );
}
