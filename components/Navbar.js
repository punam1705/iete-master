'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from './CSS/Navbar.module.css'
import Image from 'next/image'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { BsCalendar2EventFill, BsCalendarEvent, BsInfoCircle } from 'react-icons/bs'
import { RiGalleryFill, RiGalleryLine } from 'react-icons/ri'
import { FaGraduationCap } from 'react-icons/fa'
import { FaUsersViewfinder } from 'react-icons/fa6'
import { LiaBlogSolid, LiaUserGraduateSolid } from 'react-icons/lia'
import { BiSolidHome } from 'react-icons/bi'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname()
    const [toggleMenu, setToggleMenu] = useState(false)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        setToggleMenu(false); // close the navigation panel
    }, [pathname]);
    return (
        <>
            <div className={styles.navbar}>
                <nav>
                    <Link href='/' className={styles.navLogo}>
                        <Image src='/img/ieteLogo.png' alt='navLogo' width={40} height={40} />
                        <span>IETE</span>
                    </Link>
                    <div className={styles.navLinkWrap}>
                        <div className={styles.navLink}>
                            <ul>
                                <li><Link href='/'><div className={styles.navNewIcon}><BiSolidHome /></div>Home</Link></li>
                                <li><Link href='/about'><div className={styles.navNewIcon}><BsInfoCircle /></div>About</Link></li>
                                <li><Link href='/event'><div className={styles.navNewIcon}><BsCalendarEvent /></div>Events</Link></li>
                                <li><Link href='/member'><div className={styles.navNewIcon}><FaUsersViewfinder /></div>Members</Link></li>
                                <li><Link href='/gallery'><div className={styles.navNewIcon}><RiGalleryLine /></div>Gallery</Link></li>
                                <li><Link href='/alumni'><div className={styles.navNewIcon}><LiaUserGraduateSolid /></div>Alumni</Link></li>
                                <li><Link href='/contact'><div className={styles.navNewIcon}><LiaUserGraduateSolid /></div>Contact</Link></li>
                                <li><a href='https://blog.ietebits.com/'><div className={styles.navNewIcon}><LiaBlogSolid /></div>Blogs</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.navExtra}>
                        <Link href='/techUdbhav'>
                            <div className={styles.navBtn}> <img src='/img/techudbhav/tulogo.png' alt='TULogo' />Tech Udbhav</div>
                        </Link>
                        <div className={styles.navIcon} onClick={toggleNav}><HiOutlineMenuAlt3 /></div>
                    </div>

                    {
                        toggleMenu && (
                            <div className={styles.mobileNav}>
                                <ul>
                                    <li><Link href='/'><div className={styles.navNewIcon}><BiSolidHome /></div>Home</Link></li>
                                    <li><Link href='/about'><div className={styles.navNewIcon}><BsInfoCircle /></div>About</Link></li>
                                    <li><Link href='/event'><div className={styles.navNewIcon}><BsCalendarEvent /></div>Events</Link></li>
                                    <li><Link href='/member'><div className={styles.navNewIcon}><FaUsersViewfinder /></div>Members</Link></li>
                                    <li><Link href='/gallery'><div className={styles.navNewIcon}><RiGalleryLine /></div>Gallery</Link></li>
                                    <li><Link href='/alumni'><div className={styles.navNewIcon}><LiaUserGraduateSolid /></div>Alumni</Link></li>
                                    <li><Link href='/contact'><div className={styles.navNewIcon}><LiaUserGraduateSolid /></div>Contact</Link></li>
                                    <li><a href='https://blog.ietebits.com/'><div className={styles.navNewIcon}><LiaBlogSolid /></div>Blogs</a></li>
                                </ul>
                            </div>
                        )
                    }

                    <div className={styles.navBorder}></div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
