import { Card } from "react-bootstrap";
import MyCard from "./Card";
import { Container, Row, Col } from 'react-bootstrap';

const CardContainer = () => {
  return (
    <Container className="py-5">           
      <Row 
        className="g-4"
      >
        <Col>
          <MyCard />
        </Col>

        <Col>
          <MyCard />
        </Col>

        <Col>
          <MyCard  />
        </Col>

        <Col>
          <MyCard />
        </Col>
      </Row>
    </Container>
  );
};

export default CardContainer; 

