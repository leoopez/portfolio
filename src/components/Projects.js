/** @format */

import React from "react";

export default function Projects() {
  return (
    <section id='projects' className='section'>
      <div className='container'>
        <h2 className='sctn--title'>Projects</h2>
        <div className='grd__ct prjcts--content'>
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
      </div>
    </section>
  );
}

const ProjectItem = () => {
  return (
    <div className='prjct--item'>
      <div className='item--content'>
        <h3 className='sbsctn--title'>Project</h3>
        <p className='prjct__item--p'>
          The Hugo Award for Best Professional Artist is given each year for
          artists of works related to science fiction or fantasy released in the
          previous calendar year.
        </p>
        <div className='flx__ct--center'></div>
      </div>
    </div>
  );
};
