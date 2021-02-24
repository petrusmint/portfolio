import React, { useEffect, useState } from 'react';
import Proptypes from 'prop-types'

import styles from '../styles/Achievement.module.scss';

const Achievements = ({ achievements }) => {
  const [yrsActive, setYrsActive] = useState('0');
  const [clients, setClients] = useState('0');
  const [liveWebsites, setLiveWebsites] = useState('0');
  const [activeProjects, setActiveProjects] = useState('0');

  useEffect(() => {
    achievements.forEach((achieve) => {
      setYrsActive(achieve.yearsActive);
      setClients(achieve.clients);
      setLiveWebsites(achieve.liveWebsites);
      setActiveProjects(achieve.activeProjects);
    });
  }, []);

  return (
    <section className={styles.achievement}>
      <div className="container flex">
        <div className={styles.listCont}>
          <ul>
            <li>
              <span>{yrsActive}</span>
              <p>Years Active</p>
            </li>
            <li>
              <span>{clients}</span>
              <p>Clients</p>
            </li>
            <li>
              <span>{liveWebsites}</span>
              <p>Live Websites</p>
            </li>
            <li>
              <span>{activeProjects}</span>
              <p>Active Projects</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

Achievements.propTypes = {
  achievements: Proptypes.array,
}
