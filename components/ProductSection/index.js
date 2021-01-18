import React from "react"
import {Col, Row} from "reactstrap"
import styles from "./ProductSection.module.css"

export const ProductSection = (props) => {
    if (!props.isEven) {
        return <React.Fragment>
            <Row className={styles.product}>
                <Col xs="6">
                    <div
                        // className={`${styles.product}`}
                    >
                        <div>
                            <span className={styles.number}>{props.number}</span>
                            {/*<hr className={styles.line}/>*/}
                        </div>
                        <div className={styles.product_in}>
                            <p className={`text-default text-bold ${styles.price}`}>{props.price}</p>
                            <p className="text-title text-bold">{props.title}</p>
                            <p className="text-default text-bold">{props.description}</p>
                        </div>
                    </div>
                </Col>
                <Col xs={{size: "6"}}>
                    <img className={`float-right ${styles.image}`} src={props.image} alt=""/>
                </Col>
            </Row>
        </React.Fragment>
    }
    else {
        return <React.Fragment>
            <Row className={styles.product}>
                <Col xs={{size: "6"}}><img className={styles.image} src={props.image} alt=""/></Col>
                <Col xs={{size: "6"}}>
                    <div
                        // className={`${styles.product}`}
                    >
                        <div>
                            <span className={styles.number}>{props.number}</span>
                            {/*<hr className={styles.line}/>*/}
                        </div>
                        <div className={styles.product_in}>
                            <p className={`text-default text-bold ${styles.price}`}>{props.price}</p>
                            <p className="text-title text-bold">{props.title}</p>
                            <p className="text-default text-bold">{props.description}</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    }
}
