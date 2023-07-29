import React from 'react'
import { BsStars } from 'react-icons/bs'
import styles from './page.module.css'

const Page = () => {
    return (
        <div className={styles.tuPage}>
            <div className={styles.tuPageWrap}>
                <div className={styles.tupwNew}><BsStars />Our Annual Tech Fest Tech Udbhav</div>
                <div className={styles.tupwHeading}>Tech Udbhav</div>
                <div className={styles.tupwPara}>
                    Tech Udbhav is Annual Techno-Management Fest of BIT Sindri which is organised by IETE Students Forum, BIT Sindri. Tech Udbhav consists of a number of events for students to participate into it. These events are specially choosen and designed for the students so that they can use and enhance their Technical and Managerial skills and win exiciting prizes.
                </div>
            </div>

            <div className={styles.tuEvent}>
                <div className={styles.tuEventSide}>
                    <div className={styles.tuesHeading}>Tech Udbhav</div>
                    <img src="/img/techUdbhav/tu.jpg" alt="" />

                    <div className={styles.tuSideText}>
                        <a href="#tu6"><div className={styles.tustPara}>Technogram</div></a>
                        <a href="#tu5"><div className={styles.tustPara}>Ui-Xplore</div></a>
                        <a href="#tu4"><div className={styles.tustPara}>Robo-Soccer</div></a>
                        <a href="#tu3"><div className={styles.tustPara}>Cod-e-clash</div></a>
                        <a href="#tu2"><div className={styles.tustPara}>Grafitti</div></a>
                        <a href="#tu1"><div className={styles.tustPara}>Mr. & Miss Technocrat</div></a>
                    </div>
                </div>
                <div className={styles.tuEventMain}>
                    <div className={styles.tuCard}>
                        <div className={styles.tucImg}>
                            <img src="/img/techudbhav/tu6.jpg" alt="" />
                            <span>technogram</span>
                        </div>
                        <div className={styles.tucText} id='tu6'>
                            <div className={styles.tuctHeading}>Technogram</div>
                            <div className={styles.tuctPara}>
                                IETE Students Forum is here with TECHNOGRAM, a prototype-making contest on real-life problems in rural areas under the banner of Tech Udbhav23. The main challenge here is not only to face and give solutions to the rural area problems but also to come up with a working prototype solution. In this competition, you will not only showcase your creativity but also be made aware of the cases out there.
                            </div>
                        </div>
                    </div>

                    <div className={styles.tuCard}>
                        <div className={styles.tucImg}>
                            <img src="/img/techudbhav/tu5.jpg" alt="" />
                            <span>Robo Soccer</span>
                        </div>
                        <div className={styles.tucText} id='tu5'>
                            <div className={styles.tuctHeading}>Robosoccer</div>
                            <div className={styles.tuctPara}>
                                Are you looking for an opportunity to ascertain your attraction to robotics? Well then get ready for the challenge as IETE Students Forum is here with ROBOSOCCER under the banner of Tech Udbhav23. This event is a customization of a soccer game where the custom-built manually operating bots of the teams would be playing against each other. Fill Out the Google form below and must read the rules!
                            </div>
                        </div>
                    </div>

                    <div className={styles.tuCard}>
                        <div className={styles.tucImg}>
                            <img src="/img/techudbhav/tu4.jpg" alt="" />
                            <span>Ui-Xplore</span>
                        </div>
                        <div className={styles.tucText} id='tu4'>
                            <div className={styles.tuctHeading}>Ui-Xplore</div>
                            <div className={styles.tuctPara}>
                                Does dwelling deep into designing and development fascinates you? Well, IETE Students’ Forum is all set for an enthralling combination of UI/UX and coding event, UI-XPLORE under the banner of Tech Udbhav’23. If you are looking for a platform to showcase your UI/UX designing and web development skills, then get ready with your user-friendly and attractive websites for the innovative problems that you face.
                            </div>
                        </div>
                    </div>

                    <div className={styles.tuCard}>
                        <div className={styles.tucImg}>
                            <img src="/img/techudbhav/tu3.jpg" alt="" />
                            <span>Cod-e-clash</span>
                        </div>
                        <div className={styles.tucText} id='tu3'>
                            <div className={styles.tuctHeading}>Cod-e-clash</div>
                            <div className={styles.tuctPara}>
                                Programming isnt about what you know; its about what you can figure out. - Chris Pine An another exhilarating event CODE-E-CLASH under the banner of Tech Udbhav '23. Put not your programming skills, but also your observation skills to the test to win exciting prizes! Do NOT miss the opportunity to prove your competence in coding and various topics like logical thinking, general knowledge, etc., and let your neurons spark!
                            </div>
                        </div>
                    </div>

                    <div className={styles.tuCard}>
                        <div className={styles.tucImg}>
                            <img src="/img/techudbhav/tu2.jpg" alt="" />
                            <span>Grafitti</span>
                        </div>
                        <div className={styles.tucText} id='tu2'>
                            <div className={styles.tuctHeading}>Grafitti</div>
                            <div className={styles.tuctPara}>
                                Programming isnt about what you know; its about what you can figure out. - Chris Pine An another exhilarating event CODE-E-CLASH under the banner of Tech Udbhav '23. Put not your programming skills, but also your observation skills to the test to win exciting prizes! Do NOT miss the opportunity to prove your competence in coding and various topics like logical thinking, general knowledge, etc., and let your neurons spark!
                            </div>
                        </div>
                    </div>

                    <div className={styles.tuCard}>
                        <div className={styles.tucImg}>
                            <img src="/img/techudbhav/tu1.jpg" alt="" />
                            <span>Mr. & Miss Technocrat</span>
                        </div>
                        <div className={styles.tucText} id='tu1'>
                            <div className={styles.tuctHeading}>Mr. & Miss Technocrat</div>
                            <div className={styles.tuctPara}>
                                Every mountain top is within reach if you just keep climbing.Are you skimming for a stage to prove your competence and get the most sophisticated and sought-after title of the year? Well, IETE Students Forum is here with another engrossing event MR. & MS. TECHNOCRAT, under the banner of Tech Udbhav 23.<br />
                                THIS EVENT SEEKS AN OVERALL PERFORMER IN A SURFEIT OF EVENTS BEING CONDUCTED IN THE TECHMAHOTSAV.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page