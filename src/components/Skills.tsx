const skillGroups = [
  {
    title: "Programming Languages",
    skills: [
      "Python",
      "SQL",
      "Bash",
      "C++",
      "TypeScript"
    ],
  },
  {
    title: "Data Engineering",
    skills: [
      "Apache Airflow",
      "Apache Spark",
      "PySpark",
      "ETL / ELT",
      "Data Warehousing",
      "Data Modeling",
      "Batch Processing",
    ],
  },
  {
    title: "Databases",
    skills: [
      "PostgreSQL",
      "SQL Server",
      "Oracle",
      "MySQL",
      "Dimensional Modeling",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS",
      "Docker",
      "Git",
      "GitHub",
      "Linux",
      "CI/CD",
    ],
  },
  {
    title: "Frameworks & Tools",
    skills: [
      "FastAPI",
      "Streamlit",
      "Pandas",
      "SQLAlchemy",
      "Requests",
    ],
  },
];


export default function Skills() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          Skills
        </h2>


        <div className="grid md:grid-cols-2 gap-8">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="
                border
                rounded-xl
                p-6
                hover:shadow-lg
                transition
              "
            >

              <h3 className="text-xl font-semibold mb-4">
                {group.title}
              </h3>


              <div className="flex flex-wrap gap-3">

                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-3
                      py-1
                      rounded-full
                      bg-gray-100
                      text-gray-900
                      text-sm
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
