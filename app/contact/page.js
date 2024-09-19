import React from 'react'
import { BsStars } from 'react-icons/bs'
import styles from './page.module.css'
import { AiOutlineMail, AiOutlineMessage, AiOutlineUser } from 'react-icons/ai'
import { BiSolidComponent } from 'react-icons/bi'

const Page = () => {
    return (
        <div className={styles.contactPage}>
            <div className={styles.contactPageWrap}>
                <div className={styles.cpwNew}><BsStars />Get In Touch</div>
                <div className={styles.cpwHeading}>Contact Us</div>
            </div>

            <div className={styles.contactParent}>
                <form className={styles.contactForm}>
                    <div className={styles.subHeadingWrap}>
                        <div className={styles.subHeading}><BiSolidComponent />Leave a message</div>
                    </div>
                    <div className={styles.inputField}>
                        <AiOutlineUser />
                        <input type="text" placeholder='Name...' required/>
                    </div>
                    <div className={styles.inputField}>
                        <AiOutlineMail />
                        <input type="email" placeholder='Email...' required/>
                    </div>
                    <div className={styles.inputField}>
                        <AiOutlineMessage />
                        <input type="text" placeholder='Any Message...' required/>
                    </div>
                    <button>Send</button>
                </form>

                <div className={styles.contactExtra}>
                    <div className={styles.subHeadingWrap}>
                        <div className={styles.subHeading}><BiSolidComponent />Or Send us your query</div>
                    </div>

                    <ul>
                        <li>Any Queries</li>
                        <div>contact@ietebits.com</div>
                        <div>6205322261</div>
                    </ul>

                    <ul>
                        <li>Inductions</li>
                        <div>PRIYANSHU MUKHERJEE: +91-9142040066</div>
                        <div>ROHIT KUMAR GRIHI: +91-6200983787</div>
                       
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Page