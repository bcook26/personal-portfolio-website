import { Education, Experience } from "@/types/portfolio";

export const experience: Experience[] = [
  {
    company: "Knoxville Utilities Board",

    title: "Data Engineer",

    start: "May 2023",

    end: "Present",

    bullets: [
      "Sole engineer on the migration of 95 production pipelines from Windows Task Scheduler to AWX (Git-versioned) and then Airflow. Jobs now have retries, failure alerts, centralized logs, and mostly automatic backfill, with a 99.6% overall run success rate over the past 6 months. Previously, failures went undetected.",
      "Built a medallion architecture of reusable semantic models in SQL Server: bronze ingests from the meter and customer databases, silver enriches and validates, and gold serves reporting to field technicians, analysts, and support teams. Azure Blob Storage holds the bronze and silver interval data (4 years, ~11M rows per day).",
      "Established the development workflow for a 20-developer organization: GitHub, code review, PR templates, and CI/CD. Developers write tests with each pipeline, and CI blocks merges to production until they pass.",
      "Built an anomalous-billing pipeline that compares each key account's bill to 24 months of history using statistical ranges, replacing spreadsheets with Python ETL, audit logging, and automated monthly reports. It flags ~50 bills a month out of ~1,200 large-demand key accounts (~4%); ~62% are confirmed errors, saving ~20 hours of senior-staff review monthly.",
      "Engineered the ETL behind gas demand forecasting, a new capability with no prior baseline that produces a daily forecast up to 3 years out, feeding a self-service web app that informs infrastructure decisions exceeding $10M. Forecast MAPE is 7.2%, and drift monitoring has triggered 2 retrains in the past year to keep the model current.",
      "Built a batch ETL for fiber bandwidth telemetry: concurrent calls to a single API endpoint collect host and interface details, then a targeted final call aggregates hourly peak demand into SQL Server with timestamps and units, with logging and historical backfill. It sources ML models (best MAPE 4.9%) with automated drift-triggered retraining.",
      "Migrated legacy MS Access reporting workflows into Airflow-managed pipelines.",
    ],

    technologies: [
      "Python",
      "SQL",
      "Airflow",
      "AWX",
      "Oracle",
      "SQL Server",
      "Azure Blob Storage",
      "Streamlit",
      "GitHub",
    ],
  },
];

export const education: Education = {
  degree: "Industrial & Systems Engineering - UT Knoxville",
  year: "2022",
  focus: "Strong statistics and mathematics foundation",
};
