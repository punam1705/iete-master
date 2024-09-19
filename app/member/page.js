'use client';

import React from 'react';
import { BsStars } from 'react-icons/bs';
import styles from './page.module.css';
import { FaLinkedin } from 'react-icons/fa6';
import Tilt from 'react-parallax-tilt';

import { useEffect } from 'react';

const Page = () => {
  return (
    <div className={styles.memberPage}>
      <div className={styles.memberPageWrap}>
        <div className={styles.mpwNew}>
          <BsStars />
          The Backbone of IETE
        </div>
        <div className={styles.mpwHeading}>Our Members</div>
        <div className={styles.mpwPara}>
          Welcome to our Exciting realms of technology, coding, engineering and
          robotics.Discover, learn and collaborate with like minded individuals,
          pushing the boundries of innovation.
        </div>
      </div>

      <div className={styles.memberListWrap}>
        {/* <div className={styles.memberBox}>
          <div className={styles.heading}>Board Of Directors</div>

          <div className={styles.memberWrapper}>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k20/Rajat.jpg" alt="image" />
                <div className={styles.memberText}>
                  <h2>Rajat Choudhary</h2>

                  <div className={styles.memberSubText}>
                    <a href="https://www.linkedin.com/in/rajat1908/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k20/Mukund.jpg" alt="image" />
                <div className={styles.memberText}>
                  <h2>Mukund Parasher</h2>

                  <div className={styles.memberSubText}>
                    <a href="https://www.linkedin.com/in/mukund-prashar-4a9168214/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k20/Megha.jpg" alt="image" />
                <div className={styles.memberText}>
                  <h2>Megha</h2>

                  <div className={styles.memberSubText}>
                    <a href="https://www.linkedin.com/in/megha-singh-5a8ba41bb/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k20/Rana.jpg" alt="image" />
                <div className={styles.memberText}>
                  <h2>Rana Randeep</h2>

                  <div className={styles.memberSubText}>
                    <a href="https://www.linkedin.com/in/rana-randeep-ab0aa0202/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k20/Muskan.jpg" alt="image" />
                <div className={styles.memberText}>
                  <h2>Muskan Naaz</h2>

                  <div className={styles.memberSubText}>
                    <a href="https://www.linkedin.com/in/muskan-naaz-a112ba208/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k20/Sandeep.jpg" alt="image" />
                <div className={styles.memberText}>
                  <h2>Sandeep Kr. Hembrom</h2>

                  <div className={styles.memberSubText}>
                    <a href="https://www.linkedin.com/in/sandeephembrom/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k20/Shreya.jpg" alt="image" />
                <div className={styles.memberText}>
                  <h2>Shreya Prabha</h2>

                  <div className={styles.memberSubText}>
                    <a href="https://www.linkedin.com/in/shreya-prabha-897b27197/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k20/Vaidehi.jpg" alt="image" />
                <div className={styles.memberText}>
                  <h2>Vaidehi Singh</h2>

                  <div className={styles.memberSubText}>
                    <a href="https://www.linkedin.com/in/vaidehi-singh-a73186207/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k20/Vijay.jpg" alt="image" />
                <div className={styles.memberText}>
                  <h2>Vijay Lowada</h2>

                  <div className={styles.memberSubText}>
                    <a href="https://www.linkedin.com/in/vijay2002/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k20/Aman.jpg" alt="image" />
                <div className={styles.memberText}>
                  <h2>Aman Kr. Singh</h2>

                  <div className={styles.memberSubText}>
                    <a href="https://www.linkedin.com/in/aman-singh-rajput-1b6b351bb/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k20/Avinav.jpg" alt="image" />
                <div className={styles.memberText}>
                  <h2>Avinav Raj Singh</h2>

                  <div className={styles.memberSubText}>
                    <a href="https://www.linkedin.com/in/avinav-raj-632641207/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k20/Aniket.jpg" alt="image" />
                <div className={styles.memberText}>
                  <h2>Aniket Kr. Gupta</h2>

                  <div className={styles.memberSubText}>
                    <a href="https://www.linkedin.com/in/aniket-kumar-gupta-4469a1213/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k20/Manisha.jpg" alt="image" />
                <div className={styles.memberText}>
                  <h2>Manisha Kumari</h2>

                  <div className={styles.memberSubText}>
                    <a href="https://www.linkedin.com/in/manisha-kumari-3a022a217/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k20/Ruma.jpg" alt="image" />
                <div className={styles.memberText}>
                  <h2>Ruma Rupal</h2>

                  <div className={styles.memberSubText}>
                    <a href="https://www.linkedin.com/in/ruma-rupal-56aa56236/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
        </div> */}

        <div className={styles.memberBox}>
          <div className={styles.heading}>Office Bearers</div>

          <div className={styles.memberWrapper}>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k21/Priyanshu.jpg" alt="image" />
                <div className={styles.memberText}>
                  <h2>Priyanshu Mukherjee</h2>
                  <p>Chairperson</p>

                  <div className={styles.memberSubText}>
                    <h4>Electrical Engineering</h4>
                    <a href="https://www.linkedin.com/in/priyanshu-mukherjee-259a09240/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k21/ADARSH_IETE.jpg" alt="image" />
                <div className={styles.memberText}>
                  <h2>Adarsh Trivedi</h2>
                  <p>vice chairperson</p>

                  <div className={styles.memberSubText}>
                    <h4>Information Technology</h4>
                    <a href="https://www.linkedin.com/in/adarsh-trivedi-10ba6a22a/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img
                  src="/img/members/2k21/Saron.jpg"
                  alt="image"
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.memberText}>
                  <h2>Saron Mukti Ekta</h2>
                  <p>vice chairperson</p>

                  <div className={styles.memberSubText}>
                    <h4>Electrical Engineering</h4>
                    <a href="https://www.linkedin.com/in/saron-ekka/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k21/Rohit_IETE.jpg" alt="image" />
                <div className={styles.memberText}>
                  <h2>Rohit Kr. Grihi</h2>
                  <p>General secretary</p>

                  <div className={styles.memberSubText}>
                    <h4>Information Technology</h4>
                    <a href="https://www.linkedin.com/in/rohit-kumar-grihi-009035240/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k21/Supriya.jpg" alt="image" />
                <div className={styles.memberText}>
                  <h2>Supriya Sharma</h2>
                  <p>Joint secretary</p>

                  <div className={styles.memberSubText}>
                    <h4>Chemical Engineering</h4>
                    <a href="https://www.linkedin.com/in/supriya-sharma-6a2057225/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img
                  src="/img/members/2k21/Rahul_Kr_IETE.jpg"
                  alt="image"
                  style={{ objectFit: 'contain' }}
                />
                <div className={styles.memberText}>
                  <h2>Rahul Kumar</h2>
                  <p>Technical head</p>

                  <div className={styles.memberSubText}>
                    <h4>Electrical Engineering</h4>
                    <a href="">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img
                  src="/img/members/2k21/Deepak.jpg"
                  alt="image"
                  style={{ objectFit: 'contain' }}
                />
                <div className={styles.memberText}>
                  <h2>Deepak Kumar</h2>
                  <p>Technical secretary</p>

                  <div className={styles.memberSubText}>
                    <h4>Information Technology</h4>
                    <a href="https://www.linkedin.com/in/deepak-kumar-052779225/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k21/Avinash.jpeg" alt="image" />
                <div className={styles.memberText}>
                  <h2>Avinash Yadav</h2>
                  <p>Creative and Design head</p>

                  <div className={styles.memberSubText}>
                    <h4>Mechanical Engineering</h4>
                    <a href="">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k21/Ankita.jpg" alt="image" />
                <div className={styles.memberText}>
                  <h2>Ankita Ghosh</h2>
                  <p>Head of Operations and Event in-charge</p>

                  <div className={styles.memberSubText}>
                    <h4>Information Technology</h4>
                    <a href="https://www.linkedin.com/in/ankitag39/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img
                  src="/img/members/2k21/Rahul_J.jpg"
                  alt="image"
                  style={{ objectFit: 'contain' }}
                />
                <div className={styles.memberText}>
                  <h2>Rahul Jha</h2>
                  <p>Treasurer and sponsorship head</p>

                  <div className={styles.memberSubText}>
                    <h4>Elec. & Com. Engineering</h4>
                    <a href="https://www.linkedin.com/in/rahul-jha-97200122b/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k21/Rishita.jpg" alt="image" />
                <div className={styles.memberText}>
                  <h2>Rishita Dutta</h2>
                  <p>Joint Treasurer </p>

                  <div className={styles.memberSubText}>
                    <h4>Prod. & Ind. Engineering</h4>
                    <a href="https://www.linkedin.com/in/rishita-dutta-24a91824a/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img
                  src="/img/members/2k21/Mehar.jpg"
                  alt="image"
                  style={{ objectFit: 'contain' }}
                />
                <div className={styles.memberText}>
                  <h2>Mehar Talat</h2>
                  <p>Head of Alumni Affairs</p>

                  <div className={styles.memberSubText}>
                    <h4>Civil Engineering</h4>
                    <a href="https://www.linkedin.com/in/mehar-talat-a477b8232/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img
                  src="/img/members/2k21/Ayushi.jpeg"
                  alt="image"
                  style={{ objectFit: 'contain' }}
                />
                <div className={styles.memberText}>
                  <h2>Ayushi Tewary</h2>
                  <p>Media and Marketing Head</p>

                  <div className={styles.memberSubText}>
                    <h4>Prod. & Ind. Engineering</h4>
                    <a href="https://www.linkedin.com/in/ayushi-tewary-922ba5253/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k21/Ashish.jpg" alt="image" />
                <div className={styles.memberText}>
                  <h2>Ashish Sinha</h2>
                  <p>Public Realtion Officer</p>

                  <div className={styles.memberSubText}>
                    <h4>Mining Engineering</h4>
                    <a href="https://www.linkedin.com/in/ashish-sinha-82215124a/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
        </div>

        <div className={styles.memberBox}>
          <div className={styles.heading}>Next Gen</div>
          <div className={styles.memberWrapper}>
            <Tilt>
              <div className={styles.memberCard}>
                <img
                  src="/img/members/2k22/1.jpg"
                  alt="image"
                  style={{
                    objectFit: 'cover',
                  }}
                />
                <div className={styles.memberText}>
                  <h2>Faizan Ahmad</h2>

                  <div className={styles.memberSubText}>
                    <h4>Information Technology</h4>
                    <a href="https://www.linkedin.com/in/faizan-ahmad-473aa123b/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k22/Simarn.jpg" alt="image" />
                <div className={styles.memberText}>
                  <h2>Simran</h2>

                  <div className={styles.memberSubText}>
                    <h4>Electrical Engineering</h4>
                    <a href="https://www.linkedin.com/in/simran-bb9338258/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k22/Shaswat.jpg" alt="image" />
                <div className={styles.memberText}>
                  <h2>Kumar Shaswat </h2>

                  <div className={styles.memberSubText}>
                    <h4>Elec. & Com. Engineering</h4>
                    <a href="https://www.linkedin.com/in/kumar-shaswat-6a1035250/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k22/Rahul.jpg" alt="image" />
                <div className={styles.memberText}>
                  <h2>Rahul Kr Das</h2>

                  <div className={styles.memberSubText}>
                    <h4>Elec. & Com. Engineering</h4>
                    <a href="https://www.linkedin.com/in/rahul-das-169596258/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k22/Anshika.jpeg" alt="image" />
                <div className={styles.memberText}>
                  <h2>Anshika Mishra</h2>

                  <div className={styles.memberSubText}>
                    <h4>Metallurgical Engineering</h4>
                    <a href="https://www.linkedin.com/in/anshika-mishra-2a7641257/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k22/Adarsh.jpg" alt="image" />
                <div className={styles.memberText}>
                  <h2>Adarsh Kumar</h2>

                  <div className={styles.memberSubText}>
                    <h4>Electrical Engineering</h4>
                    <a href="https://www.linkedin.com/in/adarsh-kumar-abb0a3259/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k22/Rudra.jpg" alt="image" />
                <div className={styles.memberText}>
                  <h2>Rudranil Ganguly </h2>

                  <div className={styles.memberSubText}>
                    <h4>Chemical Engineering</h4>
                    <a href="https://www.linkedin.com/in/rudranil-ganguly-305411254/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k22/Puspam.jpg" alt="image" />
                <div className={styles.memberText}>
                  <h2>Puspam Jha</h2>

                  <div className={styles.memberSubText}>
                    <h4>Electrical Engineering</h4>
                    <a href="https://www.linkedin.com/in/puspam-jha-44606a225/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k22/Aquib.jpg" alt="image" />
                <div className={styles.memberText}>
                  <h2>Aquib Aftab</h2>

                  <div className={styles.memberSubText}>
                    <h4>Computer Science Engineering</h4>
                    <a href="https://www.linkedin.com/in/aquib-aftab-65917b252/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k22/Sashi.jpg" alt="image" />
                <div className={styles.memberText}>
                  <h2>Sashi Shekhar Singh</h2>

                  <div className={styles.memberSubText}>
                    <h4>Electrical Engineering</h4>
                    <a href="https://www.linkedin.com/in/sashi-sekhar-singh-858a5424a/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k22/Deepti.jpg" alt="image" />
                <div className={styles.memberText}>
                  <h2>Deepti Kumari</h2>

                  <div className={styles.memberSubText}>
                    <h4>Chemical Engineering</h4>
                    <a href="https://www.linkedin.com/in/deepti-kumari-482049258/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k22/Mayank.jpeg" alt="image" />
                <div className={styles.memberText}>
                  <h2> Kumar Mayank </h2>

                  <div className={styles.memberSubText}>
                    <h4>Mechanical Engineering</h4>
                    <a href="https://www.linkedin.com/in/kumar-mayank-410660221/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k22/Sonali.jpg" alt="image" />
                <div className={styles.memberText}>
                  <h2>Sonali Gorai</h2>

                  <div className={styles.memberSubText}>
                    <h4>Elec. & Com. Engineering</h4>
                    <a href="https://www.linkedin.com/in/sonali-gorai-b0a631264/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k22/Anjali.jpg" alt="image" />
                <div className={styles.memberText}>
                  <h2>Anjali Singh</h2>

                  <div className={styles.memberSubText}>
                    <h4>Prod. & Ind. Engineering</h4>
                    <a href="https://www.linkedin.com/in/anjali-singh-58a58b257/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt>
              <div className={styles.memberCard}>
                <img src="/img/members/2k22/Shivam.jpeg" alt="image" />
                <div className={styles.memberText}>
                  <h2>Shivam Singh</h2>

                  <div className={styles.memberSubText}>
                    <h4>Mechanical Engineering</h4>
                    <a href="">
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
  );
};

export default Page;
