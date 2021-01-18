import AnchorLink from 'react-anchor-link-smooth-scroll'
import styles from "./AnchorNav.module.scss"
import {useState} from "react"

export const AnchorNav = (props) => {
    props.products.unshift(
        {
            name: "hero",
            number: "Начало"
        }
        )
    return <>
        <div className={styles.side_anchor}>
            {props.products.map((anchor, idx) => (
                <AnchorLink offset='200' href={`#`+ `${anchor.name}`}>
                <div key={idx} className={styles.each_anchor}>

                        <p className={`text-bold text-default m-0 text-center ${styles.text_anchor}`}>
                            {anchor.number}
                        </p>

            </div>
                </AnchorLink>))}
        </div>
    </>
}
