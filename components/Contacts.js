import styles from '../styles/Contacts.module.scss'
import { useEffect } from 'react'

const Contacts = ({ contacts }) => {

    useEffect(() => {
        let conts = ''
        const list = document.querySelector('.contact-list')
        contacts.forEach(contact => {
            conts += `  <li>
                            <div class=${styles.content}>
                                <div class=${styles.imgCont}>
                                    <img src="${contact.img}"/>
                                </div>
                                <div class=${styles.txtCont}>
                                    <p><span>${contact.add1}</span><span>${contact.add2}</span></p>
                                </div>
                            </div>
                        </li>`
        })
        list.innerHTML = conts
    }, [])



    return (
        <>
            <section className={styles.contact} id="hire">
                <div className="container flex">
                    <div className={styles.contactCont}>
                        <h2>Contact</h2>
                        <p>Feel free to contact me</p>
                        <ul className="contact-list">
                        </ul>
                    </div>
                </div>
            </section>
            <section className={styles.touch}>
                <div className="container flex">
                    <div className={styles.touchCont}>
                        <h2>Get in Touch</h2>
                        <form className={styles.form} id="formContact">
                            <input className={styles.name} name="name" id="name" placeholder="Name" />
                            <input className={styles.email} name="email" id="email" placeholder="Email" />
                            <textarea className={styles.message} name="message" id="message" placeholder="Message" />
                            <button type="submit" form="formContact" value="Submit">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contacts
