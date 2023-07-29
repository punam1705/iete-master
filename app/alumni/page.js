import React from 'react'
import { BiLogoLinkedinSquare } from 'react-icons/bi'
import { BsStars } from 'react-icons/bs'
import styles from './page.module.css'
import { PiStudentDuotone } from 'react-icons/pi'

const page = () => {
    return (
        <div className={styles.alumniPage}>

            <div className={styles.alumniPageWrap}>
                <div className={styles.alumpwNew}><BsStars />We as a team, as a family!</div>
                <div className={styles.alumpwHeading}>Our Alumni</div>
                <div className={styles.alumpwPara}>
                Lets have a golden opportunity of meeting our graduate peers who are great role models for current students and are often well placed to offer practical support to students as they start their careers.
                </div>
            </div>

            <div className={styles.batchesWrap}>
                <div className={styles.batches}>

                    <div className={styles.batch} id="b_2013">
                        <div className={styles.subHeadingWrap}>
                            <div className={styles.subHeading}><PiStudentDuotone />Alumni 2K13</div>
                        </div>
                        <div className={styles.heading}>IETE 2K13</div>
                        <div className={styles.peoples}>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/Akash.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Akash Vaibhav</p>
                                    <div className={styles.blur}>
                                        <span>Akash Vaibhav</span>
                                        <img alt="" src="./img/alumni/STMicroelectronics.png" className={styles.brand} />
                                        <a className={styles.link} href="https://www.linkedin.com/in/akashvbhv/"><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Secretary</p>
                                    <p>STMicroelectronics</p>
                                    <a href="https://www.linkedin.com/in/akashvbhv/" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>

                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/Vikash Kumar.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Vikash Kumar</p>
                                    <div className={styles.blur}>
                                        <span>Vikash Kumar</span>
                                        <img alt="" src="./img/alumni/indian railways.png" className={styles.brand} />
                                        <a className={styles.link} href=""><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Treasurer</p>
                                    <p>Indian Railways</p>
                                    <a href="" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.batch} id="b_2014">
                        <div className={styles.subHeadingWrap}>
                            <div className={styles.subHeading}><PiStudentDuotone />Alumni 2K14</div>
                        </div>
                        <div className={styles.heading}>IETE 2K14</div>
                        <div className={styles.peoples}>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/img11.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Niraj Kumar</p>
                                    <div className={styles.blur}>
                                        <span>Niraj Kumar</span>
                                        <img alt="" src="./img/alumni/NIT_Jamshedpur.png" className={styles.brand} />
                                        <a className={styles.link} href="https://www.linkedin.com/in/niraj-kumar-28b774134"><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Secretary</p>
                                    <p>NIT Jamshedpur</p>
                                    <a href="https://www.linkedin.com/in/niraj-kumar-28b774134" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>

                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/Nitya.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Nitya Agrawal</p>
                                    <div className={styles.blur}>
                                        <span>Nitya Agrawal</span>
                                        <img alt="" src="./img/alumni/Nagra.png" className={styles.brand} />
                                        <a className={styles.link} href=""><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Joint Secretary</p>
                                    <p>Nagra Vision Ltd.</p>
                                    <a href="" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>

                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/Sudhanshu.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Sudhanshu Ambastha</p>
                                    <div className={styles.blur}>
                                        <span>Sudhanshu Ambastha</span>
                                        <img alt="" src="./img/alumni/bloomreach.png" className={styles.brand} />
                                        <a className={styles.link} href="https://www.linkedin.com/in/sudhanshu-ambastha"><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Vice President</p>
                                    <p>Bloomreach</p>
                                    <a href="https://www.linkedin.com/in/sudhanshu-ambastha" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>

                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/Arvind Marandi.png" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Arvind Marandi</p>
                                    <div className={styles.blur}>
                                        <span>Arvind Marandi</span>
                                        <img alt="" src="./img/alumni/IIT_Kanpur.png" className={styles.brand} />
                                        <a className={styles.link} href="https://www.linkedin.com/in/arvind-marandi/"><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Technical Head</p>
                                    <p>IIT Kanpur</p>
                                    <a href="https://www.linkedin.com/in/arvind-marandi/" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>

                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/Himanshu Harsh.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Himanshu Harsh</p>
                                    <div className={styles.blur}>
                                        <span>Himanshu Harsh</span>
                                        <img alt="" src="./img/alumni/IIM_Visakhapatnam.png" className={styles.brand} />
                                        <a className={styles.link} href=""><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Alumni In-Charge</p>
                                    <p>IIM Visakhapatnam</p>
                                    <a href="" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>

                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/Navtosh Arun.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Navtosh Arun</p>
                                    <div className={styles.blur}>
                                        <span>Navtosh Arun</span>
                                        <img alt="" src="" className={styles.brand} />
                                        <a className={styles.link} href="https://in.linkedin.com/in/navtosh-arun"><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Chairperson</p>
                                    <p>Preparing for UPSC Civil Services Exam</p>
                                    <a href="https://in.linkedin.com/in/navtosh-arun" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>

                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/Parimal Roy.jpeg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Parimal Roy</p>
                                    <div className={styles.blur}>
                                        <span>Parimal Roy</span>
                                        <img alt="" src="./img/alumni/Rakuten.png" className={styles.brand} />
                                        <a className={styles.link} href=""><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Treasurer</p>
                                    <p>Rakuten</p>
                                    <a href="" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>

                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/Kritee.jpeg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Kritee Rani</p>
                                    <div className={styles.blur}>
                                        <span>Kritee Rani</span>
                                        <img alt="" src="./img/alumni/med_science_wardha.png" className={styles.brand} />
                                        <a className={styles.link} href=""><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Vice Chairperson</p>
                                    <p>Datta Meghe Institute of MSci.</p>
                                    <a href="" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>

                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/Ashish Kumar Saw.jpeg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Ashish Saw</p>
                                    <div className={styles.blur}>
                                        <span>Ashish Saw</span>
                                        <img alt="" src="./img/alumni/icici.png" className={styles.brand} />
                                        <a className={styles.link} href="https://www.linkedin.com/in/ashish-kumar-saw-ab2b9212a"><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Software engineer</p>
                                    <p>Icici securities</p>
                                    <a href="https://www.linkedin.com/in/ashish-kumar-saw-ab2b9212a" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.batch} id="b_2015">
                        <div className={styles.subHeadingWrap}>
                            <div className={styles.subHeading}><PiStudentDuotone />Alumni 2K15</div>
                        </div>
                        <div className={styles.heading}>IETE 2K15</div>
                        <div className={styles.peoples}>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/img5.jpeg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Subham Bose</p>
                                    <div className={styles.blur}>
                                        <span>Subham Bose</span>
                                        <img alt="" src="./img/alumni/iimng.png" className={styles.brand} />
                                        <a className={styles.link} href="https://www.linkedin.com/in/subham-bose/"><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Secretary</p>
                                    <p>IIM Nagpur</p>
                                    <a href="https://www.linkedin.com/in/subham-bose/" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/img6.jpeg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Kundan Kumar</p>
                                    <div className={styles.blur}>
                                        <span>Kundan Kumar</span>
                                        <img alt="" src="./img/alumni/wipro.png" className={styles.brand} />
                                        <a className={styles.link}><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Event Coordinator</p>
                                    <p>Wipro</p>
                                    <a className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/img7.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Rajeev Ranjan Raj</p>
                                    <div className={styles.blur}>
                                        <span>Rajeev Ranjan Raj</span>
                                        <img alt="" src="./img/alumni/tata.png" className={styles.brand} />
                                        <a className={styles.link} href="https://www.linkedin.com/in/rajeev-ranjan-raj-14a414121"><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Chairperson</p>
                                    <p>Tata Steel</p>
                                    <a href="https://www.linkedin.com/in/rajeev-ranjan-raj-14a414121" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/img8.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Naveen Kumar</p>
                                    <div className={styles.blur}>
                                        <span>Naveen Kumar</span>
                                        <img alt="" src="./img/alumni/cogni.png" className={styles.brand} />
                                        <a className={styles.link} href="https://www.linkedin.com/in/naveenkumar227"><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Software Engineer</p>
                                    <p>Cognizant</p>
                                    <a href="https://www.linkedin.com/in/naveenkumar227" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/img9.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Abhishek Tiwari </p>
                                    <div className={styles.blur}>
                                        <span>Abhishek Tiwari</span>
                                        <img alt="" src="./img/alumni/wipro.png" className={styles.brand} />
                                        <a className={styles.link} href="https://in.linkedin.com/in/abhishek-tiwari-b0b3b83a"><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Media Head</p>
                                    <p>Wipro</p>
                                    <a href="https://in.linkedin.com/in/abhishek-tiwari-b0b3b83a" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/img10.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Srijan Bharadwaj</p>
                                    <div className={styles.blur}>
                                        <span>Srijan Bharadwaj</span>
                                        <img alt="" src="./img/alumni/tcs.png" className={styles.brand} />
                                        <a className={styles.link}><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>PRO</p>
                                    <p>TCS</p>
                                    <a className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.batch} id="b_2016">
                        <div className={styles.subHeadingWrap}>
                            <div className={styles.subHeading}><PiStudentDuotone />Alumni 2K16</div>
                        </div>
                        <div className={styles.heading}>IETE 2K16</div>
                        <div className={styles.peoples}>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/img1.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Pushpendra Kumar Singh</p>
                                    <div className={styles.blur}>
                                        <span>Pushpendra Kumar Singh</span>
                                        <img alt="" src="./img/alumni/tata.png" className={styles.brand} />
                                        <a className={styles.link}><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Technical & Marketing Head</p>
                                    <p>Tata Steel</p>
                                    <a className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/img2.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Shivank Jaiswal</p>
                                    <div className={styles.blur}>
                                        <span>Shivank Jaiswal</span>
                                        <a className={styles.link}><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Secretary, PRO</p>
                                    <p>Higher Studies</p>
                                    <a className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/img3.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Puja singh</p>
                                    <div className={styles.blur}>
                                        <span>Puja singh</span>
                                        <img alt="" src="./img/alumni/eric.png" className={styles.brand} />
                                        <a className={styles.link}><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Joint Treasurer</p>
                                    <p>Ericsson</p>
                                    <a className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/img4.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Pratyush Prasad</p>
                                    <div className={styles.blur}>
                                        <span>Pratyush Prasad</span>
                                        <img alt="" src="./img/alumni/tata.png" className={styles.brand} />
                                        <a href="https://www.linkedin.com/in/pratyush-prasad-62702013b" className={styles.link}><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Chairperson</p>
                                    <p>Tata Steel</p>
                                    <a href="https://www.linkedin.com/in/pratyush-prasad-62702013b" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/img24.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Shivam</p>
                                    <div className={styles.blur}>
                                        <span>Shivam</span>
                                        <img alt="" src="./img/alumni/jsw.png" className={styles.brand} />
                                        <a href="" className={styles.link}><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Treasurer</p>
                                    <p>JSW Steel Ltd.</p>
                                    <a href="" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/img25.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Abhishek Ranjan Tiwary</p>
                                    <div className={styles.blur}>
                                        <span>Abhishek Ranjan Tiwary</span>
                                        <img alt="" src="./img/alumni/power.jpg" className={styles.brand} />
                                        <a href="https://www.linkedin.com/in/abhishek-ranjan-tiwary-318951147/" className={styles.link}><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Vice Chairperson</p>
                                    <p>Tata Power</p>
                                    <a href="https://www.linkedin.com/in/abhishek-ranjan-tiwary-318951147/" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/img26.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Sayeesta Samrin</p>
                                    <div className={styles.blur}>
                                        <span>Sayeesta Samrin</span>
                                        <img alt="" src="./img/alumni/tcs.png" className={styles.brand} />
                                        <a href="https://www.linkedin.com/in/sayeesta-samrin-3a509a14b/" className={styles.link}><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Media Head & Alumni Incharge</p>
                                    <p>TCS</p>
                                    <a href="https://www.linkedin.com/in/sayeesta-samrin-3a509a14b/" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/img27.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Priyanka Tirkey</p>
                                    <div className={styles.blur}>
                                        <span>Priyanka Tirkey</span>
                                        <img alt="" src="" className={styles.brand} />
                                        <a href="" className={styles.link}><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Media Head & PRO</p>
                                    <a href="" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/img28.jfif" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Shiwani Kumari</p>
                                    <div className={styles.blur}>
                                        <span>Shiwani Kumari</span>
                                        <img alt="" src="./img/alumni/hplix.PNG" className={styles.brand} />
                                        <a href="https://www.linkedin.com/in/shiwani-kumari-a46027145/" className={styles.link}><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Joint Secretary</p>
                                    <p>Healthplix</p>
                                    <a href="https://www.linkedin.com/in/shiwani-kumari-a46027145/" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/img29.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Shweta Gupta</p>
                                    <div className={styles.blur}>
                                        <span>Shweta Gupta</span>
                                        <img alt="" src="./img/alumni/sify.jpg" className={styles.brand} />
                                        <a href="" className={styles.link}><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Vice Chairman & Marketing Head</p>
                                    <p>Sify Technolgy</p>
                                    <a href="" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.batch} id="b_2017">
                        <div className={styles.subHeadingWrap}>
                            <div className={styles.subHeading}><PiStudentDuotone />Alumni 2K17</div>
                        </div>
                        <div className={styles.heading}>IETE 2K17</div>
                        <div className={styles.peoples}>

                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/img12.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Saurav Tiwary</p>
                                    <div className={styles.blur}>
                                        <span>Saurav Tiwary</span>
                                        <img alt="" src="./img/alumni/tata.png" className={styles.brand} />
                                        <a className={styles.link} href="https://www.linkedin.com/in/saurav-tiwary-bb022214a/"><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Chairperson</p>
                                    <p>Tsuisl</p>
                                    <a href="https://www.linkedin.com/in/saurav-tiwary-bb022214a/" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>

                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/img13.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Kanish Dubey</p>
                                    <div className={styles.blur}>
                                        <span>Kanish Dubey</span>
                                        <img alt="" src="./img/alumni/jsw.png" className={styles.brand} />
                                        <a className={styles.link} href="https://www.linkedin.com/in/kanish-dubey-94610a169/"><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Vice Chairperson</p>
                                    <p>JSW Steel Ltd.</p>
                                    <a href="https://www.linkedin.com/in/kanish-dubey-94610a169/" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>

                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/img14.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Sweta Singh</p>
                                    <div className={styles.blur}>
                                        <span>Shweta Singh</span>
                                        <img alt="" src="./img/alumni/tcs.png" className={styles.brand} />
                                        <a className={styles.link} href="https://www.linkedin.com/in/sweta-singh-5b6105194/"><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Vice Chairperson</p>
                                    <p>TCS</p>
                                    <a href="https://www.linkedin.com/in/sweta-singh-5b6105194/" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>

                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/img15.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Siddharth Gupta</p>
                                    <div className={styles.blur}>
                                        <span>Siddharth Gupta</span>
                                        <img alt="" src="./img/alumni/girik.png" className={styles.brand} />
                                        <a className={styles.link} href="https://www.linkedin.com/in/sidharth19th/"><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Secretary</p>
                                    <p>Girikon</p>
                                    <a href="https://www.linkedin.com/in/sidharth19th/" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>

                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/img16.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Priya Saluja</p>
                                    <div className={styles.blur}>
                                        <span>Priya Saluja</span>
                                        <img alt="" src="./img/alumni/tcs.png" className={styles.brand} />
                                        <a className={styles.link} href="https://www.linkedin.com/in/priya-saluja-0627791b2/"><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Secretary</p>
                                    <p>TCS</p>
                                    <a href="https://www.linkedin.com/in/priya-saluja-0627791b2/" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/img17.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Roshan Singh</p>
                                    <div className={styles.blur}>
                                        <span>Roshan Singh</span>
                                        <img alt="" src="./img/alumni/samsung.png" className={styles.brand} />
                                        <a className={styles.link} href="https://www.linkedin.com/in/roshan-singh-ba8965170/"><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Treasurer</p>
                                    <p>Samsung</p>
                                    <a href="https://www.linkedin.com/in/roshan-singh-ba8965170/" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/img18.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Rashi Agrawal</p>
                                    <div className={styles.blur}>
                                        <span>Rashi Agrawal</span>
                                        <img alt="" src="./img/alumni/tcs.png" className={styles.brand} />
                                        <a className={styles.link} href="https://www.linkedin.com/in/rashi-agarwal-778025174/"><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Treasurer</p>
                                    <a href="https://www.linkedin.com/in/rashi-agarwal-778025174/" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/img19.png" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Abhishek Ranjan</p>
                                    <div className={styles.blur}>
                                        <span>Abhishek Ranjan</span>
                                        <img alt="" src="./img/alumni/tata.png" className={styles.brand} />
                                        <a className={styles.link} href="https://www.linkedin.com/in/ranjan17abhishek/"><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Technical Head</p>
                                    <p>Tata Steel</p>
                                    <a href="https://www.linkedin.com/in/ranjan17abhishek/" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/img20.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Pallav Tiriyar</p>
                                    <div className={styles.blur}>
                                        <span>Pallav Tiriyar</span>
                                        <img alt="" src="./img/alumni/Deloitte.png" className={styles.brand} />
                                        <a className={styles.link} href="https://www.linkedin.com/in/pallav-tiriyar-0aa09b15a/"><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Public Relation Officer</p>
                                    <p>Deloitte</p>
                                    <a href="https://www.linkedin.com/in/pallav-tiriyar-0aa09b15a/" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/img21.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Reema Bharti</p>
                                    <div className={styles.blur}>
                                        <span>Reema Bharti</span>
                                        <img alt="" src="./img/alumni/schlumberger.png" className={styles.brand} />
                                        <a className={styles.link} href="https://www.linkedin.com/in/reema-bharti-745793168/"><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>PRO & Media Head</p>
                                    <p>Schlumberger</p>
                                    <a href="https://www.linkedin.com/in/reema-bharti-745793168/" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/img22.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Alice Laguri</p>
                                    <div className={styles.blur}>
                                        <span>Alice Laguri</span>
                                        <img alt="" src="./img/alumni/tcs.png" className={styles.brand} />
                                        <a className={styles.link} href="https://www.linkedin.com/in/alice-laguri-4827b6148/"><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Alumni In-Charge</p>
                                    <p>TCS</p>
                                    <a href="https://www.linkedin.com/in/alice-laguri-4827b6148/" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/img23.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Nilesh Tiwary</p>
                                    <div className={styles.blur}>
                                        <span>Nilesh Tiwary</span>
                                        <img alt="" src="./img/alumni/ltd.jpg" className={styles.brand} />
                                        <a className={styles.link} href=""><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Marketing Head</p>
                                    <p>LTD</p>
                                    <a href="" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.batch} id="b_2018">
                        <div className={styles.subHeadingWrap}>
                            <div className={styles.subHeading}><PiStudentDuotone />Alumni 2K18</div>
                        </div>
                        <div className={styles.heading}>IETE 2K18</div>
                        <div className={styles.peoples}>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/Abhishek Pandey.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Abhishek Pandey</p>
                                    <div className={styles.blur}>
                                        <span>Abhishek Pandey</span>
                                        <img alt="" src="./img/alumni/samsung.png" className={styles.brand} />
                                        <a className={styles.link} href="https://www.linkedin.com/in/abhishekpandey921/"><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Chairperson</p>
                                    <p>Samsung</p>
                                    <a href="https://www.linkedin.com/in/abhishekpandey921/" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/abhijit.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Abhijit Parshar</p>
                                    <div className={styles.blur}>
                                        <span>Abhijit Parshar</span>
                                        <img alt="" src="./img/alumni/Vedanta.png" className={styles.brand} />
                                        <a className={styles.link} href="https://www.linkedin.com/in/abhijit-parashar-811b34112/"><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Vice Chairperson</p>
                                    <p>Vedanta</p>
                                    <a href="https://www.linkedin.com/in/abhijit-parashar-811b34112/" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/Nidhi.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Nidhi Kumari</p>
                                    <div className={styles.blur}>
                                        <span>Nidhi Kumari</span>
                                        <img alt="" src="./img/alumni/Deloitte.png" className={styles.brand} />
                                        <a className={styles.link} href="https://www.linkedin.com/in/nidhi-kumari-a4ba70198/"><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Vice Chairperson</p>
                                    <p>Deloitte</p>
                                    <a href="https://www.linkedin.com/in/nidhi-kumari-a4ba70198/" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/Rumman.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Rumman Akhtar</p>
                                    <div className={styles.blur}>
                                        <span>Rumman Akhtar</span>
                                        <img alt="" src="./img/alumni/cogni.png" className={styles.brand} />
                                        <a className={styles.link} href="https://www.linkedin.com/in/rummanakhtar/"><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>General Secretary & Alumni Incharge</p>
                                    <p>Cognizant</p>
                                    <a href="https://www.linkedin.com/in/rummanakhtar/" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/kiran.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Kiran Kumari</p>
                                    <div className={styles.blur}>
                                        <span>Kiran Kumari</span>
                                        <img alt="" src="./img/alumni/Deloitte.png" className={styles.brand} />
                                        <a className={styles.link} href="https://www.linkedin.com/in/kiran-kumari-k99/"><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Technical Secretary</p>
                                    <p>Deloitte</p>
                                    <a href="https://www.linkedin.com/in/kiran-kumari-k99/" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/Roshan.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Roshan Kr. Singh</p>
                                    <div className={styles.blur}>
                                        <span>Roshan Kr. Singh</span>
                                        <img alt="" src="./img/alumni/samsung.png" className={styles.brand} />
                                        <a className={styles.link} href="https://www.linkedin.com/in/roshan-kumar-singh/"><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Treasurer</p>
                                    <p>Samsung</p>
                                    <a href="https://www.linkedin.com/in/roshan-kumar-singh/" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/Pallavi.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Pallavi Singh</p>
                                    <div className={styles.blur}>
                                        <span>Pallavi Singh</span>
                                        <img alt="" src="./img/alumni/schlumberger.png" className={styles.brand} />
                                        <a className={styles.link} href="https://www.linkedin.com/in/priyapp/"><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Joint Treasurer & Media Head</p>
                                    <p>Schlumberger</p>
                                    <a href="https://www.linkedin.com/in/priyapp/" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/shailesh.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Shailesh Aanand</p>
                                    <div className={styles.blur}>
                                        <span>Shailesh Aanand</span>
                                        <img alt="" src="./img/alumni/google.png" className={styles.brand} />
                                        <a className={styles.link} href="https://www.linkedin.com/in/shailesh-aanand/"><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Technical Head</p>
                                    <p>Google</p>
                                    <a href="https://www.linkedin.com/in/shailesh-aanand/" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/Deepak.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Deepak Kumar</p>
                                    <div className={styles.blur}>
                                        <span>Deepak Kumar</span>
                                        <img alt="" src="./img/alumni/Deloitte.png" className={styles.brand} />
                                        <a className={styles.link} href="https://www.linkedin.com/in/deepak7870/"><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Event Management Head & PRO</p>
                                    <p>Deloitte</p>
                                    <a href="https://www.linkedin.com/in/deepak7870/" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/Suraj.jpeg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Suraj Kumar Mahato</p>
                                    <div className={styles.blur}>
                                        <span>Suraj Kumar Mahato</span>
                                        <img alt="" src="./img/alumni/NPCI.png" className={styles.brand} />
                                        <a className={styles.link} href="https://www.linkedin.com/in/suraj-sloth/"><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Head of Operations & Workshop Incharge</p>
                                    <p>NPCI</p>
                                    <a href="https://www.linkedin.com/in/suraj-sloth/" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/anjali.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Anjali Singh</p>
                                    <div className={styles.blur}>
                                        <span>Anjali Singh</span>
                                        <img alt="" src="./img/alumni/pi_industries.png" className={styles.brand} />
                                        <a className={styles.link} href="https://www.linkedin.com/in/anjali-singh-506502215/"><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Alumni Incharge & PRO</p>
                                    <p>PI Industry</p>
                                    <a href="https://www.linkedin.com/in/anjali-singh-506502215/" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                            <div className={styles.people}>
                                <img alt="" src="./img/alumni/Subhabrata.jpg" className={styles.photo} />
                                <div className={styles.text}>
                                    <p className={styles.name}>Subhabrata Roy</p>
                                    <div className={styles.blur}>
                                        <span>Subhabrata Roy</span>
                                        <img alt="" src="./img/L&T.png" className={styles.brand} />
                                        <a className={styles.link} href="https://www.linkedin.com/in/subhabrata-roy-84038b180/"><BiLogoLinkedinSquare /></a>
                                    </div>
                                    <p>Media & Marketing Head</p>
                                    <p>LnT</p>
                                    <a href="https://www.linkedin.com/in/subhabrata-roy-84038b180/" className={styles.link}><BiLogoLinkedinSquare /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default page