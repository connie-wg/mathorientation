import emailPNG from "../public/email.png";
import facebookPNG from "../public/facebook.png";
import instagramPNG from "../public/instagram.png";
// import twiiterPNG from "../public/twitter.png";

import Image from "next/image";

import { Container, Row, Col } from "react-bootstrap";

const Leader = (props) => {
  return (
    <>
      <p>
        {props.name} - {props.program} ({props.term})
      </p>
      {/* <Row>
          {props.email && (
            <Col>
              <a href={props.email}>
                <Image src={emailPNG} />
              </a>
            </Col>
          )}
          {props.facebook && (
            <Col>
              <a href={props.facebook}>
                <Image src={facebookPNG} />
              </a>
            </Col>
          )}
          {props.instagram && (
            <Col>
              <a href={props.instagram}>
                <Image src={instagramPNG} />
              </a>
            </Col>
          )}
        </Row> */}
    </>
  );
};

export default Leader;
