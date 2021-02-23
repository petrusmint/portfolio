import { useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Projects.module.scss';

export default function Project({ projects }) {
  useEffect(() => {
    const projectCont = document.querySelector('.project-list');
    let list = '';
    projects.forEach((proj) => {
      list += `<li><a href="${proj.link}"><img src="${proj.img}"/><span>${proj.title}</span></a></li>`;
    });
    projectCont.innerHTML = list;
  }, []);

  return (
    <section className={styles.projects} id="project">
      <div className="container flex">
        <div className={styles.projectCont}>
          <h2>Projects</h2>
          <p>What I've Built so far</p>
          <div className={styles.projectsList}>
            <ul className="project-list" />
          </div>
          <Link href="/projects"><a className={styles.view}>View More</a></Link>
        </div>
      </div>
    </section>
  );
}
