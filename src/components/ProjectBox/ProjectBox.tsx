import React,{useState} from 'react';
import styles from './ProjectBox.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

interface ProjectBoxProps {
  title: string;
  date: string;
  description: string;
  img: string;
  tech:string[];
  code?: string;
  demo: string;
  icon: string;
  scrollY: string;
  cName?: string;
}

const ProjectBox: React.FC<ProjectBoxProps> = (props) => {
  const { title, date, description, img, tech, code, demo, icon, scrollY, cName } = props;
  const [scroll, setScroll] = useState(false);

  return (
    <div className={classNames(styles.projectBox)}>
      <div className={classNames(styles.projectPreview)}>
        <img
          src={img}
          style={{
                transform: scroll ? `translateY(${scrollY})` : "translateY(0%)",
                transition: "transform 10s ease-in-out",
              }}
              onMouseEnter={() => setScroll(true)}
              onMouseLeave={() => setScroll(false)} alt={title} title={title} />
      </div>
      <div className={classNames(styles.projectInfor)}>
        <h3 className={styles.projectName}>{title} <span className={styles.dateClass}>{date}</span></h3>
        <p className={styles.projectDesc}>{description}</p>
        
        <div className={styles.tech}>
        <ul>
            {tech.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className={styles.projectAction}>
        {code && <Link to={code}>Code <FaGithub size={22} /></Link>}
          <Link to={demo}>Live Preview <MdArrowOutward size={22} /></Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectBox;
