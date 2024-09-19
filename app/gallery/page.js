import React from 'react'
import { BsStars } from 'react-icons/bs'
import { GalleryData } from '@/lib/data/GalleryData'
import {Gallerym19} from '@/lib/data/Gallerym19'
import {Gallerym20} from '@/lib/data/Gallerym20'
import styles from './page.module.css'
import Image from 'next/image'
import GlimpseSlider from '@/components/GlimpseSlider/GlimpseSlider'
import TU24Data from '@/utils/TU24Data'
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

            <div className={styles.memories2k18}>
            <div className={styles.heading}>memories 2K18</div>
            <div className={styles.m18Row}>
                {
                    GalleryData.map((item,index)=>{
                        return(
                            <div className={styles.cardG} key={index}>
                            <Image
                            src={"/img/gallery/memories2k18/"+item.imgSrc}
                            alt={item.id}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            objectFit='cover'
                            />
                            </div> 
                        )
                    })
                }
                
            </div>
            </div>

            <div className={styles.memories2k18}>
            <div className={styles.heading}>memories 2K19</div>
            <div className={styles.m18Row}>
                {
                    Gallerym19.map((item,index)=>{
                        return(
                            <div className={styles.cardG} key={index}>
                            <Image
                            src={"/img/gallery/memories2k19/"+item.imgSrc}
                            alt={item.id}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            objectFit='cover'
                            />
                            </div> 
                        )
                    })
                }
                
            </div>
            
            </div>
           

            <div className={styles.memories2k18}>
            <div className={styles.heading}>memories 2K20</div>
            <div className={styles.m18Row}>
                {
                    Gallerym20.map((item,index)=>{
                        return(
                            <div className={styles.cardG} key={index}>
                            <Image
                            src={"/img/gallery/memories2k20/"+item.imgSrc}
                            alt={item.id}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            objectFit='cover'
                            />
                            </div> 
                        )
                    })
                }
                
            </div>
            
            </div>

            <div className={styles.tuGlimpse}>
                <div className={styles.heading}>TECH UDBHAV 2K24</div>

                <GlimpseSlider data={TU24Data}/>
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