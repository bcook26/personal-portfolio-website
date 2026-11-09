import { Education, Experience } from "@/types/portfolio";

export const experience: Experience[] = [
  {
    company: "Knoxville Utilities Board",

    title: "Data Engineer",

    start: "May 2023",

    end: "Present",

    bullets: [
      "Led the migration of 95 production pipelines from Windows Task Scheduler to AWX (Git-versioned), then Apache Airflow, as sole engineer on the project. Added retries, failure alerts, centralized logs, and backfill, reaching a 99.6% run success rate over 6 months; previously, failures went undetected.",
      "Moved interval data out of a SQL Server instance nearing capacity into Azure Blob Storage (4 years, ~11M rows per day) and built a medallion architecture of dimensional models on top: bronze ingests meter and customer data from Oracle, silver enriches and validates, and gold serves technicians, analysts, and support teams.",
      "Lead and set the engineering standards for a 20-developer data team: GitHub, code review, PR templates, and CI/CD. Developers write tests with each pipeline, and CI blocks merges to production until they pass, reducing failed deployments.",
      "Built an anomalous-billing pipeline that compares key account bills ($5K-$3M per month) to 24 months of history using statistical ranges, replacing spreadsheets with Python ETL, audit logging, and automated monthly reports. Flags ~50 of ~1,200 large-demand accounts a month (~4%); ~62% are confirmed errors, saving ~20 hours of senior-staff review monthly.",
      "Engineered the ETL behind gas demand forecasting, a new capability producing daily forecasts up to 3 years out in a self-service Streamlit app that informed a single $10M+ infrastructure purchase decision. Forecast MAPE is 7.2%, and drift monitoring has triggered 2 retrains in the past year.",
      "Built a batch ETL and Streamlit app for fiber bandwidth planning: concurrent API calls collect second-level telemetry and aggregate it to hourly peak demand in SQL Server, with data-presence checks before backfills and freshness shown in the app. Peaks feed ML models (best MAPE 4.9%) with automated drift-triggered retraining.",
      "Replaced 6 legacy MS Access workflows, full of unused and poorly labeled queries, with Streamlit self-service apps, including meter-testing monitoring and a construction-notice tool that sends biweekly gas-work notices to the print shop. Regex validation on fields like phone and zip code removed repeated manual entry.",
      "Partner with Billing, Key Accounts, Meter Analytics, and Information Services to gather data requirements for an enterprise customer information system upgrade.",
    ],

    technologies: [
      "Python",
      "SQL",
      "Apache Airflow",
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
