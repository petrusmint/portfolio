import styles from '../styles/About.module.scss'

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className="container flex">
                <div className={styles.imgCont}>
                    <img src="/peter.jpg" width="330px" height="auto" />
                </div>
                <div className={styles.textCont}>
                    <h2>About Me</h2>
                    <p>Hi, for now i don’t have content for my information but please see my resume or CV
                    . Thanks for your time and have a nice day!</p>
                    <hr />
                    <ul>
                        <li><span>Name: </span>Peter Paul Villarino</li>
                        <li><span>Email: </span>peterpaulvillarino@gmail.com</li>
                        <li><span>Age: </span>22 yrs old</li>
                        <li><span>Address: </span>Cebu, Philippines</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

