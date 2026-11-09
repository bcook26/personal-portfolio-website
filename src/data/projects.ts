import { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "golf-etl",

    title: "Golf ETL Analytics Platform",

    category: "Data Engineering",

    description:
      "Built an end-to-end data platform: Apache Airflow automates player and stat extraction from public golf APIs into PostgreSQL data models, served through FastAPI and Streamlit for statistics, analytics, and tournament predictions.",

    architecture: [
      "Public APIs",
      "Airflow",
      "PostgreSQL",
      "FastAPI",
      "Streamlit",
    ],

    technologies: [
      "Python",
      "Airflow",
      "PostgreSQL",
      "FastAPI",
      "Streamlit",
      "ETL"
    ],

    github:
      "https://github.com/bcook26/golf-etl",

    featured: true,

    status: "Completed",
  },

  {
    slug: "cloud-warehouse-dbt",

    title: "Cloud Warehouse + dbt Pipeline",

    category: "Data Engineering",

    description:
      "In progress: an ELT pipeline that lands raw data in cloud object storage, loads it into a cloud data warehouse, and models it with dbt. Includes dbt tests for data quality and a CI pipeline that builds and tests every pull request.",

    architecture: [
      "Public API",
      "Azure Blob Storage",
      "Snowflake",
      "dbt",
      "GitHub Actions",
    ],

    technologies: [
      "Python",
      "Airflow",
      "Azure Blob Storage",
      "Snowflake",
      "dbt",
      "GitHub Actions",
    ],

    featured: true,

    status: "In Progress",
  },

  {
    slug: "amazon-webscraper",

    title: "Amazon Web Scraper",

    category: "Automation",

    description:
      "Automated product data collection using Python, BeautifulSoup, and Pandas.",

    technologies: [
      "Python",
      "BeautifulSoup",
      "Pandas",
      "Requests"
    ],

    github:
      "https://github.com/bcook26/amazon-webscraper",

    featured: true,

    status: "Completed",
  },
];
