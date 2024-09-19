'use client';

import { BsRobot, BsStars } from 'react-icons/bs';
import styles from './page.module.css';
import { FaBlog, FaGifts, FaUsers } from 'react-icons/fa';
import { FaUsersGear } from 'react-icons/fa6';
import { PiChalkboardTeacherFill } from 'react-icons/pi';
import { GiDiamondTrophy, GiTeacher } from 'react-icons/gi';
import { MdPostAdd } from 'react-icons/md';
import { ImBlogger } from 'react-icons/im';
import { BiCalendarEvent } from 'react-icons/bi';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);

  return (
    <div className={styles.homePage}>
      <div className={styles.homePageWrap}>
        <div className={styles.hpwNew}>
          <BsStars />A club with subtle difference!
        </div>
        {/* <div className={styles.hpwHeading}>Simplemente El Mejor!</div> */}
        <div className={styles.hpwHeading}>IETE STUDENTS' FORUM</div>
        <div className={styles.homeWelcomeWrap}>
          {/* <div
            className={styles.hpwHeadingWelcome}
            data-text="Welcomes Batch 2K23"
          >
            Welcomes Batch 2K23
          </div> */}
        </div>
        <a
          href="https://forms.gle/z9KH5hbKXnmQayXv9"
          className={styles.homeWelcomeBtn}
        >
          JOIN US
        </a>
        <div className={styles.hpwPara}>
          IETE Students' Forum, BIT Sindri is a sub branch of IETE National body
          operating through various centers, spread all over India and abroad.
          Our aim is the empowerment of youth through technical education and
          skill development.
        </div>
      </div>

      {/* <img className={styles.homeBg} src="/img/home/bg.webp" alt="image" /> */}
      <video autoPlay loop muted playsInline className={styles.bgVideo}>
        <source
          src="/img/home/cbg.mp4"
          type="video/mp4"
          style={{ width: '500px', height: '500px' }}
        />
      </video>

      <div className={styles.dotBoxWrap}>
        <a href="https://youtu.be/cQc7HDH8FEw">
          <div
            className={`${styles.homeDotBox} ${styles.homeDotBox1}`}
            data-aos="fade-right"
          >
            <img
              src="/img/home/homecode.jpg"
              className={styles.hdbImg}
              alt="image"
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '.32rem',
              }}
            >
              <div className={styles.hdbHeading}>Coding</div>
              <div className={styles.hdbPara}>
                We provide an environment of coding and Web Dev.
              </div>
            </div>
          </div>
        </a>
        <a href="https://www.youtube.com/watch?v=S1PhRa3Ty54&list=PLyBrbcx2_359jonzTDYvB4oO-XSQlw4cl&pp=iAQB">
          <div
            className={`${styles.homeDotBox} ${styles.homeDotBox2}`}
            data-aos="fade-left"
          >
            <img
              src="/img/home/homegraphic.jpg"
              className={styles.hdbImg}
              alt="image"
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '.32rem',
              }}
            >
              <div className={styles.hdbHeading}>Graphic Desg.</div>
              <div className={styles.hdbPara}>
                Graphic Designing is the core of Each student in IETE.
              </div>
            </div>
          </div>
        </a>
        <a href="https://youtu.be/R4E62IMw_mg">
          <div
            className={`${styles.homeDotBox} ${styles.homeDotBox3}`}
            data-aos="fade-left"
          >
            <img
              src="/img/home/homerobot.jpg"
              className={styles.hdbImg}
              alt="image"
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '.32rem',
              }}
            >
              <div className={styles.hdbHeading}>Robotics</div>
              <div className={styles.hdbPara}>
                Afraid of Robotics, We are here to help you.
              </div>
            </div>
          </div>
        </a>
        <a href="https://youtu.be/OwaWiT_9uCg">
          <div
            className={`${styles.homeDotBox} ${styles.homeDotBox4}`}
            data-aos="fade-left"
          >
            <img
              src="/img/home/homevideo.png"
              className={styles.hdbImg}
              alt="image"
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '.32rem',
              }}
            >
              <div className={styles.hdbHeading}>Video Editing</div>
              <div className={styles.hdbPara}>
                We in the field of Video Editing
              </div>
            </div>
          </div>
        </a>
        <a href="https://youtu.be/aUepRSlLb2g">
          <div
            className={`${styles.homeDotBox} ${styles.homeDotBox5}`}
            data-aos="fade-left"
          >
            <img
              src="/img/home/homemanage.jpg"
              className={styles.hdbImg}
              alt="image"
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '.32rem',
              }}
            >
              <div className={styles.hdbHeading}>Management</div>
              <div className={styles.hdbPara}>
                We also teach management, as we are Techno-management club.
              </div>
            </div>
          </div>
        </a>
        <a href="https://youtu.be/zQVAXRDXcBs">
          <div
            className={`${styles.homeDotBox} ${styles.homeDotBox6}`}
            data-aos="fade-left"
          >
            <img
              src="/img/home/homeai.jpg"
              className={styles.hdbImg}
              alt="image"
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '.32rem',
              }}
            >
              <div className={styles.hdbHeading}>AI/ML</div>
              <div className={styles.hdbPara}>The emerging field of AI.</div>
            </div>
          </div>
        </a>
      </div>

      <div className={styles.heroBottom}>
        <div className={styles.heroBottomWrap} data-aos="fade-up">
          <div className={styles.subHeadingWrap}>
            <div className={styles.subHeading}>
              <FaUsers />
              Who we are
            </div>
          </div>
          <div className={styles.heading}>Brief History</div>
          <div className={styles.heroBottomBrief}>
            <img src="/img/home/member.jpeg" alt="image" />
            <div className={styles.heroBottomBriefText}>
              IETE Students Chapter, BIT Sindri was established in the year
              2007, since then it is one of the fastest-growing clubs of BIT
              Sindri. In June 2020 we have attained an even higher and more
              notable level, yes we are now IETE Students Forum. IETE Students
              Forum, BIT Sindri is a sub branch of IETE National body operating
              through various centers, spread all over India and abroad. Our aim
              is the empowerment of youth through technical education and skill
              development.
            </div>
          </div>
        </div>
      </div>

      <div className={styles.whatWeDo}>
        <div className={styles.whatWeDoWrap}>
          <div className={styles.subHeadingWrap}>
            <div className={styles.subHeading}>
              <FaUsersGear />
              What we do
            </div>
          </div>
          <div className={styles.heading}>Iete at bit sindri</div>

          <div className={styles.aboutBriefDes}>
            <a href="https://www.youtube.com/watch?v=j8LvyKDkcCc&list=PLyBrbcx2_35-tt7ZskPrKj4_xnDPWB684&pp=iAQB">
              <div className={styles.abdCard}>
                <div className={styles.abdcIcon}>
                  <PiChalkboardTeacherFill />
                </div>
                <div className={styles.abdcHeading}>Webinars and Seminars</div>
                <div className={styles.abdcPara}>
                  We organize Webinars and Seminars on topics such as Cyber
                  Security and Ethical Hacking, Internet of Things etc.
                </div>
              </div>
            </a>

            <a href="https://www.youtube.com/watch?v=jN-iPjw_XUg&list=PLyBrbcx2_3580J3CQbmLz0Yy5xE39ObKK&pp=iAQB">
              <div className={styles.abdCard}>
                <div className={styles.abdcIcon}>
                  <GiTeacher />
                </div>
                <div className={styles.abdcHeading}>
                  Workshops on Technologies
                </div>
                <div className={styles.abdcPara}>
                  Workshops on trending topics such as Cyber Security and
                  Ethical Hacking, Internet of Things, Web Development, APIs and
                  many more.
                </div>
              </div>
            </a>

            <a href="https://techudbhav.ietebits.com/">
              <div className={styles.abdCard}>
                <div className={styles.abdcIcon}>
                  <GiDiamondTrophy />
                </div>
                <div className={styles.abdcHeading}>
                  Tech Udbhav: Annual Event
                </div>
                <div className={styles.abdcPara}>
                  Tech Udbhav are specially choosen and designed for the
                  students so that they can use and enhance their Technical and
                  Managerial skills
                </div>
              </div>
            </a>

            <a href="https://www.instagram.com/ietebits/">
              <div className={styles.abdCard}>
                <div className={styles.abdcIcon}>
                  <MdPostAdd />
                </div>
                <div className={styles.abdcHeading}>
                  Technical Posts and Videos
                </div>
                <div className={styles.abdcPara}>
                  To keep the students updated, we regularly post the
                  developments in latest technologies in the very way of Tech
                  Drive
                </div>
              </div>
            </a>

            <a href="https://in.linkedin.com/company/iete-students-chapter-bit-sindri123">
              <div className={styles.abdCard}>
                <div className={styles.abdcIcon}>
                  <FaBlog />
                </div>
                <div className={styles.abdcHeading}>
                  Weekly Blog Post on Linkedin
                </div>
                <div className={styles.abdcPara}>
                  Regularly post blogs on new technologies on our blog site
                  (IETE Blog Site).
                </div>
              </div>
            </a>

            <a href="https://youtu.be/R4E62IMw_mg">
              <div className={styles.abdCard}>
                <div className={styles.abdcIcon}>
                  <BsRobot />
                </div>
                <div className={styles.abdcHeading}>
                  Technical skill Enhancement
                </div>
                <div className={styles.abdcPara}>
                  We organize small interactive sessions to teach students
                  technical stuffs like Web Development, Arduino and
                  Micro-controllers, Video Editing and many more
                </div>
              </div>
            </a>

            <a href="https://youtu.be/dferuBDSwiw">
              <div className={styles.abdCard}>
                <div className={styles.abdcIcon}>
                  <BiCalendarEvent />
                </div>
                <div className={styles.abdcHeading}>
                  Monthly Events and Giveaways
                </div>
                <div className={styles.abdcPara}>
                  Events like Unicorn, Online quizzing and In-house gaming
                  events.
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.events}>
        <div className={styles.eventsWrap}>
          <div className={styles.subHeadingWrap}>
            <div className={styles.subHeading}>
              <FaGifts />
              What we serve
            </div>
          </div>
          <div className={styles.heading}>Latest Events</div>

          <div className={styles.eventsList}>
            <a
              // href="https://www.youtube.com/live/Y5DQ3ZK6-rs?feature=share"
              // target="_blank"
              className={styles.eventCard}
            >
              <img src="/img/home/crimial.webp" alt="image" />

              <div className={styles.eventCardInfo}>
                <div className={styles.eciName}>Webinar: New Criminal Laws</div>
                <div className={styles.eciDate}>Date: 28-06-2024</div>
                <div className={styles.eciLink}></div>
              </div>
              </a>

            <a
              // href="https://youtu.be/E0FGIxbe4pc"
              // target="_blank"
              className={styles.eventCard}
            >
              <img src="/img/home/techfest1.jpg" alt="image" />

              <div className={styles.eventCardInfo}>
                <div className={styles.eciName}>Tech Udbhav</div>
                <div className={styles.eciDate}>Date: 03-05-2024</div>
                <div className={styles.eciLink}></div>
              </div>
              </a>

             <a
              // href="http://www.ietebits.com/"
              // target="_blank"
              className={styles.eventCard}
            > 
              <img src="/img/home/bgmi1.jpg" alt="image" />

              <div className={styles.eventCardInfo}>
                <div className={styles.eciName}>BGMI Campus Combat</div>
                <div className={styles.eciDate}>Date: 10-03-2024</div>
                <div className={styles.eciLink}></div>
              </div>
              </a>

            <a
              // href="https://www.youtube.com/live/newY0JpJqqw?feature=share"
              // target="_blank"
              className={styles.eventCard}
            >
              <img src="/img/home/30days.webp" alt="image" />

              <div className={styles.eventCardInfo}>
                <div className={styles.eciName}>30-Days Challenge</div>
                <div className={styles.eciDate}>Date: 07-07-2023</div>
                <div className={styles.eciLink}></div>
              </div>
              </a>

            <a
              // href="https://www.youtube.com/live/XpAnexnjr94?feature=share"
              // target="_blank"
              className={styles.eventCard}
            >
              <img src="/img/home/clue.jpg" alt="image" />

              <div className={styles.eventCardInfo}>
                <div className={styles.eciName}>
                  CLU-E-MINATI 2.0
                </div>
                <div className={styles.eciDate}>Date: 18-09-2023</div>
                <div className={styles.eciLink}></div>
              </div>
            </a>

            <a
              // href="https://youtu.be/dferuBDSwiw"
              // target="_blank"
              className={styles.eventCard}
            >
              <img src="/img/home/1e7.webp" alt="image" />

              <div className={styles.eventCardInfo}>
                <div className={styles.eciName}> Kreatrix</div>
                <div className={styles.eciDate}>Date: 19-08-2023</div>
                <div className={styles.eciLink}></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
