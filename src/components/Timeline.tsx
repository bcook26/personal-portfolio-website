const experience = [
  {
    date: "May 2023 - Present",
    title: "Data Engineer",
    company: "Knoxville Utilities Board",
    description:
      "Develop and maintain Python-based ETL pipelines, automate data workflows, and build internal analytics applications supporting operational decision making.",
    technologies: [
      "Python",
      "SQL",
      "Airflow",
      "PostgreSQL",
      "Streamlit",
      "AWS",
    ],
  },
  {
    date: "2022 - 2023",
    title: "Data Engineering / Analytics Projects",
    company: "Personal Development",
    description:
      "Built data-focused applications including web scrapers, dashboards, machine learning workflows, and data visualization projects.",
    technologies: [
      "Python",
      "Pandas",
      "Machine Learning",
      "Tableau",
    ],
  },
];


export default function Timeline() {
  return (
    <section className="py-16 px-6">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          Experience
        </h2>


        <div className="relative border-l border-gray-300 ml-4">

          {experience.map((item) => (

            <div
              key={item.title}
              className="mb-12 ml-8"
            >

              {/* Timeline Dot */}
              <div
                className="
                  absolute
                  -ml-[38px]
                  mt-2
                  h-4
                  w-4
                  rounded-full
                  bg-black
                "
              />


              <p className="text-sm text-gray-500">
                {item.date}
              </p>


              <h3 className="text-2xl font-semibold mt-2">
                {item.title}
              </h3>


              <h4 className="text-lg">
                {item.company}
              </h4>


              <p className="mt-4 text-gray-600 max-w-3xl">
                {item.description}
              </p>


              <div className="flex flex-wrap gap-2 mt-4">

                {item.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="
                      text-sm
                      px-3
                      py-1
                      border
                      rounded-full
                    "
                  >
                    {tech}
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
