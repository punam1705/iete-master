import React from 'react'
import { BsStars } from 'react-icons/bs'
import styles from './page.module.css'

function Page() {
    return (
        <div className={styles.galleryPage}>
            <div className={styles.galleryPageWrap}>
                <div className={styles.gpwNew}><BsStars />Our Works in a few pictures</div>
                <div className={styles.gpwHeading}>Box of Memories</div>
                <div className={styles.gpwPara}>
                    We conduct a number of events for students to participate. These events are specially choosen and designed for the students so that they can use and enhance their Technical and
                    Managerial skills and win exiciting prizes.
                </div>
            </div>

            {/* <div className={styles.}>
                
            </div> */}
        </div>

    )
}

export default Page