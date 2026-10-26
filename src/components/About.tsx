const stats = [
  { value: "~95", label: "production pipelines owned" },
  { value: "10M+", label: "rows ingested daily" },
  { value: "~20 hrs/mo", label: "of senior-staff review saved" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 pt-4 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">
          About Me
        </h2>

        <div className="max-w-3xl text-lg text-foreground/70 space-y-6">
          <p>
            I&apos;m a Data Engineer at Knoxville Utilities Board. I took
            ~95 pipelines from Windows Task Scheduler to AWX and then Apache
            Airflow on my own, so every job now has logging and is accounted
            for daily.
          </p>

          <p>
            I work directly with Billing, Key Accounts, Meter Analytics, Information Services,
            and executive leadership, and my Industrial &amp; Systems
            Engineering background gives me a statistics-first approach to
            data. I&apos;m looking for a fully remote data engineering role
            and am open to relocating.
          </p>
        </div>

        <dl className="grid sm:grid-cols-3 gap-4 mt-10">
          {stats.map((stat) => (
            <div key={stat.label} className="border rounded-xl p-5">
              <dt className="text-3xl font-bold">{stat.value}</dt>
              <dd className="mt-1 text-sm text-foreground/70">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
