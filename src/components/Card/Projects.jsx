const Projects = () => {
  return (
    <>
      <div className="project">
        <h1 className="text-4xl my-16 text-white">Projects</h1>
        <section class="card-list ">
          <article class="card">
            <header class="card-header">
              <p>Jan 2023</p>
              <p className="text-left">
                It was part of a submission for the buildspace bounties
                tournament where they wanted us to create a landing page for
                there bounties section.
              </p>
            </header>

            <div class="project-author ">
              <div class="author-name">
                <div class="author-name-prefix text-white ">
                  BUILDSPACE-BOUNTIES
                </div>
              </div>
            </div>

            <div class="tags space-x-2">
              <a href="https://buildspace-bounty.vercel.app/">Live</a>
              <a href="https://github.com/thelordzeus/buildspace-bounty">
                Code
              </a>
            </div>
          </article>

          <article class="card">
            <header class="card-header">
              <p>Jan 2023</p>
              <p className="text-left">
                ContentGen is a chatGPT powered website that makes it easy for
                users to generate professional-quality LinkedIn posts with just
                a few clicks.
              </p>
            </header>

            <div class="project-author ">
              <div class="author-name">
                <div class="author-name-prefix text-white ">CONTENT-GEN</div>
              </div>
            </div>

            <div class="tags space-x-2">
              <a href="https://my-content-gen.vercel.app/">Live</a>
              <a href="https://github.com/thelordzeus/contentGen">Code</a>
            </div>
          </article>

          <article class="card">
            <header class="card-header">
              <p>Dec 2022</p>
              <p className="text-left">
                AssignDesk is an assignment manager app designed specifically
                for students. With AssignDesk, students can keep track of all
                their scheduled assignments in one convenient place.
              </p>
            </header>

            <div class="project-author ">
              <div class="author-name">
                <div class="author-name-prefix text-white ">ASSIGN-DESK</div>
              </div>
            </div>

            <div class="tags space-x-2">
              <a href="https://assign-desk.vercel.app/">Live</a>
              <a href="https://github.com/thelordzeus/assign-desk">Code</a>
            </div>
          </article>

          <article class="card">
            <header class="card-header">
              <p>21 March 2022</p>
              <p className="text-left">
                A location for all of your social links, allowing others to
                easily contact you.
              </p>
            </header>

            <div class="project-author ">
              <div class="author-name">
                <div class="author-name-prefix text-white ">MY LINKS</div>
              </div>
            </div>

            <div class="tags space-x-2">
              <a href="https://allmysocials.vercel.app/">Live</a>
              <a href="https://github.com/thelordzeus/my-link">Code</a>
            </div>
          </article>

          <article class="card">
            <header class="card-header">
              <p>2 February 2021</p>
              <p className="text-left">
                A news application that retrieves data from the Hackernews API
                and displays it in a beautiful dark interface.
              </p>
            </header>

            <div class="project-author ">
              <div class="author-name">
                <div class="author-name-prefix text-white ">Hacker News</div>
              </div>
            </div>

            <div class="tags space-x-2">
              <a href="https://github.com/thelordzeus/HackerNews">Code</a>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default Projects;
