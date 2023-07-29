import React from 'react'
import styles from './CSS/Footer.module.css'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.top}>
                    <div className={styles.logoDetails}>
                        <img src="/img/ieteLogo.png" alt="" />
                        <span className={styles.logo_name}>IETE</span>
                    </div>
                    <div className={styles.mediaIcons}>
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedinIn /></a>
                        <a href="#"><FaYoutube /></a>
                    </div>
                </div>
                <div className={styles.linkBoxes}>
                    <ul className={styles.box}>
                        <li className={styles.link_name}>IETE</li>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/contact">Contact us</Link></li>
                        <li><Link href="/about">About us</Link></li>
                        <li><Link href="/event">Events</Link></li>
                    </ul>
                    <ul className={styles.box}>
                        <li className={styles.link_name}>Find Us</li>
                        <li>BIT Sindri</li>
                        <li>828123, Dhanbaad</li>
                        <li>Jharkhand</li>
                    </ul>
                    <ul className={styles.box}>
                        <li className={styles.link_name}>Contact Us</li>
                        <li>ietebits@gmail.com</li>
                        <li>+91-6205322261 </li>
                        <li>+91-7004178568 </li>
                    </ul>
                    <ul className={`${styles.box} ${styles.inputBox}`}>
                        <li className={styles.link_name}>Get in touch</li>
                        <li><input type="text" placeholder="Enter your email" /></li>
                        <li><input type="button" value="Send" /></li>
                    </ul>
                </div>
            </div>
            <div className={styles.bottomDetails}>
                <div className={styles.bottom_text}>
                    <span className={styles.copyright_text}>Copyright © 2023 <a href="#">IETE SF.</a>All rights reserved</span>
                    <span className={styles.policy_terms}>
                        Designed & Developed By:
                        <a href="https://imalive.netlify.app">Team IETE</a>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer