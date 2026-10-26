import { education, experience } from "@/data/experience";

export default function Timeline() {
  return (
    <section id="experience" className="scroll-mt-16 py-16 px-6">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          Experience
        </h2>

        <div className="relative border-l border-foreground/30 ml-4">

          {experience.map((item) => (

            <div
              key={`${item.company}-${item.title}`}
              className="mb-12 ml-8"
            >

              {/* Timeline Dot */}
              <div
                className="
                  absolute
                  -ml-[39px]
                  mt-2
                  h-4
                  w-4
                  rounded-full
                  bg-foreground
                "
              />

              <p className="text-sm text-foreground/60">
                {item.start} – {item.end}
              </p>

              <h3 className="text-2xl font-semibold mt-2">
                {item.title}
              </h3>

              <p className="text-lg">
                {item.company}
              </p>

              <ul className="mt-4 text-foreground/70 max-w-3xl list-disc pl-5 space-y-2">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

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

        <div className="mt-4 border rounded-xl p-6 max-w-3xl">
          <p className="text-sm text-foreground/60">
            Education · {education.year}
          </p>
          <h3 className="text-xl font-semibold mt-1">
            {education.degree}
          </h3>
          <p className="mt-2 text-foreground/70">
            {education.focus}
          </p>
        </div>

      </div>

    </section>
  );
}
