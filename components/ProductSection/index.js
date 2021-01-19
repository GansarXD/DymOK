import { Col, Row } from "reactstrap";
import styles from "./ProductSection.module.scss";

export const ProductSection = (props) => {
  if (!props.isEven) {
    return (
      <>
        <Row className={`${styles.product}`} id={props.name}>
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
                <p
                  style={{ lineHeight: "1.6" }}
                  className="text-default text-bold"
                >
                  {props.description}
                </p>
              </div>
            </div>
          </Col>
          <Col xs="6">
            <img
              className={`float-right ${styles.image}`}
              src={props.image}
              alt=""
            />
          </Col>
        </Row>
        {/*Mobile*/}
        <Row className="d-md-none" style={{ marginBottom: "50px" }}>
          <Col xs="12">
            <div
            // className={`${styles.product}`}
            >
              <div>
                <span className={styles.number}>{props.number}</span>
                {/*<hr className={styles.line}/>*/}
              </div>
              <div className={styles.product_in}>
                <p className={` ${styles.price}`}>{props.price}</p>
                <p style={{ fontSize: "35px" }} className="text-bold">
                  {props.title}
                </p>
                <p
                  style={{
                    lineHeight: "1.8",
                    fontSize: "15px",
                    fontWeight: "400",
                  }}
                >
                  {props.description}
                </p>
              </div>
            </div>
          </Col>
          <Col xs="12">
            <img
              className={`float-right ${styles.image}`}
              src={props.image}
              alt=""
            />
          </Col>
        </Row>
      </>
    );
  }

  // ---------------------------------------------------------------------------
  else {
    return (
      <>
        <Row className={`${styles.product}`} id={props.name}>
          <Col xs="6">
            <img className={styles.image} src={props.image} alt="" />
          </Col>
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
                <p className={`text-default ${styles.price}`}>{props.price2}</p>
                <p className="text-title text-bold">{props.title}</p>
                <p
                  style={{ lineHeight: "1.6" }}
                  className="text-default text-bold"
                >
                  {props.description}
                </p>
              </div>
            </div>
          </Col>
        </Row>
        {/*-----------------------------------------------------------Mobile*/}
        <Row className="d-md-none" style={{ marginBottom: "50px" }}>
          <Col xs="12">
            <div
            // className={`${styles.product}`}
            >
              <div>
                <span className={styles.number}>{props.number}</span>
                {/*<hr className={styles.line}/>*/}
              </div>
              <div className={styles.product_in}>
                <p className={` ${styles.price}`}>{props.price}</p>
                <p className={` ${styles.price}`}>{props.price2}</p>
                <p style={{ fontSize: "35px" }} className="text-bold">
                  {props.title}
                </p>
                <p
                  style={{
                    lineHeight: "1.8",
                    fontSize: "15px",
                    fontWeight: "400",
                  }}
                >
                  {props.description}
                </p>
              </div>
            </div>
          </Col>
          <Col xs="12">
            <img
              className={`float-right ${styles.image}`}
              src={props.image}
              alt=""
            />
          </Col>
        </Row>
      </>
    );
  }
};
