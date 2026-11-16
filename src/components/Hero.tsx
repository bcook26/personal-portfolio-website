import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-start pt-16">

        <div>
          <p className="inline-block border rounded-full px-4 py-1 text-sm text-foreground/70">
            Knoxville, TN · Remote · Open to relocating
          </p>

          <h1 className="text-6xl font-bold mt-6">
            Bryce Cook
          </h1>

          <p className="text-2xl mt-4 text-foreground/70">
            Data Engineer
          </p>

          <p className="mt-6 text-lg max-w-xl">
            I lead data engineering for a regional utility, overseeing 95 production Apache
            Airflow pipelines at 99.6% reliability. They move data from enterprise applications
            and source databases through medallion models into executive and department reporting,
            forecasting workflows that feed model retraining, and statistical validation of
            business data.
          </p>

          <p className="mt-4 text-foreground/70">
            Python • SQL • Airflow • ETL • Dimensional Modeling • Azure
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="/BryceCook_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg"
            >
              Resume
            </a>

            <a
              href="https://github.com/bcook26"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border rounded-lg hover:bg-foreground/10 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/bryce-cook-1a8960168/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border rounded-lg hover:bg-foreground/10 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <HeroVisual />

      </div>
    </section>
  );
}
