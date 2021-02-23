import styles from '../styles/Home.module.scss'
import { useEffect } from 'react'
import Typed from 'typed.js'

export default function Banner() {
    useEffect(() => {
        let options = {
            strings: ['Developer', 'Designer'],
            typeSpeed: 100,
            backSpeed: 100,
            startDelay: 1000,
            smartBackspace: false,
            loop: true
        };

        let dev = document.querySelector('.developer')
        dev.textContent = ''
        let typed = new Typed('.developer', options);

        window.addEventListener('scroll', function (e) {
            const target = document.querySelector('.banner')
            let scrolled = window.pageYOffset
            let rate = scrolled * 0.5

            target.style.backgroundPosition = `center ${rate}px`
        })
    }, [])

    return (
        <>
            <div className={`banner ${styles.banner}`} id="parallax">
                <div className={`container ${styles.flexScroll}`}>
                    <div className={styles.overlay}></div>
                    <div className={styles.text}>
                        <h3>Hello,</h3>
                        <h2>I’m a <strong className="developer">Developer</strong></h2>
                        <p>I Code Magic</p>
                        <a>Hire Me</a>
                    </div>
                    <div className={styles.links}>
                        <a className={styles.facebook} href="https://facebook.com" target="_blank"></a>
                        <a className={styles.instagram} href="https://instagram.com" target="_blank"></a>
                        <a className={styles.linkedin} href="https://linkedin.com" target="_blank"></a>
                        <a className={styles.github} href="https://github.com" target="_blank"></a>
                    </div>
                    <span className={styles.scroll}><a href="/#about">Scroll</a></span>
                </div>
            </div>
        </>
    )
}
