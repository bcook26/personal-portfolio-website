export default function Contact() {

  return (

    <section className="py-16 px-6">

      <div className="max-w-5xl mx-auto">


        <h2 className="text-4xl font-bold mb-8">
          Contact
        </h2>


        <p className="text-lg text-gray-600 max-w-2xl">

          I'm always interested in connecting with other engineers,
          discussing data engineering opportunities, or collaborating on
          interesting projects.

        </p>


        <div className="flex flex-wrap gap-4 mt-8">


          <a
            href="mailto:brycecook2018@gmail.com"
            className="
              border
              rounded-lg
              px-6
              py-3
              hover:bg-gray-100
              transition
            "
          >
            Email
          </a>



          <a
            href="https://github.com/bcook26"
            target="_blank"
            className="
              border
              rounded-lg
              px-6
              py-3
              hover:bg-gray-100
              transition
            "
          >
            GitHub
          </a>



          <a
            href="https://www.linkedin.com/in/bryce-cook-1a8960168/"
            target="_blank"
            className="
              border
              rounded-lg
              px-6
              py-3
              hover:bg-gray-100
              transition
            "
          >
            LinkedIn
          </a>


        </div>


      </div>

    </section>

  );
}
