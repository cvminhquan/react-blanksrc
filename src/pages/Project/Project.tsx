import React from 'react';
import styles from './Project.module.scss';
import fairyTail from '/src/assets/img/papmall_full.png'
// import Gymate from "../images/gymate-home.webp";
// import Raouf from "../images/ecom.webp";
// import CarRental from "../images/car-rental-full.webp";
// import CoinDom from "../images/coindom-full.png";
import ProjectBox from '~/components/ProjectBox/ProjectBox'
import { projects } from '~/data/project'
const Project: React.FC = (props) => {

  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className={styles.projectContent}>
          <div className={styles["text-side"]}>
            <h3>portfolio</h3>
            <h4>Each project is a unique piece of development 🧩</h4>
            </div>
            <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
                <ProjectBox
                  key={index}
                  title={project.title}
                  date={project.date}
                  description={project.description}
                  img={project.img}
                  tech={project.techno}
                  code={project.code}
                  demo={project.demo}
                  scrollY={project.scrollY}
                  icon={project.icon}
                />
              ))}
            </div>
          </div>
          {/* <h2 className="new-projects">New projects coming soon.. 🤠</h2> */}
        </div>
      </section>
    </>
  );
}

export default Project;