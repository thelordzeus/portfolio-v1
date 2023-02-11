import "../Card/testStyle.css";

const Experience = () => {
  return (
    <>
      <div className="Experience">
        <h1 className="my-16 text-4xl text-white">Experience</h1>

        <section class="card-list ">
          <article class="card">
            <header class="card-header">
              <p>JAN 2023 - PRESENT</p>
              <p className="text-left">- Full stack web development intern.</p>
              <p className="text-left">
                - Worked with react, nextjs and tailwind to build website's for
                the clients.
              </p>
            </header>

            <div class="card-author">
              <a
                class="author-avatar"
                href="https://codelancedevs.com/"
                target="_blank"
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAdVBMVEUAAAAAo1kAt2QA4XsA/4sAqFsAWjEAAwEArl8AoFgARSUA5H0Au2YAajoA/44A2XYAl1MACgUASykAfEQAd0EAEgoAhkkAVS4AYjUACQUAbTwAjE0AHRAATysAQiQAoVgAOiAAMhsAsmEAKRcAz3EAFAoAklBL2FIIAAACG0lEQVR4nO3dzVIaQRSAUY2BQQQVUPkdBEx4/0dMZjRZuLmtGLsnnm99C/ps6KnqqebsTJIkSZIkSZIkSV+kXT+hfe5Vvr9q1Ysb9HMv8/1V4955WA+w3AABCw8QsPAAAQsPELDwAAELDxCw8AABCw8QsPAAAQsPELDwADsPXCUAO32EXc/uwmbb3Ms8ocl9QpPcq5RUVrvjbdxDM1nN1w9h62lu0OuGh1HceTPZ0Y1+OPgWNrpsJgEBswQICJg3QEDAvAECAuYNEBAwb4CAgHkDBATMGyAgYN4Auw8cxcDHZrKjwG3vEHfbTFbjy7jHeW7Q6zb1PO75zYJ9PQ2rnzJ7JH1K9SKh9n6pzbSOG7Yfup8Ow6af9CNzuIn7sWgmt+eHQdTLNrF4LGebGF1dRF3djJvJjm70CcCLP8BOPqoBAgICAgICAgICAgICAgICAgICAgICAgICAgJ+JWDcCzDlso7yTnhvE1Z9aI/T33DdSr+T161ISm55Pwl7ubgtHvxd1UxWy5TR9kOryTKuOgG4iN9JGgxmP5vRWcJP47F9QWt/N4tbtd8/XCW0OwF4vE5otGlGP3gffL606p///+D6+nvYX2AXn2QAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/xvgBx9hX7Qn7yUdYdfHddhxfN+MLhLeLLjbNZNPKTfPPK96109ofwJQkiRJkiRJkiRJb+oXjMb97vnF1n4AAAAASUVORK5CYII="
                  alt="logo"
                />
              </a>
              <svg class="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>

              <div class="author-name">
                <div class="author-name-prefix text-white">INTERNSHIP</div>
                CODELANCE DEVS
              </div>
            </div>

            <div class="tags">
              {/* this is where you can add your certificates  */}
            </div>
          </article>
          <article class="card">
            <header class="card-header">
              <p>JAN 2023 - PRESENT</p>
              <p className="text-left">
                - Working as a Front End developer intern.
              </p>
              <p className="text-left">
                - Worked with Next.js, tailwind and Node.js.
              </p>
            </header>

            <div class="card-author">
              <a class="author-avatar" href="https://www.rentyaar.com/">
                <img
                  src="https://www.rentyaar.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Frentyaar-logo-png2.90dd241f39b046774afd2d6911fe0bb3.png&w=1920&q=75"
                  alt="logo"
                />
              </a>
              <svg class="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>

              <div class="author-name">
                <div class="author-name-prefix text-white">INTERNSHIP</div>
                RENTYAAR
              </div>
            </div>
          </article>
          <article class="card">
            <header class="card-header">
              <p>FEB 2023 - PRESENT</p>
              <p className="text-left">
                - Conducted sessions and guided students for developing their
                their skills.
              </p>
              <p className="text-left"></p>
            </header>

            <div class="card-author">
              <a class="author-avatar" href="https://internshala.com/">
                <img
                  src="data:image/png;base64,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"
                  alt="logo"
                />
              </a>
              <svg class="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>

              <div class="author-name">
                <div class="author-name-prefix text-white">INTERNSHIP</div>
                INTERNSHALA
              </div>
            </div>
          </article>
          <article class="card">
            <header class="card-header">
              <p>JUN 2022 - PRESENT</p>
              <p className="text-left">
                - Member at Web and App devlopment team.
              </p>
              <p className="text-left">
                - Mentored 200+ people in a frontEnd event named WEBTURE.
              </p>
            </header>

            <div class="card-author">
              <a class="author-avatar" href="https://www.ieeesrmist.in/">
                <img
                  src="https://snehil.dev/images/experience/ieee.png"
                  alt="logo"
                />
              </a>
              <svg class="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>

              <div class="author-name">
                <div class="author-name-prefix text-white">COLLEGE CLUB</div>
                IEEE SRMIST
              </div>
            </div>

            <div class="tags">{/* <a href="#">Certificates</a> */}</div>
          </article>

          <article class="card">
            <header class="card-header">
              <p>6th - 9th August</p>
              <p className="text-left">
                - Team created an app for doctors to track patents and patient
                medical history.
              </p>
              <p className="text-left">
                - The app uses REDIS and licence numbers to authorise doctors.
              </p>
            </header>

            <div class="card-author">
              <a class="author-avatar" href="https://hackoheist.devfolio.co/">
                <img
                  src="https://hackoheist.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fb107fe2300b448648beb001354fb4e67%2Fassets%2Ffavicon%2F274.png&w=1440&q=75"
                  alt="hackathon"
                />
              </a>
              <svg class="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>

              <div class="author-name">
                <div class="author-name-prefix text-white">HACKATHON</div>
                HACK O HEIST
              </div>
            </div>
          </article>

          <article class="card">
            <header class="card-header">
              <p>March 2022 - May 2022</p>
              <p className="text-left">
                - Worked on 3 projects which were successfully merged into the
                Main Project Repository.
              </p>
            </header>

            <div class="card-author">
              <a class="author-avatar" href="https://hackoheist.devfolio.co/">
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZwRqw4J3AXvXO6EbZG3qSwAAAA%26pid%3DApi&f=1&ipt=a3f5f30389e992409a5b660a1da9805cee22682cb31d031283a6a617775314e9&ipo=images"
                  alt="hackathon"
                />
              </a>
              <svg class="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>

              <div class="author-name">
                <div class="author-name-prefix text-white">OPEN SOURCE</div>
                GirlScript SoC'22
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default Experience;
