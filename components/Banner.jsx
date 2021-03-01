import React, { useState, useEffect } from 'react'
import Typed from 'typed.js'
import PropTypes from 'prop-types'

import styles from '../styles/Home.module.scss'

const Banner = ({ socials }) => {
  const [links, useLinks] = useState([])

  useEffect(() => {
    // Type JS
    const options = {
      strings: ['Developer', 'Designer'],
      typeSpeed: 100,
      backSpeed: 100,
      startDelay: 1000,
      smartBackspace: false,
      loop: true,
    }
    const dev = document.querySelector('.developer')
    dev.textContent = ''
    const typed = new Typed('.developer', options)

    // Parallax Scroll
    window.addEventListener('scroll', () => {
      const target = document.querySelector('.banner')
      const scrolled = window.pageYOffset
      const rate = scrolled * 0.5

      target.style.backgroundPosition = `center ${rate}px`
    })

    // Populate Social State
    socials.forEach((social) => {
      const elem = document.querySelectorAll('.socials')
      elem.forEach((link) => {
        if (social.title === link.dataset.link) {
          link.href = social.src
        }
      })
    })
    useLinks(socials)

    // Hide Address bar on andriod
    window.scrollTo(0, 1)
  }, [])

  return (
    <>
      <div className={`banner ${styles.banner}`} id="parallax">
        <div className={`container ${styles.flexScroll}`}>
          <div className={styles.overlay} />
          <div className={styles.text}>
            <h3>Hello,</h3>
            <h2>
              I&apos;m a&nbsp;
              <strong className="developer">Developer</strong>
            </h2>
            <p>I Code Magic</p>
            <a href="#hire">Hire Me</a>
          </div>
          <div className={styles.links}>
            <a
              className={`socials ${styles.facebook}`}
              aria-hidden="true"
              aria-label="facebook"
              data-link="facebook"
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              dangerouslySetInnerHTML={{ __html: '' }}
            />
            <a
              className={`socials ${styles.instagram}`}
              aria-hidden="true"
              aria-label="instagram"
              data-link="instagram"
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              dangerouslySetInnerHTML={{ __html: '' }}
            />
            <a
              className={`socials ${styles.linkedin}`}
              aria-hidden="true"
              aria-label="linkedin"
              data-link="linkedin"
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              dangerouslySetInnerHTML={{ __html: '' }}
            />
            <a
              className={`socials ${styles.github}`}
              aria-hidden="true"
              aria-label="github"
              data-link="github"
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              dangerouslySetInnerHTML={{ __html: '' }}
            />
          </div>
          <span className={styles.scroll}><a href="/#about">Scroll</a></span>
        </div>
      </div>
    </>
  )
}

export default Banner

Banner.propTypes = {
  socials: PropTypes.array,
}
