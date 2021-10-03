/** @format */

import React from "react";

export default function Projects() {
  return (
    <section id='projects' className='section'>
      <h2 className='section--title mb-md'>Projects</h2>
      <div className='pr__content'>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </section>
  );
}

const ProjectItem = ({ title = "Project", description }) => {
  return (
    <div className='pr__item box__shadow'>
      <div className='pr__item--content'>
        <h3 className='sub__section--title'>{title}</h3>
        <p className='pr__item--p'>
          The Hugo Award for Best Professional Artist is given each year for
          artists of works related to science fiction or fantasy released in the
          previous calendar year.
        </p>
        <div className='flx__ct--center'></div>
      </div>
    </div>
  );
};
