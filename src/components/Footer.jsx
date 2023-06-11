import { Row, Col, Button } from "react-bootstrap";

const Footer = ({ onDelete, onView }) => {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8" className="d-flex justify-content-between">
        <Button onClick={onDelete} className="btn-style p-2">مسح الكل </Button>
        <Button onClick={onView} className="btn-style p-2">عرض الكل</Button>
      </Col>
    </Row>
  );
};
export default Footer;
