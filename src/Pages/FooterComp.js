import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import logo from '../logo.png'

const style = {
    textAlign: 'left',
    listStyle: "none",
    textDecoration: "none",
    color: "black"
}

const FooterComp = () => {
  return (
    <div>
      <Container className="bg-light p-4">
        <Row>
          <Col md={2} xs={4} >
            <img src={logo} alt="" width={145} />
            <p style={{textAlign: "center"}}>Connect With Us</p>
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ marginRight: 12, fontSize: 20 }}
            />
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ marginRight: 12, fontSize: 20 }}
            />
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ marginRight: 12, fontSize: 20 }}
            />
            <FontAwesomeIcon
              icon={faYoutube}
              style={{ marginRight: 12, fontSize: 20 }}
            />
          </Col>
          <Col md={2} xs={4}>
            <h5>Kategori</h5>
                <ul >
                    <a style={style} href=""><li>News</li></a>
                    <a style={style} href=""><li>Edukasi</li></a>
                    <a style={style} href=""><li>Finance</li></a>
                    <a style={style} href=""><li>Technology</li></a>
                </ul>
          </Col>
          <Col md={2} xs={4}>
            <h5>Layanan</h5>
            <ul >
                    <a style={style} href=""><li>Forum</li></a>
                    <a style={style} href=""><li>AdsMart</li></a>
                    <a style={style} href=""><li>Event</li></a>
                </ul>
          </Col>
          <Col md={2} xs={4}>
            <h5>Informasi</h5>
            <ul >
                    <a style={style} href=""><li>Redaksi</li></a>
                    <a style={style} href=""><li>Pedoman Media</li></a>
                    <a style={style} href=""><li>Karir</li></a>
                    <a style={style} href=""><li>Kotal Pos</li></a>
                </ul>
          </Col>
          <Col md={2} xs={4}>
          <h5>Contact</h5>
          <ul >
                    <a style={style} href=""><li>News</li></a>
                    <a style={style} href=""><li>Edukasi</li></a>
                    <a style={style} href=""><li>Finance</li></a>
                    <a style={style} href=""><li>Technology</li></a>
                </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComp;
