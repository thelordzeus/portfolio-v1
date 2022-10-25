import "../Card/testStyle.css";

const Experience = () => {
  return (
    <>
      <div className="Experince">
        <h1 className="text-4xl my-16 text-white">Experince</h1>
 
      <section class="card-list ">
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
              - Team created an app for doctors to track patents and patient medical history.
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
              - Worked on 3 projects which were successfully merged into the Main Project Repository.
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

        <article class="card">
            <header class="card-header">
              <p></p>
              <p className="text-left">

              </p>
            </header>

            <div class="project-author ">
              <div class="author-name">
                <div class="author-name-prefix text-white ">COMMING SOON....</div>
              </div>
            </div>

            {/* <div class="tags space-x-2">
              <a href="https://github.com/thelordzeus/HackerNews"></a>
            </div> */}
          </article>
      </section>
      </div>
    </>
  );
};

export default Experience;
