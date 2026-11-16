const stats = [
  { value: "99.6%", label: "run success rate (successful runs / total runs) across 95 production Airflow pipelines" },
  { value: "$10M+", label: "natural gas pipeline purchase decision informed by a 3-year daily demand forecast fed by the ETL pipeline I built" },
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
            I&apos;m a Data Engineer at Knoxville Utilities Board. I build and
            run the pipelines that move meter and customer data from enterprise
            source systems through bronze, silver, and gold layers into
            dimensional models, with orchestration, testing, and monitoring
            around each one. Field teams, analysts, and executives use the
            output for reporting and forecasting.
          </p>

          <p>
            I work directly with Billing, Key Accounts, Meter Analytics,
            Information Services, and executive leadership to gather
            requirements. My Industrial &amp; Systems Engineering background
            shapes a statistics-first approach: IQR and standard-deviation
            checks, forecast error tracking, and drift monitoring.
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
