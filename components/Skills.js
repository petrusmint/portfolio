import styles from '../styles/Skills.module.scss'
import { useEffect } from 'react'

const Skills = () => {
    useEffect(() => {
        let progress = document.querySelectorAll('.progressBar')
        progress.forEach(prog => {
            prog.style.width = `${prog.dataset.progress}%`
        });
    }, [])

    return (
        <section className={styles.skills}>
            <div className="container flex">
                <div className={styles.textCont}>
                    <h2>My Skills</h2>
                    <p>Throughout my career, I’ve developed several skills in creating websites. It’s not much but I’m still learning</p>
                </div>
                <div className={styles.textCont}>
                    <ul>
                        <li>
                            <p>Wordpress <span>80%</span></p>
                            <div className={styles.progressBar}>
                                <p className='progressBar' data-progress="80"></p>
                            </div>
                        </li>
                        <li>
                            <p>HTML & CSS <span>90%</span></p>
                            <div className={styles.progressBar}>
                                <p className='progressBar' data-progress="90"></p>
                            </div>
                        </li>
                        <li>
                            <p>PHP <span>75%</span></p>
                            <div className={styles.progressBar}>
                                <p className='progressBar' data-progress="75"></p>
                            </div>
                        </li>
                        <li>
                            <p>ReactJS <span>70%</span></p>
                            <div className={styles.progressBar}>
                                <p className='progressBar' data-progress="70"></p>
                            </div>
                        </li>
                        <li>
                            <p>Redux <span>70%</span></p>
                            <div className={styles.progressBar}>
                                <p className='progressBar' data-progress="70"></p>
                            </div>
                        </li>
                        <li>
                            <p>NextJS <span>70%</span></p>
                            <div className={styles.progressBar}>
                                <p className='progressBar' data-progress="70"></p>
                            </div>
                        </li>
                        <li>
                            <p>NodeJS <span>70%</span></p>
                            <div className={styles.progressBar}>
                                <p className='progressBar' data-progress="70"></p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Skills
