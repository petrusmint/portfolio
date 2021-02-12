import styles from '../styles/Home.module.scss'
import { useEffect } from 'react'
import Typed from 'typed.js';

export default function Home() {
  useEffect(() => {
    var options = {
      strings: ['Developer', 'Designer'],
      typeSpeed: 100,
      backSpeed: 100,
      startDelay: 1000,
      smartBackspace: false,
      loop: true
    };

    let dev = document.querySelector('.developer')
    dev.textContent = ''

    var typed = new Typed('.developer', options);
  }, [])

  return (
    <>
      <div className={`banner ${styles.banner}`}>
        <div className="container">
          <div className={styles.overlay}></div>
          <div className={styles.text}>
            <h3>Hello,</h3>
            <h2>I’m a <strong className="developer">Developer</strong></h2>
            <p>I Code Magic</p>
            <a>Hire Me</a>
          </div>
        </div>
      </div>
    </>
  )
}
