import React from "react";
import { Cloud, renderSimpleIcon } from "react-icon-cloud";
import {
  siJavascript,
  siTailwindcss,
  siBootstrap,
  siHtml5,
  siReact,
  siNodedotjs,
  siExpress,
  siCss3,
  siGit,
  siGithub,
  siJquery,
  siFirebase,
  siFigma,
  siC,
  siCplusplus,
} from "simple-icons/icons";

const icons = [
  siBootstrap,
  siHtml5,
  siJavascript,
  siReact,
  siTailwindcss,
  siNodedotjs,
  siExpress,
  siCss3,
  siGit,
  siGithub,
  siJquery,
  siFirebase,
  siFigma,
  siC,
  siCplusplus,
].map((icon) => {
  return renderSimpleIcon({
    icon,
    size: 80,
    aProps: {
      onClick: (e) => e.preventDefault(),
    },
  });
});

const Skills = () => {
  const options = {
    noMouse: true,
    pinchZoom: true,
    maxSpeed: 0.02,
    initial:[0.8,-0.3]
  };
  return (
    <div className="CloudTag">
<Cloud options={options}>
      {icons}

      <a
        href="https://emojipedia.org/globe-showing-americas/"
        target="_blank"
        rel="noopener"
      >
        <img
          height="50"
          width="50"
          alt="#"
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/globe-showing-americas_1f30e.png"
        />
      </a>
    </Cloud>
    </div>
    
  );
};

export default Skills;
