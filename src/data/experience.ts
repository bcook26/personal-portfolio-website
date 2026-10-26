import { Education, Experience } from "@/types/portfolio";

export const experience: Experience[] = [
  {
    company: "Knoxville Utilities Board",

    title: "Data Engineer",

    start: "May 2023",

    end: "Present",

    bullets: [
      "Own ~95 production pipelines, migrating them solo from Windows Task Scheduler to AWX and then Apache Airflow. Every job now has active logging, version control integration, and secrets management, and is accounted for daily; before, failures went undetected.",
      "Ingest 10–11 million rows daily directly from customer meters via database connections and remote APIs, and consolidate meter data from multiple enterprise systems into real-time operational views for field technicians, analysts, and support teams.",
      "Built the team’s development workflow from scratch, adopting GitHub and enforcing code review, standardized PR templates, and CI/CD pipelines to catch defects before they reached production.",
      "Developed an anomalous-billing pipeline that compares each customer's current bill to 24 months of history using statistical ranges, replacing spreadsheet-based transformations with Python ETL, audit logging, and automated monthly reporting. Key Accounts and Billing use the flagged accounts to resolve metering and billing issues with customers, saving ~20 hours of senior-staff review each month.",
      "Engineered the ETL behind annual gas demand forecasting, feeding a self-service web app that guides infrastructure investment decisions exceeding $10M, with automated model drift monitoring and retraining.",
      "Built batch ETL that ingests fiber bandwidth telemetry from APIs with scheduling, logging, and historical backfill to support machine learning, and migrated legacy MS Access reporting workflows into Airflow-managed pipelines.",
    ],

    technologies: [
      "Python",
      "SQL",
      "Airflow",
      "AWX",
      "Azure Blob Storage",
      "Streamlit",
    ],
  },
];

export const education: Education = {
  degree: "Industrial & Systems Engineering - UT Knoxville",
  year: "2022",
  focus: "Strong statistics and mathematics foundation",
};
