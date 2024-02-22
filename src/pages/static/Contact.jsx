import Layout from "../../components/layout/Layout.jsx";
import { Col, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <Layout>
      <h3 className="text-center">Contact Us</h3>
      <Row className="justify-content-center">
        <Col md={10}>
          <p class="text-center">
            Contact me from here <span className="fst-italic">@@@@@@@@@@@@gmail.com</span>
          </p>
        </Col>
      </Row>
    </Layout>
  );
};

export default Contact;