import Cards from "../../Cards.jsx";
import profile from "./profile.jpg";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { IconContext } from "react-icons";

const About = () => {
  return (
    <section className="about h-[300vh] flex ">
      <div className="about-title w-2/4 h-screen  justify-center items-center space-y-3">
        <h2 className="text-white text-5xl font-extrabold">HELLO, WORLD!</h2>
        <h2 className=" text-white text-5xl font-extrabold ">I'M LORD ZEUS.</h2>
        <div>
          <p className="text-white font-thin text-base">
            Undergraduate in Computer Science with Blockchain from SRMIST India.
            Learning the ins and outs of web development currently. Frontend and
            iOS development are my strong suits, but I'm also exploring WEB3
            development.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <img
            className="rounded-full w-20 h-20 drop-shadow-2xl my-5"
            src={profile}
            alt="Profile"
          />
          <p className="text-white font-thin text-base">arnav55125@gmail.com</p>
        </div>
        <div className="grid gap-4 grid-cols-2 grid-rows-2 w-max mt-5 mb-44 ">
          <IconContext.Provider value={{ color: "white" }}>
            <div>
              <a
                className="flex items-center text-white"
                href="https://github.com/thelordzeus"
              >
                <AiOutlineGithub />
                &nbsp;Github
              </a>
            </div>
            <div>
              <a
                className="flex items-center text-white"
                href="https://www.linkedin.com/in/arnavshukla"
              >
                <AiOutlineLinkedin />
                &nbsp;Linkedin
              </a>
            </div>
            <div>
              <a
                className="flex items-center text-white"
                href="https://twitter.com/iamlordzeus"
              >
                <AiOutlineTwitter />
                &nbsp;Twitter
              </a>
            </div>
            <div>
              <a className="flex items-center text-white" href="">
                <AiOutlineInstagram />
                &nbsp;Instagram
              </a>
            </div>
          </IconContext.Provider>
        </div>
      </div>
      <div className="about-pages w-2/4 font-bold ">
        <div className="heading">
          <h1 className="text-white font-light text-4xl">Experience</h1>
        </div>
        <Cards />
      </div>
    </section>
  );
};

export default About;
