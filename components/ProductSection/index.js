import {Col, Row} from "reactstrap"
import styles from "./ProductSection.module.css"

export const ProductSection = (props) => {
    if (!props.isEven) {
        return <>
            <Row className={styles.product} id={props.name}>
                <Col xs="6">
                    <div
                        // className={`${styles.product}`}
                    >
                        <div>
                            <span className={styles.number}>{props.number}</span>
                            {/*<hr className={styles.line}/>*/}
                        </div>
                        <div className={styles.product_in}>
                            <p className={`text-default ${styles.price}`}>{props.price}</p>
                            <p className="text-title text-bold">{props.title}</p>
                            <p style={{lineHeight: "1.6"}} className="text-default text-bold">{props.description}</p>
                        </div>
                    </div>
                </Col>
                <Col xs={{size: "6"}}>
                    <img className={`float-right ${styles.image}`} src={props.image} alt=""/>
                </Col>
            </Row>
        </>
    }
    else {
        return <>
            <Row className={styles.product} id={props.name}>
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
                            <p className={`text-default ${styles.price}`}>{props.price}</p>
                            <p className={`text-default ${styles.price}`}>{props.price2}</p>
                            <p className="text-title text-bold">{props.title}</p>
                            <p style={{lineHeight: "1.6"}} className="text-default text-bold">{props.description}</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    }
}
