'use client'

import React from 'react'
import { BsStars } from 'react-icons/bs'
import styles from './page.module.css'
import { FaLinkedin } from 'react-icons/fa6'
import Tilt from "react-parallax-tilt";

import { useEffect } from 'react'

const Page = () => {



    return (
        <div className={styles.memberPage}>
            <div className={styles.memberPageWrap}>
                <div className={styles.mpwNew}><BsStars />The Backbone of IETE</div>
                <div className={styles.mpwHeading}>Our Members</div>
                <div className={styles.mpwPara}>
                    Welcome to our Exciting realms of technology, coding, engineering and robotics.Discover, learn and collaborate with like minded individuals, pushing the boundries of innovation.
                </div>
            </div>

            <div className={styles.memberListWrap}>
                <div className={styles.memberBox}>

                    <div className={styles.heading}>Office Bearers</div>

                    <div className={styles.memberWrapper}>
                        <Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k19/harsha.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Harsha Sinha</h2>
                                    <p>Ex-Chairperson</p>

                                    <div className={styles.memberSubText}>
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt>
                        <Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k19/himanshu.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Himanshu Jaiswal</h2>
                                    <p>Ex-vice chairperson</p>

                                    <div className="memberSubText">
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt>
                        <Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k19/shubhangi.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Shubhangi Anand</h2>
                                    <p>Ex-vice chairperson</p>

                                    <div className="memberSubText">
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt><Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k19/dhiraj.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Dhiraj Pandey</h2>
                                    <p>Ex-general secretary</p>

                                    <div className="memberSubText">
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt><Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k19/laxmi.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Laxmi Sharma</h2>
                                    <p>Ex-joint secretary</p>

                                    <div className="memberSubText">
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt><Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k19/abhishek.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Abhishek Ranjan</h2>
                                    <p>technical head</p>

                                    <div className="memberSubText">
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt><Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k19/anjalik.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Anjali Kumari</h2>
                                    <p>technical secretary</p>

                                    <div className="memberSubText">
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt><Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k19/harshit.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Harshit Pallove</h2>
                                    <p>creative and design head</p>

                                    <div className="memberSubText">
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt><Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k19/simran.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Simran</h2>
                                    <p>Head of Opr. and event in-charge</p>

                                    <div className="memberSubText">
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt><Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k19/ayush.webp" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Ayush Vijayant</h2>
                                    <p>Treasurer and sponshership head</p>

                                    <div className="memberSubText">
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt><Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k19/taniya.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Taniya Kumari</h2>
                                    <p>media & marketing head</p>

                                    <div className="memberSubText">
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt><Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k19/ravi.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Ravi Kumar</h2>
                                    <p>alumni & PRO Incharge</p>

                                    <div className="memberSubText">
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt><Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k19/juhi.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Juhi Sinha</h2>
                                    <p>Alumni Incharge & PRO</p>

                                    <div className="memberSubText">
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt><Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k19/anjalip.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Anjali Priya</h2>
                                    <p>joint treasurer</p>

                                    <div className="memberSubText">
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt>
                    </div>

                </div>

                <div className={styles.memberBox}>

                    <div className={styles.heading}>Office Bearers</div>

                    <div className={styles.memberWrapper}>
                        <Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k20/rajat.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Rajat Choudhary</h2>
                                    <p>Chairperson</p>

                                    <div className={styles.memberSubText}>
                                        <h4>Computer Science</h4>
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt>
                        <Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k20/mukund.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Mukund Parasher</h2>
                                    <p>vice chairperson</p>

                                    <div className="memberSubText">
                                        <h4>information technology</h4>
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt>
                        <Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k20/megha.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Megha</h2>
                                    <p>vice chairperson</p>

                                    <div className="memberSubText">
                                        <h4>information technology</h4>
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt><Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k20/rana.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>rana randeep</h2>
                                    <p>general secretary</p>

                                    <div className="memberSubText">
                                        <h4>Mechanical Engineering</h4>
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt><Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k20/muskan.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>muskan naaz</h2>
                                    <p>joint secretary</p>

                                    <div className="memberSubText">
                                        <h4>Chemical Engineering</h4>
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt><Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k20/sandeep.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Sandeep Kr. Hembrom</h2>
                                    <p>technical head</p>

                                    <div className="memberSubText">
                                        <h4>computer science</h4>
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt><Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k20/shreya.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>shreya prabha</h2>
                                    <p>technical secretary</p>

                                    <div className="memberSubText">
                                        <h4>Electrical Engineering</h4>
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt><Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k20/vaidehi.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Vaidehi singh</h2>
                                    <p>creative and design head</p>

                                    <div className="memberSubText">
                                        <h4>Electrical engineering</h4>
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt><Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k20/vijay.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Vijay Lowada</h2>
                                    <p>Head of Opr. and event in-charge</p>

                                    <div className="memberSubText">
                                        <h4>Elec. & com. engineering</h4>
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt><Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k20/aman.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Aman Kr. Singh</h2>
                                    <p>Treasurer and sponshership head</p>

                                    <div className="memberSubText">
                                        <h4>Information Technology</h4>
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt><Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k20/avinav.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Avinav Raj singh</h2>
                                    <p>media & marketing head</p>

                                    <div className="memberSubText">
                                        <h4>chemical engineering</h4>
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt><Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k20/aniket.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>aniket kr. gupta</h2>
                                    <p>alumni & PRO Incharge</p>

                                    <div className="memberSubText">
                                        <h4>Electrical Engineering</h4>
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt><Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k20/manisha.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Manisha kumari</h2>
                                    <p>Alumni Incharge & PRO</p>

                                    <div className="memberSubText">
                                        <h4>Mechanical Engineering</h4>
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt><Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k20/ruma.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Ruma Rupal</h2>
                                    <p>joint treasurer</p>

                                    <div className="memberSubText">
                                        <h4>Civil Engineering</h4>
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt>
                    </div>

                </div>

                <div className={styles.memberBox}>

                    <div className={styles.heading}>New Comers</div>

                    <div className={styles.memberWrapper}>
                        <Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k21/Adarsh.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Adarsh Trivedi</h2>
                                    <p>Competitive Programming</p>

                                    <div className="memberSubText">
                                        <h4>Information Technology</h4>
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt><Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k21/Ashish.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Ashish Singh</h2>
                                    <p>Video Editing</p>

                                    <div className="memberSubText">
                                        <h4>Mining Engineering</h4>
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt><Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k21/Priyanshu.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Priyanshu Mukherjee</h2>
                                    <p>PRO</p>

                                    <div className="memberSubText">
                                        <h4>Electrical Engineering</h4>
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt><Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k21/Supriya.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Supriya Sharma</h2>
                                    <p>Graphics Designing</p>

                                    <div className="memberSubText">
                                        <h4>Chemical Engineering</h4>
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt><Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k21/Deepak.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Deepak Kumar</h2>
                                    <p>Web Developement</p>

                                    <div className="memberSubText">
                                        <h4>Information Technology</h4>
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt><Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k21/Avinash.jpeg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Avinash Yadav</h2>
                                    <p>Video Editing</p>

                                    <div className="memberSubText">
                                        <h4>Mechanical Engineering</h4>
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt><Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k21/Saron.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Saron Mukti Ekta</h2>
                                    <p>Video Editing</p>

                                    <div className="memberSubText">
                                        <h4>Electrical Engineering</h4>
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt><Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k21/Rahul_J.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Rahul Jha</h2>
                                    <p>Web Developer</p>

                                    <div className="memberSubText">
                                        <h4>Elec. & Com. Engineering</h4>
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt><Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k21/Rishita.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Rishita Dutta</h2>
                                    <p>Content Writer</p>

                                    <div className="memberSubText">
                                        <h4>Prod. & Ind. Engineering</h4>
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt><Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k21/Rohit.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Rohit Kr. Grihi</h2>
                                    <p>Graphic Designing</p>

                                    <div className="memberSubText">
                                        <h4>Information Technology</h4>
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt><Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k21/Ankita.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Ankita Ghosh</h2>
                                    <p>Graphic Designing</p>

                                    <div className="memberSubText">
                                        <h4>Information Technology</h4>
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt><Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k21/Rahul_Kr.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Rahul Kumar</h2>
                                    <p>Internet of Things</p>

                                    <div className="memberSubText">
                                        <h4>Electrical Engineering</h4>
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt><Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k21/Mehar.jpg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Mehar Talat</h2>
                                    <p>Graphic Designing</p>

                                    <div className="memberSubText">
                                        <h4>Civil Engineering</h4>
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt><Tilt>
                            <div className={styles.memberCard}>
                                <img src="/img/members/2k21/Ayushi.jpeg" alt="image" />
                                <div className={styles.memberText}>
                                    <h2>Ayushi Tewary</h2>
                                    <p>Content Writing</p>

                                    <div className="memberSubText">
                                        <h4>Prod. & Ind. Engineering</h4>
                                        <a href="#">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Page