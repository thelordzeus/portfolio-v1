const Projects = () => {
  return (
    <>
      <div className="project">
        <h1 className="text-4xl my-16 text-white">Projects</h1>
        <section class="card-list ">
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
              A news application that retrieves data from the Hackernews API and displays it in a beautiful dark interface.
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

export default Projects;
