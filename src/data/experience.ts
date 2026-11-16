import { Education, Experience } from "@/types/portfolio";

export const experience: Experience[] = [
  {
    company: "Knoxville Utilities Board",

    title: "Data Engineer",

    start: "May 2023",

    end: "Present",

    bullets: [
      "Migrated 95 production pipelines from Windows Task Scheduler to AWX (Git-versioned), then Apache Airflow, as sole engineer. Failures previously went unnoticed, with no success or failure notifications. Every job now has retries, alerts, centralized logs, timing, and backfill, with a 99.6% run success rate (successful runs / total runs).",
      "Moved 4 years of interval data (~11M rows per day) off a SQL Server instance nearing capacity into Azure Blob Storage, then built a medallion architecture of dimensional models: bronze ingests from enterprise source systems, silver enriches and validates, and gold serves technicians, analysts, and support teams.",
      "Set engineering standards for a 20-developer data team: GitHub, code review, PR templates, and CI/CD. Tests ship with each pipeline, and CI blocks production merges until they pass, reducing failed deployments.",
      "Built a Python anomalous-billing pipeline that compares key account bills ($5K-$3M per month) to 24 months of history, flagging values outside the IQR or beyond 3 standard deviations. It replaced spreadsheets with audit logging and automated monthly reports. It flags ~50 of ~1,200 large-demand accounts a month (~4%); ~62% are confirmed errors, saving ~20 hours of senior-staff review monthly.",
      "Built the ETL pipeline behind a 3-year daily gas demand forecast, partnering with teammates on the model. The pipeline supplies retraining data and feeds a self-service Streamlit app that informed a $10M+ infrastructure purchase decision. Forecast MAPE is 7.2%, and drift monitoring has triggered 2 retrains in the past year.",
      "Built a batch ETL and Streamlit app for fiber bandwidth planning: concurrent API calls collect second-level telemetry and aggregate it to hourly peak demand in SQL Server, with backfill checks and data-freshness indicators. Peaks feed ML models (best MAPE 4.9%) with drift-triggered retraining.",
      "Replaced 6 legacy MS Access workflows with Streamlit self-service apps, adding logging and tests to each process and consolidating multi-step manual work into a single application. Examples include meter-testing monitoring and a construction-notice tool that sends biweekly gas-work notices to the print shop. Field validation (phone, zip) reduced repeated manual entry.",
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
