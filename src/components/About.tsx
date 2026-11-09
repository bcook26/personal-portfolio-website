const stats = [
  { value: "99.6%", label: "overall run success rate across 95 production Airflow pipelines" },
  { value: "$10M+", label: "natural gas pipeline purchase decision informed by my 3-year daily demand forecast" },
  { value: "~20 hrs/mo", label: "of senior-staff review saved by automated billing anomaly detection" },
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
            I&apos;m a Data Engineer at Knoxville Utilities Board. I build
            and run the pipelines that move meter and customer data through a
            bronze, silver, and gold medallion architecture into the reporting
            and forecasting that field teams, analysts, and executives rely on.
          </p>

          <p>
            I work directly with Billing, Key Accounts, Meter Analytics, Information Services,
            and executive leadership, and my Industrial &amp; Systems
            Engineering background gives me a statistics-first approach to
            data.
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
