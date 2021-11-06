/** @format */

import React from "react";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useLanguage } from "../context/language";

import { projects } from "../portfolio";

export default function Projects() {
  const { lan } = useLanguage();
  return (
    <section id={lan ? "Projects" : "Proyectos"} className='section'>
      <h2 className='section--title mb-bg'>{lan ? "Projects" : "Proyectos"}</h2>
      <div className='pr__content'>
        {projects.map(({ title, description, github, deploy }, id) => (
          <ProjectItem
            key={id}
            title={title}
            description={description[lan ? "en" : "es"]}
            github={github}
            deploy={deploy}
          />
        ))}
      </div>
    </section>
  );
}

const ProjectItem = ({
  title = "Project",
  description = "",
  github,
  deploy,
}) => {
  console.log(github);
  return (
    <div className='pr__card box__shadow'>
      <div className='pr__card--content'>
        <h3 className='sub__section--title mb'>{title}</h3>
        <p className='pr__card--p mb'>{description}</p>
        <div className='pr__card--links flx__ctn'>
          <a target='_blank' href={github}>
            <FaGithub size='3rem' />
          </a>
          <a target='_blank' href={deploy}>
            <FaExternalLinkAlt size='3rem' />
          </a>
        </div>
      </div>
    </div>
  );
};

const ExternalLink = {};
