import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const [buttonText] = useState('Send');
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form action="https://formsubmit.co/a69aa38b580ed61fd0662d6ff7fe18ac" method="POST">
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input name = "firstname" type="text" placeholder="First Name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input name = "lastname" type="text" placeholder="Last Name"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input name = "email" type="email" placeholder="Email Address"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input name = "phone" type="tel" placeholder="Phone No." />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea name = "message" rows="6" placeholder="Message"></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
