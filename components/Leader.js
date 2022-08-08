import emailPNG from "../public/email.png";
import facebookPNG from "../public/facebook.png";
// import twiiterPNG from "../public/twitter.png";
import instagramPNG from "../public/instagram.png";

import { Container, Row, Col } from "react-bootstrap";

const Leader = (props) => {
  let socials;
  if (props.email) {
    socials += (
      <Col>
        <a href={props.email}>
          <img src={emailPNG}></img>
        </a>
      </Col>
    );
  }
  if (props.facebook) {
    socials += (
      <Col>
        <a href={props.facebook}>
          <img src={facebookPNG}></img>
        </a>
      </Col>
    );
  }
  if (props.instagram) {
    socials += (
      <Col>
        <a href={props.instagram}>
          <img src={instagramPNG}></img>
        </a>
      </Col>
    );
  }
  //   if (props.twitter) {
  //   }
  return (
    <>
      <Container>
        <Row>
          <p>{props.name}</p>
        </Row>
        <Row>{socials}</Row>
      </Container>
    </>
  );
};

export default Leader;
