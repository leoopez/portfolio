/** @format */

import React from "react";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import { projects } from "../portfolio";

export default function Projects() {
  return (
    <section id='projects' className='section'>
      <h2 className='section--title mb-bg'>Projects</h2>
      <div className='pr__content'>
        {projects.map(({ title, description }, id) => (
          <ProjectItem key={id} title={title} description={description} />
        ))}
      </div>
    </section>
  );
}

const ProjectItem = ({ title = "Project", description = "" }) => {
  return (
    <div className='pr__card box__shadow'>
      <div className='pr__card--content'>
        <h3 className='sub__section--title mb'>{title}</h3>
        <p className='pr__card--p mb'>{description.en}</p>
        <div className='pr__card--links flx__ctn'>
          <FaGithub size='3rem' />
          <FaExternalLinkAlt size='3rem' />
        </div>
      </div>
    </div>
  );
};
