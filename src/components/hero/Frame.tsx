'use client';

import React, {JSX} from "react";
import Image from "next/image";
import styles from "./Frame.module.css";


import arrowRight from "../../../public/images/arrow-right.png";


export const Frame = (): JSX.Element => {
    return (

        <div className={styles.frame}>
            <div className={styles.divWrapper}> {}
                <h1 className={styles.textWrapper}> {}
                    Stay ahead of the curve with our forward-thinking
                </h1>
            </div>

            <p className={styles.description}> {}
                An award-winning SEO agency with disciplines in digital marketing,
                design, and website development. focused on understanding you.
            </p>

            <div className={styles.actionsWrapper}>
                <a href="/contact-us" className={styles.scheduleButton}>
                    <div className={styles.scheduleButtonContent}>
                        <div className={styles.scheduleButtonText}>Schedule Call</div>
                    </div>
                    <Image
                        className={styles.arrowRight}
                        alt="Arrow pointing right" // Added descriptive alt text
                        src={arrowRight}
                        width={24}
                        height={24}
                    />
                </a>
                <a href="/cases" className={styles.caseStudyLink}> {}
                    View Case Study
                </a>
            </div>
        </div>
    );
};


