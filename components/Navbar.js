'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { BsCalendarEvent, BsInfoCircle } from 'react-icons/bs';
import { RiGalleryLine } from 'react-icons/ri';
import { FaUsersViewfinder } from 'react-icons/fa6';
import { LiaBlogSolid, LiaUserGraduateSolid } from 'react-icons/lia';

import styles from './CSS/Navbar.module.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  const navLinks = [
    {
      id: 1,
      route: '/about',
      name: 'About',
      icon: <BsInfoCircle />,
    },
    {
      id: 2,
      route: '/event',
      name: 'Event',
      icon: <BsCalendarEvent />,
    },
    {
      id: 3,
      route: '/member',
      name: 'Member',
      icon: <FaUsersViewfinder />,
    },
    {
      id: 4,
      route: '/gallery',
      name: 'Gallery',
      icon: <RiGalleryLine />,
    },
    {
      id: 5,
      route: '/alumni',
      name: 'Alumni',
      icon: <LiaUserGraduateSolid />,
    },
    {
      id: 6,
      route: '/contact',
      name: 'Contact',
      icon: <LiaUserGraduateSolid />,
    },
    {
      id: 7,
      route: '/https://blog.ietebits.com/',
      name: 'Blog',
      icon: <LiaBlogSolid />,
    },
  ];

  return (
    <>
      <div className={styles.navbar}>
        <nav>
          <Link href="/" className={styles.navLogo}>
            <Image
              src="/img/ieteLogo.png"
              alt="navLogo"
              width={40}
              height={40}
            />
            <span>IETE</span>
          </Link>
          <div className={styles.navLinkWrap}>
            {toggleMenu && (
              <div className={styles.navLink}>
                <ul>
                  {navLinks.map((el) => (
                    <li key={el.id}>
                      <Link href={el.route}>
                        <div className={styles.navNewIcon}>{el.icon}</div>
                        {el.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className={styles.navExtra}>
            <Link href="/techUdbhav">
              <div className={styles.navBtn}>
                <img src="/img/techudbhav/tulogo.png" alt="TULogo" />
                Tech Udbhav
              </div>
            </Link>
            <div className={styles.navIcon} onClick={toggleNav}>
              <HiOutlineMenuAlt3 />
            </div>
          </div>
          <div className={styles.navBorder}></div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
