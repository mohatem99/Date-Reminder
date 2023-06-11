import { Row, Col } from "react-bootstrap";

import Card from "./Card";
const CardList = ({ person }) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8">
        <div className="rectangle p-2">
          {person.length ? (
            person.map((item) => {
              console.log(item);
              return <Card data={item} />;
            })
          ) : (
            <h2 className="p-5 text-center">لا يوجد مواعيد اليوم</h2>
          )}
        </div>
      </Col>
    </Row>
  );
};
export default CardList;
