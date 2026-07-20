import { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "golf-etl",

    title: "Golf ETL Analytics Platform",

    category: "Data Engineering",

    description:
      "Built an end-to-end data platform using Python ETL workflows, PostgreSQL, FastAPI, and Streamlit to provide golf statistics, analytics, and tournament predictions.",

    technologies: [
      "Python",
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
