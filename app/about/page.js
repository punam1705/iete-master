import React from 'react'
import styles from './page.module.css'
import { BsStars } from 'react-icons/bs'
import { BiSolidComponent } from 'react-icons/bi'
import { GiArtificialIntelligence, GiSpellBook, GiTrophyCup } from 'react-icons/gi'
import { PiExamFill } from 'react-icons/pi'

const page = () => {
    return (
        <div className={styles.aboutPage}>
            <div className={styles.aboutPageWrap}>
                <div className={styles.apwNew}><BsStars />We are simply the best!</div>
                <div className={styles.apwHeading}>About IETE!</div>
                <div className={styles.apwPara}>The Institution of Electronics and Telecommunication Engineers(IETE)is Indias leading recognised professional society devoted to advancment of science and technology of Electronics, Telecommunication & IT, Founded in 1953.</div>
            </div>

            <div className={styles.aboutParent}>
                <div className={styles.aboutParentWrap}>
                    <div className={styles.subHeadingWrap}>
                        <div className={styles.subHeading}><BiSolidComponent />Our Parent Body</div>
                    </div>
                    <div className={styles.heading}>IETE National Body</div>

                    <div className={styles.aboutParentText}>
                        <p>The <span style={{ fontWeight: "800", fontSize: "1.2rem" }}>Institution of Electronics and Telecommunication Engineers (IETE)</span> is Indias leading recognised professional society devoted to the advancement of Science and Technology of Electronics, Telecommunication & IT. Founded in 1953. The IETE is the National Apex Professional body of Electronics and Telecommunication, Computer Science and IT Professionals. It serves more than 1,25,000 members (including Corporate, Student and ISF members) through various 64 Centres, spread all over India and abroad.</p>
                    </div>

                    <div className={styles.objective}>
                        <div className={styles.heading}>Objective of IETE</div>
                        <div className={styles.objectiveDesWrap}>
                            <div className={styles.objectiveDes}><div className={styles.odIcon}><GiArtificialIntelligence /></div>The IETE focuses on advancement of the Science and Technology of Electronics, Telecommunication, Computers, Information Technology and related areas.</div>
                            <div className={styles.objectiveDes}><div className={styles.odIcon}><GiTrophyCup /></div>The Institution is known for providing leadership oppurtunities in Scientific and Technical areas of direct importance to the national development and economy.</div>
                            <div className={styles.objectiveDes}><div className={styles.odIcon}><GiSpellBook /></div>The IETE conducts and sponsors technical meetings, conferences, symposia, and exhibitions all over India, publishes technical journals and provides continuing education as well as career advancement opportunities to its members.</div>
                            <div className={styles.objectiveDes}><div className={styles.odIcon}><PiExamFill /></div>The IETE conducts both the Graduateship (AMIETE) Examination and Diploma (DIPIETE) Examination in Electronics & Telecommunication and Computer Science & Engineering streams.</div>
                            {/* <img src="img/ieteLogo.png" alt="" className={styles.objectiveImage}/> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.aboutProf}>
                <div className={styles.aboutProfWrap}>
                    <div className={styles.subHeadingWrap}>
                        <div className={styles.subHeading}><BiSolidComponent />Meet our Professor Incharge</div>
                    </div>
                    <div className={styles.heading}>Our professor</div>
                    <div className={styles.profWrap}>
                        <div className={styles.prof}>
                            <img src="/img/about/gs.jpg" alt="" />
                            <h2>Our Patron</h2>
                            <p>Prof (Dr.) Ghanshyam</p>
                        </div>
                        <div className={styles.prof}>
                            <img src="/img/about/imteyazsir.jpg" alt="" />
                            <h2>Our Professor Incharge</h2>
                            <p>Prof. Imteyaz Ahmed</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.aboutGlobe}>
                <div className={styles.aboutGlobeWrap}>
                    <div className={styles.subHeadingWrap}>
                        <div className={styles.subHeading}><BiSolidComponent />We cover All India</div>
                    </div>
                    <div className={styles.heading}>IETE is Around India</div>
                    <div className={styles.img}>
                        <img src="/img/about/around.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page