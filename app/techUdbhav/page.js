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
                <div className={styles.tupwNew}><a href="https://techudbhav.ietebits.com/">VISIT TECH-UDBHAV WEBSITE</a></div>
            </div>

            <div className={styles.tuEvent}>
                <div className={styles.tuEventSide}>
                    <div className={styles.tuesHeading}>Tech Udbhav 2K23</div>
                    <img src="/img/techUdbhav/tu.jpg" alt="image" />

                    <div className={styles.tuSideText}>
                        <a href="#tu6"><div className={styles.tustPara}>Technogram</div></a>
                        <a href="#tu5"><div className={styles.tustPara}>Ui-Xplore</div></a>
                        <a href="#tu4"><div className={styles.tustPara}>Robo-Soccer</div></a>
                        <a href="#tu3"><div className={styles.tustPara}>Cod-e-clash</div></a>
                        <a href="#tu2"><div className={styles.tustPara}>Insights</div></a>
                        <a href="#tu1"><div className={styles.tustPara}>Mr. & Miss Technocrat</div></a>
                    </div>
                </div>
                <div className={styles.tuEventMain}>
                    <div className={styles.tuCard}>
                        <div className={styles.tucImg}>
                            <img src="/img/techudbhav/tu6.jpg" alt="image" />
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
                            <img src="/img/techudbhav/tu5.jpg" alt="image" />
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
                            <img src="/img/techudbhav/tu4.jpg" alt="image" />
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
                            <img src="/img/techudbhav/tu3.jpg" alt="image" />
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
                            <img src="/img/techudbhav/tu2.jpg" alt="image" />
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
                            <img src="/img/techudbhav/tu1.jpg" alt="image" />
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

            <div className={styles.tuEvent}>
                <div className={styles.tuEventSide}>
                    <div className={styles.tuesHeading}>Tech Udbhav 2K19</div>
                    <img src="/img/techUdbhav/tu19.png" alt="image" />

                    <div className={styles.tuSideText}>
                        <a href="#tu196"><div className={styles.tustPara}>Franchise of the year</div></a>
                        <a href="#tu195"><div className={styles.tustPara}>Mr. & Miss Technocrat</div></a>
                        <a href="#tu194"><div className={styles.tustPara}>Tech-Expo</div></a>
                        <a href="#tu193"><div className={styles.tustPara}>Robo-Soccer</div></a>
                        <a href="#tu192"><div className={styles.tustPara}>Insights</div></a>
                        <a href="#tu191"><div className={styles.tustPara}>Byte the Bits</div></a>
                    </div>
                </div>
                <div className={styles.tuEventMain}>
                    <div className={styles.tuCard}>
                        <div className={styles.tucImg}>
                            <img src="/img/techudbhav/tu196.jpg" alt="image" />
                            <span>Franshise of the year</span>
                        </div>
                        <div className={styles.tucText} id='tu196'>
                            <div className={styles.tuctHeading}>Franshise of the year</div>
                            <div className={styles.tuctPara}>
                                Introduced in 2K18 year the most popular event of Tech Udbhav where participants get a chance to be a franchise of an IPL team and have to contrusct the strongest team with the least resources.
                            </div>
                        </div>
                    </div>

                    <div className={styles.tuCard}>
                        <div className={styles.tucImg}>
                            <img src="/img/techudbhav/tu195.jpg" alt="image" />
                            <span></span>
                        </div>
                        <div className={styles.tucText} id='tu195'>
                            <div className={styles.tuctHeading}>Mr. & Miss Technocrat</div>
                            <div className={styles.tuctPara}>
                                It's the flagship event of Tech Udbhav where students compete with each other to be the techno-management face of the college.
                            </div>
                        </div>
                    </div>

                    <div className={styles.tuCard}>
                        <div className={styles.tucImg}>
                            <img src="/img/techudbhav/tu194.png" alt="image" />
                            <span>Tech-Expo</span>
                        </div>
                        <div className={styles.tucText} id='tu194'>
                            <div className={styles.tuctHeading}>Tech-Expo</div>
                            <div className={styles.tuctPara}>
                                It was a model making event where working model of participants are presented before a panel of judges
                            </div>
                        </div>
                    </div>

                    <div className={styles.tuCard}>
                        <div className={styles.tucImg}>
                            <img src="/img/techudbhav/tu193.jpg" alt="image" />
                            <span>RoboSoccer</span>
                        </div>
                        <div className={styles.tucText} id='tu193'>
                            <div className={styles.tuctHeading}>RoboSoccer</div>
                            <div className={styles.tuctPara}>
                                One of the most exciting events of Tech Udbhav where bots play a game of soccer and try to score as many goals as they can.
                            </div>
                        </div>
                    </div>

                    <div className={styles.tuCard}>
                        <div className={styles.tucImg}>
                            <img src="/img/techudbhav/tu192.jpg" alt="image" />
                            <span>Insight</span>
                        </div>
                        <div className={styles.tucText} id='tu192'>
                            <div className={styles.tuctHeading}>Insight</div>
                            <div className={styles.tuctPara}>
                                Insight was a technical paper presentation, where participants have to submit an abstract of the TPP on the latest technical topics and Top 10 participants are selected for the final round.
                            </div>
                        </div>
                    </div>

                    <div className={styles.tuCard}>
                        <div className={styles.tucImg}>
                            <img src="/img/techudbhav/tu191.jpg" alt="image" />
                            <span>Byte the Bits</span>
                        </div>
                        <div className={styles.tucText} id='tu191'>
                            <div className={styles.tuctHeading}>Byte the Bits</div>
                            <div className={styles.tuctPara}>
                                Byte The Bits is Online/Offline coding competition where students from other colleges can also participate and get a chance to win exciting prizes.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page