import HeroCanvas from "./HeroCanvas";

export default function Hero() {
  return (
    <section className="min-h-screen px-8">

      <div className="max-w-7xl mx-auto h-screen grid lg:grid-cols-2 items-center">

        <div>

          <h1 className="text-6xl font-bold">
            Bryce Cook
          </h1>

          <h2 className="text-2xl mt-4 text-gray-600">
            Data Engineer
          </h2>

          <p className="mt-6 text-lg">
            Python • SQL • ETL • PostgreSQL • FastAPI • AWS
          </p>

          <div className="flex gap-4 mt-8">

            <a
              href="/BryceCookResume.pdf"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg"
            >
              Resume
            </a>

            <a
              href="https://github.com/bcook26"
              className="px-6 py-3 border rounded-lg"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com"
              className="px-6 py-3 border rounded-lg"
            >
              LinkedIn
            </a>

          </div>

        </div>

        <div className="h-[500px]">
          <HeroCanvas />
        </div>

      </div>

    </section>
  );
}
