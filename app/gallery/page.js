import React from 'react'
import { BsStars } from 'react-icons/bs'
import styles from './page.module.css'
import GlimpseSlider from '@/components/GlimpseSlider/GlimpseSlider'
import TU23Data from '@/utils/TU23Data'
import TU19Data from '@/utils/TU19Data'

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

            <div className={styles.tuGlimpse}>
                <div className={styles.heading}>TECH UDBHAV 2K23</div>

                <GlimpseSlider data={TU23Data}/>
            </div>

            <div className={styles.tuGlimpse}>
                <div className={styles.heading}>TECH UDBHAV 2K19</div>

                <GlimpseSlider data={TU19Data}/>
            </div>
        </div>

    )
}

export default Page