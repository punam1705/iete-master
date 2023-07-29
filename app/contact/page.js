import React from 'react'
import { BsStars } from 'react-icons/bs'
import styles from './page.module.css'
import { AiOutlineMail, AiOutlineMessage, AiOutlineUser } from 'react-icons/ai'

const Page = () => {
    return (
        <div className={styles.contactPage}>
            <div className={styles.contactPageWrap}>
                <div className={styles.cpwNew}><BsStars />Get In Touch</div>

                <form className={styles.contactForm}>
                    <div className={styles.cpwHeading}>Contact Us</div>
                    <div className={styles.inputField}>
                        <AiOutlineUser />
                        <input type="text" placeholder='Name...' />
                    </div>
                    <div className={styles.inputField}>
                        <AiOutlineMail />
                        <input type="email" placeholder='Email...' />
                    </div>
                    <div className={styles.inputField}>
                        <AiOutlineMessage />
                        <input type="text" placeholder='Any Message...' />
                    </div>
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Page